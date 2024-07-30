module.exports = {
    name: 'kick',
    description: "kicks a member from the server.",
    async execute(message, args, client) {
        const member = message.mentions.users.first(); console.log(message.author.id)

        if (!message.member.permissions.has("KICK_MEMBERS")) return
        if (member.id === message.author.id) return message.channel.send("You cant kick yourself")
        if (message.member.permissions.has("KICK_MEMBERS")) {
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                await (memberTarget).send("`You've been kicked from the server, you are able to rejoin but note repeated infractions will lead to a ban`");
                memberTarget.kick();
                message.channel.send('**User has been kicked.**');
            } else if (message.content.includes('@')) {
                message.channel.send('`No member found by that name.`');
            } else {
                message.channel.send('`Please mention a member.`');
            }
        } else {
            message.channel.send('`Mod use only, please refrain from using this!`');
        }
    }
}