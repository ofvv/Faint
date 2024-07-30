const distube = require("distube")

module.exports = {
    name: 'skip',
    description: "skip current song",
   async execute(message, args, client) {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    let queue = await client.distube.getQueue(message);
        if(queue){
    
        
        client.distube.skip(message)

        message.channel.send('**Skipped current song!**')
        }
        else if(!queue){
            return
            
        };
    }

}

