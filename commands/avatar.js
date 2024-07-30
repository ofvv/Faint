const Discord = require("discord.js");
module.exports = {
    name: "avatar",
    description: "Displays users avatar",
     async execute (message, args, client) {
         const user = message.author;
         message.channel.send(
            new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setFooter(`${user.tag}'s avatar!`)
            .setImage(message.author.displayAvatarURL())
         )
       
        
    }
}