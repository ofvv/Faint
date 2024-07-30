module.exports = {
    name: 'marry',
    description: "marry a user",
    execute(message, args, client, Discord){
        const fs = require('fs');
        let rawdata = fs.readFileSync('./marriage.json');
        let marriageJSON = JSON.parse(rawdata);
        let toJS = marriageJSON;
        
        const findmarriageSelf = toJS.filter(function(item) { return item.marriageUserSelf === message.author.id; });
        const ogAuthor = message.author;
        
        if(findmarriageSelf[0]){

            message.channel.send(`You are already married to <@${findmarriageSelf[0].marriageUserTarget}>. If you want to marry someone else atleast break up first u fucking **cheater!**`);
        } else if(!findmarriageSelf[0]){
            const marryTarget = message.mentions.users.first();
            if (!args[0] || !marryTarget) return message.reply("Can't marry someone that doesn't exist dummy.")
            if(marryTarget.id === message.author.id) return message.reply("I'm sorry baby but you cant legally marry yourself");
            
            const testmarriageTarget = toJS.filter(function(item) { return item.marriageUserSelf === marryTarget.id; });
            if(testmarriageTarget[0]) return message.channel.send(`Can't marry <@${testmarriageTarget[0].marriageUserSelf}> is already married to <@${testmarriageTarget[0].marriageUserTarget}>, homewrecking isn't allowed here you **whore!**`);
            
            const newMarriageId = Number(toJS[toJS.length-1].marriageid)+1;
            
            message.channel.send(`${marryTarget} Do you want to marry ${message.author} ? ` + "`Y/N`");
            
            const collector = new Discord.MessageCollector(message.channel, m => m.author.id === marryTarget.id, { time: 10000 });
            collector.on('collect', message => {
            if (message.content.toLowerCase() == "n") {
                return message.channel.send("marriage cancelled");
            } else if (message.content.toLowerCase() == "y") {
                const timeOfMarriage = new Date();
                let newMarriageSelf = {marriageid: newMarriageId, marriageUserSelf: ogAuthor.id, marriageUserTarget: marryTarget.id, marriageTime: timeOfMarriage};
                let newMarriageTarget = {marriageid: newMarriageId, marriageUserSelf: marryTarget.id, marriageUserTarget: ogAuthor.id, marriageTime: timeOfMarriage};
                toJS.push(newMarriageSelf);
                toJS.push(newMarriageTarget)
                console.log(`New marriage between ${ogAuthor.username} and ${message.author.username}`)
                let data = JSON.stringify(toJS);
                fs.writeFileSync('./marriage.json', data);
                message.channel.send(`:heart:**Congratulations!** ${message.author} you are now married to ${ogAuthor}:heart:`)
            }
        });
        }
    }
}