const DIG = require("discord-image-generation");
module.exports = {
    name: 'discordblue',
    description: "generates image with discordblue format",
    async execute(message, args, client, Discord ){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.DiscordBlue().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "discordblue.png");;
        message.channel.send(attach)
        
    }
}