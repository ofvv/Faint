// const DIG = require("discord-image-generation");
// module.exports = {
//     name: 'podium',
//     description: "generates image with podium format",
//     async execute(message, args, client, Discord ){
//         let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
//         let member2 = message.mentions.users.first() 
//         let member3 = message.mentions.users.first() 
//         let text1 = message.author.tag
//         let text2 = member2.tag
//         let text3 = member3.tag
//         let avatar2 = member2.displayAvatarURL({ dynamic: false, format: 'png' });
//         let avatar3 = member3.displayAvatarURL({ dynamic: false, format: 'png' });
//         let img = await new DIG.Podium().getImage(avatar, avatar2, avatar3, text1, text2, text3)
//         let attach = new Discord.MessageAttachment(img, "podium.png");;
//         message.channel.send(attach)
        
//     }
// }