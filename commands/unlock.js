module.exports = {
    name: 'unlock',
    description: "Unlocks a specific channel",
    async execute(message, args, client) {

        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('no perms to unlock channels');

        if (message.member.permissions.has("ADMINISTRATOR")) {

            let channel = args[0];
            channel = channel.split(/[ <# >]+/).slice(1, 2).pop();
            if (!channel) return message.reply("`No channel mentioned.`");

            const channelTarget = await client.channels.fetch(`${channel}`);
            channelTarget.updateOverwrite(channelTarget.guild.roles.everyone, { SEND_MESSAGES: null });

            message.channel.send(`:unlock: Unlocked <#${channel}>`);

        }
    }
}