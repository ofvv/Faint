module.exports = {
    name: 'divorce',
    description: "divorces a user",
    execute(message, args, client, Discord){
        const fs = require('fs');
        let rawdata = fs.readFileSync('./marriage.json');
        let marriageJSON = JSON.parse(rawdata);
        let toJS = marriageJSON;
        
        const findmarriageSelf = toJS.filter(function(item) { return item.marriageUserSelf === message.author.id; });
        if(!findmarriageSelf[0]){
            message.reply("You aren't married to anyone.....How are you going to divorce.");
        } else if (findmarriageSelf[0]){
            message.channel.send(`<@${message.author.id}> Are you **sure** you want to divorce <@${findmarriageSelf[0].marriageUserTarget}> ? ` + "`Y/N`");
            
            const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
            collector.on('collect', message => {
                if(message.content.toLowerCase() == "n"){
                   return message.channel.send("I knew you wouldnt leave your loved one");
                } else if(message.content.toLowerCase() == "y"){
                    const del = toJS.findIndex(a=> a.marriageid === findmarriageSelf[0].marriageid);
                    if (del > -1) {
                        toJS.splice(del, 2);
                    }
                    let data = JSON.stringify(toJS);
                    fs.writeFileSync('./marriage.json', data);
                    message.channel.send(`**Gasp!** ${message.author} you divorced <@${findmarriageSelf[0].marriageUserTarget}>`);
                }

            });
        }
    }
}