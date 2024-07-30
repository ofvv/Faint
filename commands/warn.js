module.exports = {
    name: 'warn',
    description: "Warns a User",
    async execute(message, args, Discord, client){ 
        
        if (!message.member.permissions.has("KICK_MEMBERS")) return;
        if (message.member.permissions.has("KICK_MEMBERS")){
            const fs = require('fs');
            let rawdata = fs.readFileSync('./modlog.json');
            let modlogJSON = JSON.parse(rawdata);
            let toJS = modlogJSON; 
            
            let target = message.mentions.users.first() || await client.users.fetch(args[0])
            .catch(console.error);
            
            if(!target) return message.reply("Can't warn someone that does not exist.")
            if(target.id === message.author.id) return message.reply("Can't warn yourself.")
            reason = args.slice(1).join(' ');
            if(!reason) return message.reply("Why do you want to warn someone without reason?");

            if(!toJS[target.id]){
                toJS[target.id] = [{warnedBy: message.author.id, reason: reason, type: "Warning", date: new Date()}];
                message.channel.send(`Warned ${target}, **Reason:** ${reason}`);
            } else {
                toJS[target.id].push({warnedBy: message.author.id, reason: reason, type: "Warning", date: new Date()})
                message.channel.send(`Warned ${target}, **Reason:** ${reason}`);
            }
            
            let data = JSON.stringify(toJS, null, 2);
            
            fs.writeFileSync('./modlog.json', data);

            (target).send("You've been warned in happy juice for: `" + reason + "`");
        }
        
    

    
    
    }
}