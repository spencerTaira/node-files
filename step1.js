"use strict";

const fsP = require('fs/promises');
const argv = process.argv;

async function cat(path) {
  try {
    const contents = await fsP.readFile(path, "utf8");
    console.log('file contents', contents);
  } catch (err) {
    console.log(`Error reading ${path}`, err);
    process.exit(0);
  }
}

console.log(argv[2]);
cat(argv[2]);