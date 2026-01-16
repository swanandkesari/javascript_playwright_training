function doFailSomeWay() {
    throw new Error("Database connection failed");
}

function doFailAnotherWay() {
    throw new Error("Network timeout");
}

function doFailYetAnotherWay() {
    throw new Error("Authentication failed");
}

function doWork(scenario) {
    try {
        if (scenario === 1) {
            doFailSomeWay();
        } else if (scenario === 2) {
            doFailAnotherWay();
        } else if (scenario === 3) {
            doFailYetAnotherWay();
        } else {
            console.log("  ✓ Work completed successfully");
        }
    } catch (err) {
        // Wrap error with context and rethrow
        throw new Error(`Failed during scenario ${scenario}`, { cause: err }); // throwing again cause is variable and error is assigned to that variable.
    }
}

//doWork(1)

//handlerfunctions

function handleFailSomeWay(e) {
    console.log("  🔧 Handling database failure:");
    console.log(`     → Reconnecting to database...`);
    console.log(`     → Original error: ${e.message}`);
}

function handleFailAnotherWay(cause) {
    console.log("  🔧 Handling network failure:");
    console.log(`     → Retrying with exponential backoff...`);
    console.log(`     → Original error: ${cause.message}`);
}

function handleFailAuth(cause) {
    console.log("  🔧 Handling authentication failure:");
    console.log(`     → Refreshing authentication token...`);
    console.log(`     → Original error: ${cause.message}`);
}


try {
    //doWork(1);
    doWork(2);
} catch (err) {
    console.log(`  ⚠ Caught: ${err.message}`);

    // Switch on the original error message
    switch (err.cause.message) {
        case "Database connection failed":
            handleFailSomeWay(err.cause);
            break;
        case "Network timeout":
            handleFailAnotherWay(err.cause);
            break;
        case "Authentication failed":
            handleFailAuth(err.cause);
            break;
        default:
            console.log(`  ❌ Unknown error: ${err.cause.message}`);
            throw err;
    }
}
