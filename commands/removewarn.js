module.exports = {
    name: 'removewarn',
    description: "Removes specific modlog for a user",
    async execute(message, args, client, Discord ){
        
        if(message.member.permissions.has("KICK_MEMBERS")){
            const fs = require('fs');
            let rawdata = fs.readFileSync('./modlog.json');
            let modlogJSON = JSON.parse(rawdata);
            let toJS = modlogJSON;

            let target = message.mentions.users.first() || await client.users.fetch(args[0])
            .catch(console.error);

            if(!target) return message.reply("Can't remove warnings of someone that does not exist");
            if(!args[1]) return message.reply("make sure you define the warning you want to remove");
            
            const checkIfWarn = toJS[target.id][args[1]-1].type.includes("Warning");
            if(!checkIfWarn) return message.reply("That's not a warning");
            
            toJS[target.id].splice(args[1]-1, 1);

            newEmbed = new Discord.MessageEmbed()
                .setDescription(`:white_check_mark: Warning has been cleared.`)
                .setColor('#30c4e6');
            message.channel.send(newEmbed);

            let data = JSON.stringify(toJS, null, 2);
                    
            fs.writeFileSync('./modlog.json', data);
        } else if (supportRole){
            message.channel.send('`Please ping moderator or above to remove warnings.`');
        } else{
            message.channel.send('`Mod use only, please refrain from using this!`');
        }
        


    }
}