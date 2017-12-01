const BOT_TOKEN='490842395:AAF51fw-gy4b2eEh7DOMSkeH0fiyCUQM-qA';
const Telegraf = require('telegraf')

const bot = new Telegraf(BOT_TOKEN)
bot.start((ctx) => {
  console.log('started:', ctx.from.id)
  return ctx.reply('Welcome! Use /help')
})

var counter = 0;

bot.command('help', (ctx) => ctx.reply('Reset to 0 /reset \nAdd X /add \nShow current value /get'))
bot.command('get', (ctx) => ctx.reply('Value = ' + counter))
bot.command('reset', (ctx) => { 
    counter = 0;
    ctx.reply('Value = ' + counter)
})
bot.command('add', (ctx) => { 
    argv = ctx.message.text.split(" ");
    if (!isNaN((argv[1])))
            counter += +argv[1];
    ctx.reply('Value = ' + counter)
})


bot.hears('hi', (ctx) => ctx.reply('Hey there!'))
bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.startPolling()