const { Telegraf } = require('telegraf')
const { HttpsProxyAgent } = require('https-proxy-agent')
const bot = new Telegraf('839609997:AAF8U9Mzbz47mM-RdInZ1oghk361w1YEIaw', {
  telegram: {
    agent: new HttpsProxyAgent('http://192.168.7.251:3128')
  }
});

bot.start((ctx) => ctx.reply('Welcome'))

exports.bot = bot;
// https://api.telegram.org/bot839609997:AAF8U9Mzbz47mM-RdInZ1oghk361w1YEIaw/getUpdates


