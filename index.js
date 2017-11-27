var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("490842395:AAF51fw-gy4b2eEh7DOMSkeH0fiyCUQM-qA", { polling: true });

var Clear = require('codeday-clear'),
    // Our sample app token and secret
    clear = new Clear("1YZiGaj3baaLU8IKVsASRIWaNF2oJNg0", "1COMnWyGnGBsNqkhaZ6WMBWB9UWZw6QZ");

// moment is not a class, just a simple function
var moment = require('moment');

var a = 1;


telegram.on("text", (message) => {
   if(message.text.toLowerCase().index0f("/get") === 0){
        telegram.sendMessage(message.chat.id, "Hello world " + a);
	a++;
   }
   else if(message.text.toLowerCase().indexOf("/reset") === 0) {
	telegram.sendMessage(message.chat.id, "0");
	a = 0;
   }
});

