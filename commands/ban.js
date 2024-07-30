module.exports = {
    name: 'ban',
    description: "bans a member from the server.",
    async execute(message, args, client) {
        const admin = message.mentions.users.first();
        if (!message.member.permissions.has("BAN_MEMBERS")) return  message.channel.send("You do not have perms to ban someone.");
        if (admin.id === message.author.id) return message.channel.send("You cant ban yourself")
        //Banning User
        if (message.member.permissions.has("BAN_MEMBERS")) {
            const member = message.mentions.users.first() || await client.users.fetch(args[0])
                .catch(console.error);
            if (!member) message.reply("Invalid user");
            let reasoning = args.slice(1).join(' ');
            if (!reasoning) reasoning = "None";
            await (member).send(`Succesfully banned user. Reason: ${reasoning}`)
                .catch(console.error);
            message.guild.members.ban(member, { reason: `Banned by ${message.author.id} Reason: ${reasoning}` });
            message.channel.send(`Succesfully banned user. Reason: ${reasoning}`);

            //Modlog addition.
            const fs = require('fs');
            let rawdata = fs.readFileSync('./modlog.json');
            let modlogJSON = JSON.parse(rawdata);
            let toJS = modlogJSON;

            if (!toJS[member.id]) {
                toJS[member.id] = [{ warnedBy: message.author.id, reason: reasoning, type: "Ban", date: new Date() }];
            } else {
                toJS[member.id].push({ warnedBy: message.author.id, reason: reasoning, type: "Ban", date: new Date() })
            }

            let data = JSON.stringify(toJS, null, 2);

            fs.writeFileSync('./modlog.json', data);

        }
    }
}












// module.exports = {
//     name: 'ban',
//     description: "bans a member from the server.",
//     async execute(message, args, client) {
//         const admin = message.mentions.users.first();
//         if (!message.member.permissions.has("BAN_MEMBERS")) return  message.channel.send("You do not have perms to ban someone.");
//         if (admin.id === message.author.id) return message.channel.send("cant ban yourself")
//         //Banning User
//         if (message.member.permissions.has("BAN_MEMBERS")) {
//             const member = message.mentions.users.first() || await client.users.fetch(args[0])
//                 .catch(console.error);
//             if (!member) message.reply("Invalid user");
//             let reasoning = args.slice(1).join(' ');
//             if (!reasoning) reasoning = "None";
//             await (member).send(`User has been banned. Reason: \`${reasoning}\``)
//                 .catch(console.error);
//             message.guild.members.ban(member, { reason: `Banned by ${message.author.id} Reason: ${reasoning}` });
//             message.channel.send(`\`User has been banned. Reason: ${reasoning}\``);

//             //Modlog addition.
//             const fs = require('fs');
//             let rawdata = fs.readFileSync('./modlog.json');
//             let modlogJSON = JSON.parse(rawdata);
//             let toJS = modlogJSON;

//             if (!toJS[member.id]) {
//                 toJS[member.id] = [{ warnedBy: message.author.id, reason: reasoning, type: "Ban", date: new Date() }];
//             } else {
//                 toJS[member.id].push({ warnedBy: message.author.id, reason: reasoning, type: "Ban", date: new Date() })
//             }

//             let data = JSON.stringify(toJS, null, 2);

//             fs.writeFileSync('./modlog.json', data);

//         }
//     }
// }