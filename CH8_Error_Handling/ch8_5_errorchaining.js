try {
    try {
        throw new Error("Database connection refused");
    } catch (err) {
        // Chain the original error!
        throw new Error("Failed to fetch user data", { cause: err });
    }
} catch (error) {
    console.log("  Error:", error.message);
    console.log("  Cause:", error.cause.message);
    console.log("  → Complete error history preserved!\n");
}

