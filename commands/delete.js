const DIG = require("discord-image-generation");
module.exports = {
    name: 'delete',
    description: "generates image with delete format",
    async execute(message, args, client, Discord) {
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.DElete().getImage(avatar);
        let attach = new Discord.MessageAttachment(img, "delete.png");
        message.channel.send(attach)


    }
}