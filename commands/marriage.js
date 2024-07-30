module.exports = {
    name: 'marriage',
    description: "status of your marriage",
    execute(message, args, client, Discord ){
        const moment = require('moment');
        const fs = require('fs');
        let rawdata = fs.readFileSync('./marriage.json');
        let marriageJSON = JSON.parse(rawdata);
        let toJS = marriageJSON;
        const infoTargetPfp = `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`;
        
        const findmarriageSelf = toJS.filter(function(item) { return item.marriageUserSelf === message.author.id; });
        if(!findmarriageSelf[0]){
            message.channel.send("Hate to break it to you but. you arent married ;-;");
        } else if (findmarriageSelf[0]) {
            newEmbed = new Discord.MessageEmbed()
            .setColor('#30c4e6')
            .setTitle('Marriage Certificate')
            .setThumbnail(infoTargetPfp)
            .setDescription(`:heart: Marriage status between <@${findmarriageSelf[0].marriageUserSelf}> and <@${findmarriageSelf[0].marriageUserTarget}>`)
            .addFields({name: "Marriage Date", value: moment(findmarriageSelf[0].marriageTime).format('LLLL')})
            .setFooter(`Marriage id: ${findmarriageSelf[0].marriageid} || total marriages: ${(toJS.length - 1) / 2}`);
            message.channel.send(newEmbed);
        }
    }
}