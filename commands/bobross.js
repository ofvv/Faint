const DIG = require("discord-image-generation");
module.exports = {
    name: 'bobross',
    description: "generates image with bobross format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Bobross().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "bobross.png");;
        message.channel.send(attach)
        
    }
}