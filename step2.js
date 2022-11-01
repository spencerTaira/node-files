"use strict";

const fsP = require('fs/promises');
const fs = require('fs');
const axios = require('axios');

const argv = process.argv;

/** If the path provided is a local file path, this function takes the file and
 * prints it to the console. If the path provided is invalid, it will throw an
 * error and exit the program.
 */


async function cat(path) {

  try {
    const contents = await fsP.readFile(path, "utf8");
    console.log(contents)
  } catch (err) {
    console.log(`Error reading ${path}`, err);
    process.exit(0);
  }

}

/** If the path provided is a URL, this function takes the URL and
 * prints it to the console. If the URL is invalid, it will throw an
 * error and exit the program.
 */

async function webCat(url) {

  try {
    const resp = await axios.get(url);
    let html = resp.data;
    console.log('html: ', html)

  } catch (err) {
    console.log("Not a valid URL");
    process.exit(1);
  }


}

function readFileToConsole(path) {

  if (fs.existsSync(path)) {  //TODO: URL() with a try-catch
    return cat(path)
  } else {
    return webCat(path)
  }

}

readFileToConsole(argv[2]);