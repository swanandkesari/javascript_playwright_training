function outerFunction() {
    innerFunction();
}

function innerFunction() {
    throw new Error("Error in inner function");
}

try {
    outerFunction();
} catch (error) {
    console.log("Error Message:", error.message);
    console.log("\nFull Stack Trace:");
  //  console.log(error.stack);
  console.log("  Value (first line):", error.stack.split('\n')[0]);
    console.log("  Entire stackTrace", error.stack.split('\n'))
}
