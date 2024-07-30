const Discord = require("discord.js");
var guesses;
var num = 0;
module.exports = {
    name: "guess",
    description: "Guess random number 1-10",
     async execute (message, args, client) {
        var mes = message.content.split(" ");
        if(mes[0] == 'f-guess') {
            if (num == 0)
            {
                message.reply('Picking a random number between 1 and 10000');
                num = Math.floor((Math.random() * 10000) + 1);
                guesses = 0;
            }
            else if(mes[1] == num)
            {
                guesses++;
                message.reply('You got it! Only took ' + guesses + ' tries.');
                num = Math.floor((Math.random() * 10000) + 1);
                guesses = 0;
            }
            else if(mes[1] < num)
            {
                message.reply(mes[1] + ' is too low');
                guesses++;
            }
            else if(mes[1] > num)
            {
                message.reply(mes[1] + ' is too high');
                guesses++;
            }return;
        }
        
    }
}