module.exports = {
    name: 'massban',
    description: "Bans all given users.",
    async execute(message, args, client){
        if(!message.member.permissions.has("ADMINISTRATOR")) return;
        if(message.member.permissions.has("ADMINISTRATOR")){
            if (!args[0]) return message.reply('`Please give the id(s) of the members you want to ban!`')
            const authorMassBan = message.author.username + "#" + message.author.discriminator;
            let forLoopLength = parseInt(args.length) - 1;
        
            for (i = 0; i <= forLoopLength; i++){
                const faintsbitches = await client.users.fetch(args[i]);
                console.log('//////////////////////////////' + '\n' + `Banned: ${faintsbitches.username}#${faintsbitches.discriminator}` + '\n' + 'Reason: Massbanned' + '\n' + `By: ${authorMassBan}`);
                message.guild.members.ban(faintsbitches, {reason: "Massbanned by: " + authorMassBan});
            }

            message.channel.send(`Banned **${args.length}** users.`);
        } 

        
    }
}