const Discord = require('discord.js');
const genshin = require('genshin-db');

module.exports = {
    name: 'weapon',
    description: 'Gets info about a weapon',
    command: '`weapon <weaponName>`',
    async execute(message, args, client, Discord) {
        const joined = args.join('');
        console.log({joined, weaponJoined: genshin.weapons(joined)});
        const answerEmbed = new Discord.MessageEmbed()
            .setColor('#FFF18E')
            .setTitle("Weapon-" + genshin.weapons(joined).name)
            .setURL(genshin.weapons(joined).url)
            .setDescription(genshin.weapons(joined).description)
            .setThumbnail(genshin.weapons(joined).images.image)
            .addFields({
                name: 'Stars', value: genshin.weapons(joined).rarity, inline: true
            },
                { name: 'Weapon Type', value: genshin.weapons(joined).weapontype, inline: true },
                { name: 'Weapon Material', value: genshin.weapons(joined).weaponmaterialtype, inline: true },
                { name: genshin.weapons(joined).effectname, value: genshin.weapons(joined).effect, inline: true },
                { name: 'Base Attack', value: genshin.weapons(joined).baseatk, inline: true }
            )
            .setTimestamp()
            .setFooter('Send \'genshin-help\' for help with bot commands!');
        await message.channel.send("<@" + message.author.id + ">");

        message.channel.send(answerEmbed)
        try{
            command.execute(message, args, client, Discord, profileData);
        } catch (err){
            message.reply("There was an error trying to execute this command!");
            console.log(err);
        }
        
    }

    
}