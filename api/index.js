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
        click /jenis_hewan`
    );
});

bot.onText(/\/jenis_hewan/, (msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
            click /karnivora \n
            click /herbivora \n
            click /omnivora
        `
    );
});
bot.onText(/\/karnivora/, (msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
           Singa \n
           Serigala \n
           Harimau \n
           Buaya \n
           Cheetah
          
        `
    );
});

bot.onText(/\/herbivora/, (msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
        Kambing \n
        Sapi \n
        Kuda \n
        Unta \n
        Kerbau
        `
    );
});

bot.onText(/\/omnivora/, (msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
        Ikan lele \n
        Kura-kura \n
        Landak \n
        Tupai tanah \n
        Burung gagak
        `
    );
});
bot.on('message', (msg) => {
  console.log(msg);
});




module.exports = router;
