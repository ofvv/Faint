const DIG = require("discord-image-generation");
module.exports = {
    name: 'discordblack',
    description: "generates image with discordblack format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.DiscordBlack().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "discordblack.png");;
        message.channel.send(attach)
        
    }
}