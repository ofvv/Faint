module.exports = {
    name: 'clearlogs',
    description: "Removes all modlogs for a user",
    async execute(message, args, client, Discord){
         if(message.member.permissions.has("KICK_MEMBERS")){
            const fs = require('fs');
            let rawdata = fs.readFileSync('./modlog.json');
            let modlogJSON = JSON.parse(rawdata);
            let toJS = modlogJSON;

            let target = message.mentions.users.first() || await client.users.fetch(args[0])
            .catch(console.error);
            
            if(!target) return message.reply("Can't remove logs of someone that does not exist");

            if(!toJS[target.id]) return message.reply("This user has no logs to clear.");

            toJS[target.id] = [];
            
            newEmbed = new Discord.MessageEmbed()
            .setDescription(`:white_check_mark: ${target}(${target.id}) log's have been cleared.`)
            .setColor('#30c4e6');
            message.channel.send(newEmbed);

            console.log(`////////////////////////////// \nLog's cleared by ${message.author.id}\n //////////////////////////////`);
            
            let data = JSON.stringify(toJS, null, 2);
                
            fs.writeFileSync('./modlog.json', data);

       } else if(modRole || supportRole){
            message.channel.send("`Ping staff+ for removing all logs.`");
       } else {
            message.channel.send('`Mod use only, please refrain from using this!`');
       }
        



    }
}