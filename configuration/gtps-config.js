const fs = require("fs");
const chalk = require("chalk");

module.exports = {
  // Server Information 
  servername: "NevolutionPS",
  serverowner: "akbarrdev",
  serverwebsite: "https://demo.gtps.app",
  linkhost: "https://demo.gtps.app/download",
  // Gapunya website? beli di https://gtps.app/pricing aja, cuma 2 dlan
  
  // Path => navigate to the folder like the example
  exename: "gtps3.exe",
  exe: "D:/Project GTPS/Source/gtps3.exe",
  https: "D:/Project GTPS/iGuard/AerosV5.02.exe",
  onlinecount: "D:/Project GTPS/Source/online_count.txt",
  player: "D:/Project GTPS/Source/players",
  world: "D:/Project GTPS/Source/worlds",
  guild: "D:/Project GTPS/Source/guilds",

  // In Game Information
  wotd: "START",
  dailyquestblockname1: "Mystery Block",
  dailyquestquantity1: "100",
  dailyquestblockname2: "Wood Block",
  dailyquestquantity2: "200",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
