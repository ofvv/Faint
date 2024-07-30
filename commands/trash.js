const DIG = require("discord-image-generation");
module.exports = {
    name: 'trash',
    description: "generates image with trash format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Trash().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "trash.png");;
        message.channel.send(attach)
        
    }
}