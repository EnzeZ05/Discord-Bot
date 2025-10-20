const Discord = require('discord.js');
const genshin = require('genshin-db');
const fs = require('fs');

module.exports = {
    name: 'character',
    description: 'Gets info about a character',
    command: '`genshin-character <characterName>`',
    async execute( message, args, client, Discord) {
        if (args.length > 0) {
            console.log({args0: args[0], character: genshin.characters(args[0])});
            const answerEmbed = new Discord.MessageEmbed()
                .setColor('#FFF18E')
                .setTitle("Character-" + genshin.characters(args[0]).name)
                .setURL(genshin.characters(args[0]).url)
                .setDescription(genshin.characters(args[0]).description)
                .setThumbnail(genshin.characters(args[0]).images[args[0]])
                .addFields({
                    name: 'Stars', value: genshin.characters(args[0]).rarity, inline: true
                },
                    { name: 'Weapon Type', value: genshin.characters(args[0]).weapontype, inline: true },
                    { name: 'Constellation', value: genshin.characters(args[0]).constellation, inline: true },
                    { name: 'Element', value: genshin.characters(args[0]).element, inline: true }
                )
                .setTimestamp()
                .setFooter('Send \'genshin-help\' for help with bot commands!');
            await message.channel.send("<@" + message.author.id + ">");

            message.channel.send(answerEmbed)
        }
        else {
            const answerEmbed = new Discord.MessageEmbed()
                .setColor('#FFF18E')
                .setTitle("List of Characters")
                .setThumbnail('https://i.imgur.com/I7ZL2CR.png')
                .setTimestamp()
                .setFooter('Send \'genshin-help\' for help with bot commands!');
            const characters = fs.readdirSync('./node_modules/genshin-db/src/english/characters');
            let description = "";
            await characters.forEach(character => {
                let title = character.replace('.json', '');
                title = title.split('');
                title[0] = title[0].toUpperCase();
               title = title.join('');
                description += '**'+title + '**\n';
            });
                       answerEmbed.setDescription(description)
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
}