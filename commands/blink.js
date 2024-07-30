const DIG = require("discord-image-generation");
module.exports = {
    name: 'blink',
    description: "generates image with blink format",
    async execute(message, args, client, Discord ){
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let member2 = message.mentions.users.first() 
        let avatar2 = member2.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Blink().getImage(avatar, avatar2)
        let attach = new Discord.MessageAttachment(img,  "blink.gif");;
        message.channel.send(attach)
        
    }
}