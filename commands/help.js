const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "Tell's you the commands",

    async execute(message, args, client) {
        let arguments = args[0]

        let kickembed = new Discord.MessageEmbed()
            .setTitle('**Kick**')
            .setColor('RED')
            .setDescription('`{prefix}kick @user`')
            .addField('**Purpose**', 'Kicks someone from your guild.')
        if (args[0] === `kick`) {
            return message.channel.send(kickembed)
        }

        let banembed = new Discord.MessageEmbed()
            .setTitle('**Ban**')
            .setColor('RED')
            .setDescription('`{prefix}ban @user`')
            .addField('**Purpose**', 'Bans someone from your guild.')
        if (args[0] === `ban`) {
            return message.channel.send(banembed)
        }

        let unbanembed = new Discord.MessageEmbed()
            .setTitle('**Unban**')
            .setColor('RED')
            .setDescription('`{prefix}unban <userid>`')
            .addField('**Purpose**', 'Unbans someone from your guild.')
        if (args[0] === `unban`) {
            return message.channel.send(unbanembed)
        }

        let muteembed = new Discord.MessageEmbed()
            .setTitle('**Mute**')
            .setColor('RED')
            .setDescription('`{prefix}mute @user : specify time (optional)`')
            .addField('**Purpose**', 'Gives a member the muted role so they cannot send messages in your guild.')
        if (args[0] === `mute`) {
            return message.channel.send(muteembed)
        }

        let unmuteembed = new Discord.MessageEmbed()
            .setTitle('**Unmute**')
            .setColor('RED')
            .setDescription('`{prefix}unmute @user`')
            .addField('**Purpose**', 'Removes the muted role from a member.')
        if (args[0] === `unmute`) {
            return message.channel.send(unmuteembed)
        }


        let warnembed = new Discord.MessageEmbed()
            .setTitle('**Warn**')
            .setColor('RED')
            .setDescription('`{prefix}warn @user`')
            .addField('**Purpose**', 'Warns a user.')
        if (args[0] === `warn`) {
            return message.channel.send(warnembed)
        }

        let removewarnembed = new Discord.MessageEmbed()
            .setTitle('**RemoveWarn**')
            .setColor('RED')
            .setDescription('`{prefix}removewarn <@user> <Warning number>`')
            .addField('**Purpose**', 'Removes specific warn from a user.')
        if (args[0] === `removewarn`) {
            return message.channel.send(removewarnembed)
        }


        let purgeembed = new Discord.MessageEmbed()
            .setTitle('**Purge**')
            .setColor('RED')
            .setDescription('`{prefix}purge <amount>`')
            .addField('**Purpose**', 'Delete multiple messages quickly.')
        if (args[0] === `purge`) {
            return message.channel.send(purgeembed)
        }

        let slowembed = new Discord.MessageEmbed()
            .setTitle('**Slow**')
            .setColor('RED')
            .setDescription('`{prefix}slow <time>`')
            .addField('**Purpose**', 'Set the slowmode of the channel.')
        if (args[0] === `slow`) {
            return message.channel.send(slowembed)
        }


        let cfembed = new Discord.MessageEmbed()
            .setTitle('**Cf**')
            .setColor('RED')
            .setDescription('`{prefix}cf <choice one> <choice two>`')
            .addField('**Purpose**', 'Flips a coin to help you with a descision.')
        if (args[0] === `cf`) {
            return message.channel.send(cfembed)
        }

        let avmemeembed = new Discord.MessageEmbed()
            .setTitle('**Avmeme**')
            .setColor('RED')
            .setDescription('`{prefix}avmeme`')
            .addField('**Purpose**', 'Generates an Aviation Meme.')
        if (args[0] === `avmeme`) {
            return message.channel.send(avmemeembed)
        }

        let memeembed = new Discord.MessageEmbed()
            .setTitle('**Meme**')
            .setColor('RED')
            .setDescription('`{prefix}meme`')
            .addField('**Purpose**', 'Generates a meme.')
        if (args[0] === `meme`) {
            return message.channel.send(memeembed)
        }


        let animalembed = new Discord.MessageEmbed()
            .setTitle('**Animal**')
            .setColor('RED')
            .setDescription('`{prefix}animal`')
            .addField('**Purpose**', 'Generates image of a random animal')
        if (args[0] === `animal`) {
            return message.channel.send(animalembed)
        }

        let hentaiembed = new Discord.MessageEmbed()
            .setTitle('**Hentai**')
            .setColor('RED')
            .setDescription('`{prefix}hentai`')
            .addField('**Purpose**', 'Generates hentai(nsfw)')
        if (args[0] === `hentai`) {
            return message.channel.send(hentaiembed)
        }

        let pingembed = new Discord.MessageEmbed()
            .setTitle('**Ping**')
            .setColor('RED')
            .setDescription('`{prefix}ping`')
            .addField('**Purpose**', 'Gives you the bot ping.')
        if (args[0] === `ping`) {
            return message.channel.send(pingembed)
        }


        let avatarembed = new Discord.MessageEmbed()
            .setTitle('**Avatar**')
            .setColor('RED')
            .setDescription('`{prefix}avatar @user (optional)`')
            .addField('**Purpose**', 'Check out someones avatar.')
        if (args[0] === `avatar`) {
            return message.channel.send(avatarembed)
        }

        let randomavatarembed = new Discord.MessageEmbed()
            .setTitle('**Randomavatar**')
            .setColor('RED')
            .setDescription('`{prefix}randomavatar`')
            .addField('**Purpose**', 'Gives you a random persons avatar.')
        if (args[0] === `randomavatar`) {
            return message.channel.send(randomavatarembed)
        }

        let triggerembed = new Discord.MessageEmbed()
            .setTitle('**Trigger**')
            .setColor('RED')
            .setDescription('`{prefix}trigger <@user> (optional)`')
            .addField('**Purpose**', 'Triggers you or another user.')
        if (args[0] === `trigger`) {
            return message.channel.send(triggerembed)
        }

        let adembed = new Discord.MessageEmbed()
            .setTitle('**Ad**')
            .setColor('RED')
            .setDescription('`{prefix}ad <@user> (optional)`')
            .addField('**Purpose**', 'Put your pfp into a streetside ad.')
        if (args[0] === `ad`) {
            return message.channel.send(adembed)
        }

        let affectembed = new Discord.MessageEmbed()
            .setTitle('**Affect**')
            .setColor('RED')
            .setDescription('`{prefix}affect <@user> (optional)`')
            .addField('**Purpose**', 'Put your pfp into an affect meme.')
        if (args[0] === `affect`) {
            return message.channel.send(affectembed)
        }

        let beautifulembed = new Discord.MessageEmbed()
            .setTitle('**Beautiful**')
            .setColor('RED')
            .setDescription('`{prefix}beautiful <@user> (optional)`')
            .addField('**Purpose**', 'Put your pfp into a beautiful template.')
        if (args[0] === `beautiful`) {
            return message.channel.send(beautifulembed)
        }

        let bobrossembed = new Discord.MessageEmbed()
            .setTitle('**Bobross**')
            .setColor('RED')
            .setDescription('`{prefix}Bobross <@user> (optional)`')
            .addField('**Purpose**', 'Have Bob Ross paint you.')
        if (args[0] === `bobross`) {
            return message.channel.send(bobrossembed)
        }

        let confusedstonksembed = new Discord.MessageEmbed()
            .setTitle('**Confusedstonks**')
            .setColor('RED')
            .setDescription('`{prefix}confusedstonks <@user> (optional)`')
            .addField('**Purpose**', 'Put your pfp into confused stonks.')
        if (args[0] === `confusedstonks`) {
            return message.channel.send(confusedstonksembed)
        }

        let discordblackembed = new Discord.MessageEmbed()
            .setTitle('**Discordblack**')
            .setColor('RED')
            .setDescription('`{prefix}Discordblack <@user> (optional)`')
            .addField('**Purpose**', 'Put your pfp into the black discord logo.')
        if (args[0] === `discordblack`) {
            return message.channel.send(discordblackembed)
        }

        let facepalmembed = new Discord.MessageEmbed()
            .setTitle('**Facepalm**')
            .setColor('RED')
            .setDescription('`{prefix}Facepalm <@user> (optional)`')
            .addField('**Purpose**', 'Facepalm yourself.')
        if (args[0] === `facepalm`) {
            return message.channel.send(facepalmembed)
        }

        let gayembed = new Discord.MessageEmbed()
            .setTitle('**Gay**')
            .setColor('RED')
            .setDescription('`{prefix}Gay <@user> (optional)`')
            .addField('**Purpose**', 'Put yourself under the pride colors.')
        if (args[0] === `gay`) {
            return message.channel.send(gayembed)
        }

        let hitlerembed = new Discord.MessageEmbed()
            .setTitle('**Hitler**')
            .setColor('RED')
            .setDescription('`{prefix}Hitler <@user> (optional)`')
            .addField('**Purpose**', 'Put your pfp under the caption \'Worse than Hitler\'.')
        if (args[0] === `hitler`) {
            return message.channel.send(hitlerembed)
        }

        let invertembed = new Discord.MessageEmbed()
            .setTitle('**Invert**')
            .setColor('RED')
            .setDescription('`{prefix}Invert <@user> (optional)`')
            .addField('**Purpose**', 'Invert the colors of your pfp.')
        if (args[0] === `invert`) {
            return message.channel.send(invertembed)
        }

        let jailembed = new Discord.MessageEmbed()
            .setTitle('**Jail**')
            .setColor('RED')
            .setDescription('`{prefix}Jail <@user> (optional)`')
            .addField('**Purpose**', 'Put yourself behind bars.')
        if (args[0] === `jail`) {
            return message.channel.send(jailembed)
        }

        let karabaembed = new Discord.MessageEmbed()
            .setTitle('**Karaba**')
            .setColor('RED')
            .setDescription('`{prefix}Karaba <@user> (optional)`')
            .addField('**Purpose**', 'Put yourself in a karaba.')
        if (args[0] === `karaba`) {
            return message.channel.send(karabaembed)
        }

        let mmembed = new Discord.MessageEmbed()
            .setTitle('**m&m**')
            .setColor('RED')
            .setDescription('`{prefix}m&m <@user> (optional)`')
            .addField('**Purpose**', 'Put yourself in an m&m.')
        if (args[0] === `m&m`) {
            return message.channel.send(mmembed)
        }

        let notstonksembed = new Discord.MessageEmbed()
            .setTitle('**Notstonks**')
            .setColor('RED')
            .setDescription('`{prefix}Notstonks <@user> (optional)`')
            .addField('**Purpose**', 'Put yourself in a notstonks meme.')
        if (args[0] === `notstonks`) {
            return message.channel.send(notstonksembed)
        }

        let putinembed = new Discord.MessageEmbed()
            .setTitle('**Putin**')
            .setColor('RED')
            .setDescription('`{prefix}Putin <@user> (optional)`')
            .addField('**Purpose**', 'Have yourself in a painting next to Putin himself.')
        if (args[0] === `putin`) {
            return message.channel.send(putinembed)
        }

        let ripembed = new Discord.MessageEmbed()
            .setTitle('**Rip**')
            .setColor('RED')
            .setDescription('`{prefix}Rip <@user> (optional)`')
            .addField('**Purpose**', 'Have a funeral for yourself.')
        if (args[0] === `rip`) {
            return message.channel.send(ripembed)
        }

        let stonksembed = new Discord.MessageEmbed()
            .setTitle('**Stonks**')
            .setColor('RED')
            .setDescription('`{prefix}Stonks <@user> (optional)`')
            .addField('**Purpose**', 'Put yourself in a stonks meme.')
        if (args[0] === `stonks`) {
            return message.channel.send(stonksembed)
        }

        let tattooembed = new Discord.MessageEmbed()
            .setTitle('**Tattoo**')
            .setColor('RED')
            .setDescription('`{prefix}Tattoo <@user> (optional)`')
            .addField('**Purpose**', 'Have someone get a tattoo of your pfp on their arm.')
        if (args[0] === `tattoo`) {
            return message.channel.send(tattooembed)
        }

        let thomasembed = new Discord.MessageEmbed()
            .setTitle('**Thomas**')
            .setColor('RED')
            .setDescription('`{prefix}Thomas <@user> (optional)`')
            .addField('**Purpose**', 'Put yourself on Thomas The Tank Engine\'s face.')
        if (args[0] === `thomas`) {
            return message.channel.send(thomasembed)
        }

        let trashembed = new Discord.MessageEmbed()
            .setTitle('**Trash**')
            .setColor('RED')
            .setDescription('`{prefix}Trash <@user> (optional)`')
            .addField('**Purpose**', 'Put yourself in the Peter Parker trash meme.')
        if (args[0] === `trash`) {
            return message.channel.send(trashembed)
        }

        let wantedembed = new Discord.MessageEmbed()
            .setTitle('**Wanted**')
            .setColor('RED')
            .setDescription('`{prefix}Wanted <@user> (optional)`')
            .addField('**Purpose**', 'Put yourself on a wanted poster.')
        if (args[0] === `wanted`) {
            return message.channel.send(wantedembed)
        }

        let spankembed = new Discord.MessageEmbed()
            .setTitle('**Spank**')
            .setColor('RED')
            .setDescription('`{prefix}spank <@user>`')
            .addField('**Purpose**', 'Spank someone.')
        if (args[0] === `spank`) {
            return message.channel.send(spankembed)
        }


        let modlogsembed = new Discord.MessageEmbed()
            .setTitle('**Modlogs**')
            .setColor('RED')
            .setDescription('`{prefix}modlogs <@user>`')
            .addField('**Purpose**', 'Show modlogs.')
        if (args[0] === `modlogs`) {
            return message.channel.send(modlogsembed)
        }

        let hangmanembed = new Discord.MessageEmbed()
            .setTitle('**Hangman**')
            .setColor('RED')
            .setDescription('`{prefix}hangman <Specify channel to send to> <word>`')
            .addField('**Purpose**', 'Play hangman.')
        if (args[0] === `hangman`) {
            return message.channel.send(hangmanembed)
        }

        let clearlogsembed = new Discord.MessageEmbed()
            .setTitle('**Clearlogs**')
            .setColor('RED')
            .setDescription('`{prefix}clearlogs <@user>`')
            .addField('**Purpose**', 'Clears all logs of specific user.')
        if (args[0] === `clearlogs`) {
            return message.channel.send(clearlogsembed)
        }

        let tttembed = new Discord.MessageEmbed()
            .setTitle('**TicTacToe**')
            .setColor('RED')
            .setDescription('`{prefix}ttt <@user>`')
            .addField('**Purpose**', 'Play tictactoe')
        if (args[0] === `ttt`) {
            return message.channel.send(tttembed)
        }

        let guessembed = new Discord.MessageEmbed()
            .setTitle('**Guess**')
            .setColor('RED')
            .setDescription('`{prefix}guess <@user>`')
            .addField('**Purpose**', 'Guess number between 1-10000')
        if (args[0] === `guess`) {
            return message.channel.send(guessembed)
        }

        let marryembed = new Discord.MessageEmbed()
            .setTitle('**Marry**')
            .setColor('RED')
            .setDescription('`{prefix}marry <@user>`')
            .addField('**Purpose**', 'Get married')
        if (args[0] === `marry`) {
            return message.channel.send(marryembed)
        }

        let marriageembed = new Discord.MessageEmbed()
            .setTitle('**Marriage**')
            .setColor('RED')
            .setDescription('`{prefix}marriage <@user>(optional)`')
            .addField('**Purpose**', 'Check marriage status')
        if (args[0] === `marriage`) {
            return message.channel.send(marriageembed)
        }

        let divorceembed = new Discord.MessageEmbed()
            .setTitle('**Divorce**')
            .setColor('RED')
            .setDescription('`{prefix}divorce <@user>`')
            .addField('**Purpose**', 'Divorce your loved one')
        if (args[0] === `divorce`) {
            return message.channel.send(divorceembed)
        }


        let blacktwitterembed = new Discord.MessageEmbed()
            .setTitle('**BlackTwitter**')
            .setColor('RED')
            .setDescription('`{prefix}blacktwitter`')
            .addField('**Purpose**', 'Generates blacktwitter image')
        if (args[0] === `blacktwitter`) {
            return message.channel.send(blacktwitterembed)
        }

        let comicsembed = new Discord.MessageEmbed()
            .setTitle('**Divorce**')
            .setColor('RED')
            .setDescription('`{prefix}comics`')
            .addField('**Purpose**', 'Generates a comic')
        if (args[0] === `comics`) {
            return message.channel.send(comicsembed)
        }

        let fpmemeembed = new Discord.MessageEmbed()
            .setTitle('**FPmeme**')
            .setColor('RED')
            .setDescription('`{prefix}fpmeme`')
            .addField('**Purpose**', 'Generates an fpmeme ')
        if (args[0] === `fpmeme`) {
            return message.channel.send(divorceembed)
        }

        let meirlembed = new Discord.MessageEmbed()
            .setTitle('**Me_Irl**')
            .setColor('RED')
            .setDescription('`{prefix}meirl`')
            .addField('**Purpose**', 'Generates a me_irl meme ')
        if (args[0] === `meirl`) {
            return message.channel.send(meirlembed)
        }

        let memeeconomyembed = new Discord.MessageEmbed()
            .setTitle('**MemeEconomy**')
            .setColor('RED')
            .setDescription('`{prefix}memeeconomy`')
            .addField('**Purpose**', 'Generates an meme economy embed ')
        if (args[0] === `memeeconomy`) {
            return message.channel.send(memeeconomyembed)
        }

        let sequelembed = new Discord.MessageEmbed()
            .setTitle('**Sequel**')
            .setColor('RED')
            .setDescription('`{prefix}sequel`')
            .addField('**Purpose**', 'Generates a sequel meme ')
        if (args[0] === `sequel`) {
            return message.channel.send(sequelembed)
        }

        let blinkembed = new Discord.MessageEmbed()
            .setTitle('**Blink**')
            .setColor('RED')
            .setDescription('`{prefix}Blink <@user>`')
            .addField('**Purpose**', 'Blinks between two images ')
        if (args[0] === `blink`) {
            return message.channel.send(blinkembed)
        }

        let doublestonkembed = new Discord.MessageEmbed()
            .setTitle('**DoubleStonk**')
            .setColor('RED')
            .setDescription('`{prefix}doublestonk <@user>`')
            .addField('**Purpose**', 'Put you and someone in the doublestonk image ')
        if (args[0] === `doublestonk`) {
            return message.channel.send(doublestonkembed)
        }

        let colorembed = new Discord.MessageEmbed()
            .setTitle('**Color**')
            .setColor('RED')
            .setDescription('`{prefix}color <color hexcode>`')
            .addField('**Purpose**', 'Displays color ')
        if (args[0] === `color`) {
            return message.channel.send(colorembed)
        }

        let batslapembed = new Discord.MessageEmbed()
            .setTitle('**Batslap**')
            .setColor('RED')
            .setDescription('`{prefix}batslap <@user>`')
            .addField('**Purpose**', 'Batslaps someone ')
        if (args[0] === `batslap`) {
            return message.channel.send(batslapembed)
        }

        let bedembed = new Discord.MessageEmbed()
            .setTitle('**Bed**')
            .setColor('RED')
            .setDescription('`{prefix}bed <@user>`')
            .addField('**Purpose**', 'Put you and someone else in bed ')
        if (args[0] === `bed`) {
            return message.channel.send(bedembed)
        }

        let deleteembed = new Discord.MessageEmbed()
            .setTitle('**Delete**')
            .setColor('RED')
            .setDescription('`{prefix}delete <@user>(optional)`')
            .addField('**Purpose**', 'Put your pfp image ')
        if (args[0] === `delete`) {
            return message.channel.send(deleteembed)
        }

        let googleembed = new Discord.MessageEmbed()
            .setTitle('**Google**')
            .setColor('RED')
            .setDescription('`{prefix}google <type of image that you want>`')
            .addField('**Purpose**', 'Generate a searched up image')
        if (args[0] === `google`) {
            return message.channel.send(googleembed)
        }


        let googlerandomembed = new Discord.MessageEmbed()
            .setTitle('**GoogleRandom**')
            .setColor('RED')
            .setDescription('`{prefix}googlerandom image`')
            .addField('**Purpose**', 'Generate a random google image ')
        if (args[0] === `googlerandom`) {
            return message.channel.send(googlerandomembed)
        }

        const helpembed = new Discord.MessageEmbed()
            .setThumbnail('https://media1.tenor.com/images/64d47299b3bbcf75f7a6b84e54a778b5/tenor.gif')
            .setColor('#F50E0E')
            .setTitle('Help')
            .setURL('')
            .setDescription('Shows the possible commands')
            .setTimestamp()
            .addFields({
                name: `:key:Moderation`, value: `\`purge\`, \`warn\`, \`modlogs\`, \`removewarn\`, \`clearlogs\`, \`mute\`, \`unmute\`, \`kick\`, \`ban\`,\`massban\`, \`lock\`, \`unlock\``, inline: false
            },
                { name: `:musical_note:Music `, value: `\`play\`, \`stop\`, \`pause\`, \`resume\``, inline: false },
                { name: `:game_die:Games `, value: `\`cf\`, \`hangman\`, \`ttt\`, \`guess\``, inline: false },
                { name: `:tools:Utility `, value: `\`avatar\`, \`randomavatar\``, inline: false },
                { name: `:ring:Marriage`, value: `\`marry\`, \`marriage\`, \`divorce\``, inline: false },
                { name: `:rofl:Reddits`, value: `\`meme\`, \`avmeme\`, \`animal\`, \`hentai(nsfw)\`, \`blacktwitter\`, \`comics\`, \`fpmeme\`, \`meirl\`, \`memeeconomy\`, \`sequel\``, inline: false },
                {
                    name: `:camera:Images`, value: `\`Gay\`, \`Trigger\`, \`DoubleStonk\`, \`Affect\`, \`Batslap\`, \`Beautiful\`, \`Bed\`, 
        \`Bobross\`, \`ConfusedStonk\`, \`Delete\`, \`Tatoo\`, \`Ad\`, \`Facepalm\`, \`Hitler\`, 
        \`Jail\`, \`Karaba\`, \`Kiss\`, \`Presentation\`, \`M&m\`, \`NotStonk\`, \`Putin\`,
        \`Rip\`, \`Spank\`, \`Thomas\`, \`DiscordBlack\`, \`Trash\`, \`Wanted\`, \`Color\`, \`Google\`, \`Googlerandom\``, inline: false
                }

            )

            .setFooter('Made by Faint :)');


        message.channel.send(helpembed)

    }
}