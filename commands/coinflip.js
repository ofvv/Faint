const coinflip = require('coinflip');
module.exports = {
    name: 'cf',
    description: "Coinflip game",
    async execute(message, args, client, Discord ){
        if (coinflip()) {
            message.channel.send(`:coin: Heads!`);
          } else {
            message.channel.send(`:coin: Tails!`);
          }
        
    }
}