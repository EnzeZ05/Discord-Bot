const Discord = require('discord.js');
const genshin = require('genshin-db');

module.exports = {
    name: 'const',
    description: 'Gets info about a constellation',
    command: '`const <characterName>`',
    async execute(message, args, client, Discord) {
       
        const joined = args.join('');
        console.log({joined, constJoined: genshin.constellations(joined)});
        const answerEmbed = new Discord.MessageEmbed()
            .setColor('#FFF18E')
            .setTitle("Constelation-" + genshin.constellations(joined).name)
            .setURL(genshin.characters(joined).url)
            
            .setThumbnail(genshin.characters(joined).images.image)
            .addFields({
                name: genshin.constellations(joined).c1.name, value: genshin.constellations(joined).c1.effect, inline: true
            },
                {
                    name: genshin.constellations(joined).c2.name, value: genshin.constellations(joined).c2.effect, inline: true
 },
              
               )
            .addFields({
                name: genshin.constellations(joined).c3.name, value: genshin.constellations(joined).c3.effect
            },
                {
                    name: genshin.constellations(joined).c4.name, value: genshin.constellations(joined).c4.effect, inline: true
                })
            .addFields({
                name: genshin.constellations(joined).c5.name, value: genshin.constellations(joined).c5.effect, inline: true
            }, {
                name: genshin.constellations(joined).c6.name, value: genshin.constellations(joined).c6.effect
            })
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