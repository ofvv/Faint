const { tictactoe } = require('reconlx')

module.exports = {
    name : 'ttt', 
    Description: "tictactoe game",
    async execute(message, args, client){
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Please specify a member')
        
       const ttt = new tictactoe({
            player_two: member, 
            message: message
        })
    }
}