const fs = require("fs");
const chalk = require("chalk");

module.exports = {
    menu: fs.readFileSync("./assets/image/dignity.jpg"),
    status: fs.readFileSync("./assets/image/status.jpg"),
    aendr: fs.readFileSync("./assets/image/anrr.jpg"),
    hnc: fs.readFileSync("./assets/image/hnc.jpg"),
    cekinfo: fs.readFileSync("./assets/image/cekinfo.jpg"),

    success: fs.readFileSync("./assets/image/success.jpg")
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
  