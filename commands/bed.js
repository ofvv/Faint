const DIG = require("discord-image-generation");
module.exports = {
    name: 'bed',
    description: "generates image with bed format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let member2 = message.mentions.users.first() 
        let avatar2 = member2.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Bed().getImage(avatar, avatar2)
        let attach = new Discord.MessageAttachment(img, "bed.png");;
        message.channel.send(attach)
        
    }
}