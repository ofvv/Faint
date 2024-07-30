module.exports = {
    name: 'modlogs',
    description: "Shows the modlog for a user",
    async execute(message, args, client, Discord){ 
        if (!message.member.permissions.has("KICK_MEMBERS")) return;
        if (message.member.permissions.has("KICK_MEMBERS")){
            const moment = require('moment');
            const fs = require('fs');
            let rawdata = fs.readFileSync('./modlog.json');
            let modlogJSON = JSON.parse(rawdata);
            let toJS = modlogJSON;

            let target = message.mentions.users.first() || await client.users.fetch(args[0])
            .catch(console.error);
            
            if(!target) return message.reply("Can't show logs of someone that does not exist.");
            if(!toJS[target.id]){
                toJS[target.id] = [];
                let Embed = new Discord.MessageEmbed()
                .setColor('#30c4e6')
                message.channel.send(`**[${toJS[target.id].length}] Logs found:**`)
                message.channel.send(Embed);

                let data = JSON.stringify(toJS, null, 2);
            
                fs.writeFileSync('./modlog.json', data);

                return;
            }
            
            let newEmbed = new Discord.MessageEmbed()
            .setColor('#30c4e6')


            for(i = toJS[target.id].length - 1; i >= 0; i--){
                newEmbed.addFields({name:`**Userlog: ${i+1}** `, value: 
                `
                **Type:** ${toJS[target.id][i].type}
                **User:** (${target.id}) ${target} 
                **Moderator:** <@${toJS[target.id][i].warnedBy}>
                **Reason:** ${toJS[target.id][i].reason} - ${moment(toJS[target.id][i].date).format('LLLL')}
                `
                });

            }
            message.channel.send(`**[${toJS[target.id].length}] Logs found:**`)
            message.channel.send(newEmbed);

        }
    
    
    }
}