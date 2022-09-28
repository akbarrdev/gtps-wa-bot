const fs = require("fs");
const chalk = require("chalk");
const { doesNotThrow } = require("assert");

// Other
global.owner = ["6282370784874", "6283809215245"];
global.staff = ["6283809215245"];
global.footer = "Dignity by akbarr.dev";
global.sessionName = "dignity";
global.prefa = ["", "/", "!", "."]; // "" = no prefix

global.thumb = fs.readFileSync("./assets/image/dignity.jpg");


let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
