const distube = require("distube")

module.exports = {
    name: 'stop',
    alias: ["s"],
    description: "stop playing music",
   async execute(message, args, client) {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    let queue = await client.distube.getQueue(message);
        if(queue){
    
        
        client.distube.stop(message)

        message.channel.send('I have left the voice channel')
        }
        else if(!queue){
            return
            
        };
    }

}

