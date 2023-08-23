const { Telegraf } = require('telegraf')
const { HttpsProxyAgent } = require('https-proxy-agent')
const bot = new Telegraf(process.env.TOKEN, {
  telegram: {
    agent: new HttpsProxyAgent(process.env.PROXY)
  }
});

bot.start((ctx) => ctx.reply('Welcome'))

exports.bot = bot;


