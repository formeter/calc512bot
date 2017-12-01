var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("490842395:AAF51fw-gy4b2eEh7DOMSkeH0fiyCUQM-qA", { polling: true });

var Clear = require('codeday-clear'),
    // Our sample app token and secret
    clear = new Clear("1YZiGaj3baaLU8IKVsASRIWaNF2oJNg0", "1COMnWyGnGBsNqkhaZ6WMBWB9UWZw6QZ");

// moment is not a class, just a simple function
var moment = require('moment');

counter = 0;

telegram.on("text", (message) => {
  if(message.text.toLowerCase().indexOf("/get") === 0){
      telegram.sendMessage(message.chat.id, counter);
  }
  else if(message.text.toLowerCase().indexOf("/reset") === 0){
      counter = 0;
      telegram.sendMessage(message.chat.id, "Current value is reset to 0");
  }
  else if(message.text.toLowerCase().indexOf("/add") === 0){
      counter++;
      telegram.sendMessage(message.chat.id, counter);
  }
  else if(message.text.toLowerCase().indexOf("/help") === 0){
      telegram.sendMessage(message.chat.id, "Reset to 0 /reset \nAdd 1 /add \nShow current value /get");
  }      
  else{
      telegram.sendMessage(message.chat.id, "You did not enter any command. Use /help");
  }    
});


