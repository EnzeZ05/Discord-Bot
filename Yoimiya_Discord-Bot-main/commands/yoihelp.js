const config = require("../config");

const reactions = ['🌤️', '☁️', '⛈️', '⬅️'];


module.exports = {
    command: 'yoihelp',
    description: "help command",
    run: async (_, message) => {
        const options = {
            default:
                `**Commands**\n\n` +
                `**Please give Yoimiya permission first! (and !setchannel)**\n\n` +
                `**Wiki Mode**\n` +
                `**\`${config.prefix}<character name>\`**  **\`${config.prefix}<artifact/name/part>\`**\n\n` +
                `**Value Mode**\n` +
                `**\`${config.prefix}calculate\`**  **\`${config.prefix}rate\`**  **\`${config.prefix}value <crit rate> <crit damage>\`**\n\n` +
                `**Gacha Mode**\n` +
                `**\`${config.prefix}mihoyodad\`**  **\`${config.prefix}openchest\`**  **\`${config.prefix}wish 1600\`**  **\`${config.prefix}fish\`**\n\n` +
                `**Economy Mode**\n` +
                `**\`${config.prefix}deposit/withdraw\`**  **\`${config.prefix}balance\`**\n\n` +
                `**Genshin Mode**\n` +
                `**\`${config.prefix}daily\`** **\`${config.prefix}ping\`**  **\`${config.prefix}ar <Current> <Target> <EXP>\`**\n\n` +
                `**Extra Mode**\n` +
                `**\`${config.prefix}guess <aki game>\`** **\`${config.prefix}dailywaifu\`**\n\n` +
                `**Anime Mode**\n` +
                `**\`${config.prefix}anime <name>\`** **\`${config.prefix}manga <name>\`**  **\`${config.prefix}anime-wallpaper <name>\`**\n\n` +
                `**Interaction Mode**\n` +
                `**\`${config.prefix}kiss @<user>\`** **\`${config.prefix}hug @<user>\`**  **\`${config.prefix}smug @<user>\`** **\`${config.prefix}angry @<user>\`** **\`${config.prefix}wink\`**
                 **\`${config.prefix}joking\`**\n\n` +
                `**FAQ**\n\n` +
                `🌤️ - **How to set up Yoimiya?**\n` +
                `☁️ - **Why a command doesn't execute?**\n` +
                `⛈️ - **What should l do if there is an issue on commanding Yoimiya?** \n\n` +
                `**Invite URL:** [https://discord.com/oauth2/authorize?client_id=886862430238560256&scope=bot&permissions=8589934585)\n` +
                `\n\`Click the reactions to select options you need.\``,
            first: 
                `**How to set up Yoimiya?**\n` +
                `\`There're just a few easy steps to set up the bot.\`\n\n` +
                `**1)** Choose the channel in which bot will work.\n` +
                `**2)** Connect bot to that channel using \`${config.prefix}setchannel\` command.\n` +
                `**Example usage -> **\`${config.prefix}setchannel\` ${message.channel}\n` +
                `**3)** Send any image into selected channel.`,
            second: 
                `**Why a command doesn't execute?**\n\n` +
                `Yoimiya would recommend you to check this: [https://trace.moe/faq](https://trace.moe/faq)\n` +
                `_____\n` +
                `Click ⬅️ to return to main menu.`,
            third: 
                `**What should l do if there is an issue on commanding Yoimiya?**\n\n` +
                `**Ask @はやさか　あい＃9902 for support\n` +
                `______\n` +
                `Click ⬅️ to return to main menu.`
        };

        try {
            let msg = await message.channel.send({
                embed: {
                    title: '<:867973805585334332:898858919915573249> Help Menu',
                    color: 0x36393E,
                    description: options.default,
                    footer: {
                        text: 'Support: Yoimiya',
                        icon_url: message.member.user.avatarURL()
                    },
                    timestamp: Date.now()
                }
            })

            const filter = (reaction, user) => {
                return reactions.includes(reaction.emoji.name) && user.id === message.author.id;
            };

            const collector = msg.createReactionCollector(filter, { time: 12000000 })
            
            collector.on('collect', async (reaction, user) => {
                let embed = msg.embeds[0];
                reaction.users.remove(message.author.id);

                switch(reaction.emoji.name)
                {
                    case('🌤️'):
                      embed.description = options.first;
                      embed.image = {
                          url: 'https://c.tenor.com/Lmxjml12mK0AAAAd/genshin-genshinimpact.gif'
                      };
                    break;
                    case('☁️'):
                        embed.description = options.second;
                        embed.image = {
                            url: 'https://c.tenor.com/BoW2n0KpkYwAAAAC/hayasaka.gif'
                        };
                    break;
                    case('⛈️'):
                        embed.description = options.third;
                        embed.image = {
                            url: 'https://c.tenor.com/E6P9PZdh7W0AAAAC/date-a-live-kurumi.gif'
                        };
                    break;
                    default:
                        embed.description = options.default;
                        embed.image = null;
                    break;
                }

                await msg.edit({embed: embed});
            })

            await Promise.all(reactions.map(r => msg.react(r) ));
        } finally {
            message.channel.stopTyping();
        }
    }
   }
