require("dotenv").config();
const { Telegraf } = require("telegraf");

module.exports = (request, response) => {
  const body = request.body;
  const query = request.query;

  const bot = new Telegraf(process.env.BOT_TOKEN);
  bot.start((ctx) => ctx.reply("Halo"));
  // bot.help((ctx) => ctx.reply('Send me a sticker'))
  // bot.on('sticker', (ctx) => ctx.reply('👍'))
  // bot.hears('hi', (ctx) => ctx.reply('Hey there'))
  bot.launch();

  response.json({
    status: "ok",
  });
};
