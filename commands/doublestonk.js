const DIG = require("discord-image-generation");
module.exports = {
    name: 'doublestonk',
    description: "generates image with doubleStonk format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let member2 = message.mentions.users.first() 
        let avatar2 = member2.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.DoubleStonk().getImage(avatar, avatar2)
        let attach = new Discord.MessageAttachment(img, "doubleStonk.png");;
        message.channel.send(attach)
        
    }
}