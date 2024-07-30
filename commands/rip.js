const DIG = require("discord-image-generation");
module.exports = {
    name: 'rip',
    description: "generates image with rip format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Rip().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "rip.png");;
        message.channel.send(attach)
        
    }
}