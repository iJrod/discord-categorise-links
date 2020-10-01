const Discord = require('discord.js');
const discordInfo = require('./config.json');
const bot = new Discord.Client();

bot.on('message', (msg) => {
    //const blacklist = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
    if (msg.channel.id !== discordInfo.CHANNEL_ID) return;
    if (msg.author.bot) return;
    if (msg.content.match(/http(s|):\/\/[a-zA-Z0-9-._~:\/?#\[\]@!$&'()*+,;=]+/) == null) return;

    react(msg);
});

async function react(m) {
  await m.react("👍")
  await m.react("👎")
  await m.channel.send(`${m.author} Thank you for your contribution to geekfeed!`);
}

bot.login(discordInfo.BOT_TOKEN).then(() => console.log(`${bot.user.tag} is running...`))