var express = require('express');
var router = express.Router();


// Bot Setting
const TelegramBot = require('node-telegram-bot-api');
const token = '2135496656:AAG1M60hln3GWloqZNJklp7fX-84MgVAv5s';
const bot = new TelegramBot(token, {polling: true});


let global_msg_id;
// Main Menu Bot
bot.onText(/\/start/, (msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `hello ${msg.chat.first_name}, welcome...\n
        click /jenis_makhluk_hidup`
    );
});

bot.onText(/\/jenis_makhluk_hidup/, (msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
            click/manusia \n
            click/hewan \n
            click/tumbuhan
        `
    );
});
bot.onText(/\/manusia/, (msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
            click/Pria \n
            click/Wanita
        `
    );
});

bot.onText(/\/Pria/, (msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
  https://www.google.com/search?q=pria&sxsrf=AOaemvKd7dYezj1iAnOM_ALpYYmbfrjwQw:1637824622428&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj1vMuW_LL0AhUsILcAHY0mAE0Q_AUoAXoECAIQAw&biw=1280&bih=569&dpr=1.5
        `
    );
});
bot.on('message', (msg) => {
  console.log(msg);
});




module.exports = router;
