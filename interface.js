const fs = require("fs");
const chalk = require("chalk");
const iciro = require("./configuration/gtps-config.js");
const a = "```";

module.exports = {
  menu: `〔 *List Menu Bot* 〕
 
  *⊷ Player Command ⊶*
⊳ status ( Server Status )
⊳ anr ( Assets and Role Price List )
⊳ hnc ( Host and Community Link )
⊳ cekinfo

  *⊷ Owner Command ⊶*
⊳ startserver
⊳ stopserver
⊳ stopanti
⊳ give
  ╰┈➤ vip
  ╰┈➤ mod
  ╰┈➤ dev
  ╰┈➤ level
  ╰┈➤ gems
  ╰┈➤ ltitle
  ╰┈➤ drtitle
  ╰┈➤ 125title
⊳ change
  ╰┈➤ email
  ╰┈➤ username
  ╰┈➤ password
  ╰┈➤ punchid
⊳ cekinfoadv
`,
  startserver: `*${iciro.servername} currently UP*
 
Worlds, Players and Guilds success loaded.
`,
  stopserver: `*${iciro.servername} currently DOWN*
 
Worlds, Players and Guilds has been saved safely.
`,
  assets_and_role: `〔 *Assets and Role Price List* 〕
   
*⊷ Assets Price List ⊶*
${a}⊳ Isi dengan list assets servermu.${a}

*⊷ Role Price List ⊶*
${a}⊳ Isi dengan list role servermu.${a}    
`,
  host_and_community: `〔 *Host and Community Link* 〕

*Link WhatsApp Group :* -
*Link Discord Server :* -
         
Tekan tombol dibawah untuk mengarahkanmu ke website download host dan virtual host.
`,
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
