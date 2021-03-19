// Helper for generating SWC JSON.
// USAGE: node genswc.js path/to/input.js > path/to/output.json
const {readFileSync} = require("fs");
const {parseSync} = require("../../../index.js");

const inputFile = process.argv[2];
if (!inputFile) {
    console.error("Missing input file. Hint: `node genswc.js path/to/input.js`");
    process.exit(1);
}

const code = readFileSync(inputFile, "utf8");

const swcAst = parseSync(code);
console.log(JSON.stringify(swcAst, null, 2));

