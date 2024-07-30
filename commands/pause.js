const distube = require("distube")
const Discord = require("discord.js");
module.exports = {
    name: 'pause',
    description: "pause current song",
   async execute(message, args, client) {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    let queue = await client.distube.getQueue(message);
        if(queue){
    
        
        client.distube.pause(message)

        message.channel.send('**Song paused!**')
        }
        else if(!queue){
            return
            
        };
    }

}

