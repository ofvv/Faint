module.exports = {
    name: 'lock',
    description: "Locks a specific channel",
    async execute(message, args, client) {

        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('no perms to lock channels');

        if (message.member.permissions.has("ADMINISTRATOR")) {

            let channel = args[0];
            channel = channel.split(/[ <# >]+/).slice(1, 2).pop();
            if (!channel) return message.reply("`No channel mentioned.`");

            reason = args.slice(1).join('');
            const channelTarget = await client.channels.fetch(`${channel}`);
            channelTarget.updateOverwrite(channelTarget.guild.roles.everyone, { SEND_MESSAGES: false });

            if (reason) {
                message.channel.send(`:lock: Locked <#${channel}> Reason: **${reason}**`);
            } else {
                message.channel.send(`:lock: Locked <#${channel}> **No reason given.**`);
            }

        } 
    }
}