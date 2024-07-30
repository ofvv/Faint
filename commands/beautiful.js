const DIG = require("discord-image-generation");
module.exports = {
    name: 'beautiful',
    description: "generates image with beautiful format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Beautiful().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "beautiful.png");;
        message.channel.send(attach)
        
    }
}