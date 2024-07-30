const Discord = require('discord.js');
module.exports = {
    name: 'unban',
    description: "unbans a member from the server.",
    async execute(message, args, client) {
        if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You do not have perms to unban someone.");

    let reason = args.slice(1).join("");
    let userID = args[0]; 
    
    
    if(!reason) reason = 'No reason given';
    if(!args[0]) return message.channel.send('You must state someone to unban. \`f-unban ID reason\` ');
    if(isNaN(args[0])) return message.channel.send('The ID stated is not a number. \`f-unban ID reason');


    message.guild.fetchBans().then(async bans => {
        if(bans.size == 0) return message.channel.send('This server does not have anyone that is banned');
        let bUser = bans.find(b => b.user.id == userID);
        if(!bUser) return message.channel.send('The user ID stated is not banned');
        await message.guild.members.unban(bUser.user, reason).catch(err =>{
            console.log(err);
            return message.channel.send('Something went wrong unbanning the ID.');
        }).then(() =>{
            message.channel.send(`Succesfully unbanned ${args[0]}`);
        });
    });
    }
}