const fs = require("fs");

const buffer = fs.readFileSync(process.argv[2], "utf-8");
console.log(buffer.split("\n").length - 1);
