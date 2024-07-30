const DIG = require("discord-image-generation");
module.exports = {
    name: 'trigger',
    description: "generates image with trigger format",
    async execute(message, args, client, Discord) {
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Triggered().getImage(avatar);
        let attach = new Discord.MessageAttachment(img, "triggered.gif");
        message.channel.send(attach)


    }
}