const distube = require("distube")

module.exports = {
    name: 'resume',
    description: "resume paused song",
   async execute(message, args, client) {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    let queue = await client.distube.getQueue(message);
        if(queue){
    
        
        client.distube.resume(message)

        message.channel.send('**Song resumed!**')
        }
        else if(!queue){
            return
            
        };
    }

}

