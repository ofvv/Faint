const Discord = require("discord.js");
module.exports = {
    name: "randomavatar",
    description: "Displays random users avatar",
     async execute (message, args, client) {
         const user = client.users.cache.random();

         message.channel.send(
            new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setFooter(`${user.tag}'s avatar!`)
            .setImage(user.displayAvatarURL())
         )
       
        
    }
}

