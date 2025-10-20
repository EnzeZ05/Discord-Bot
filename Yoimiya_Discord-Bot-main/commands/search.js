const profileModel = require("../models/profileSchema");

module.exports = {
    name: "openchest",
    aliases: [],
    permissions: [],
    description: "Search for some coin!",
    async execute(message, args, cmd, client, Discord, profileData) {

        const locations = [
            "Mondstadt",
            "Li Yue",
            "Inazuma",
            "Sumeru",
            "Fontaine",
            "Natlan",
            "Snezhnaya",
        ];

        const chosenLocations = locations.sort(() => Math.random() - Math.random()).slice(0, 3);

        const filter = ({ author, content }) => message.author == author && chosenLocations.some((location) => location.toLowerCase() == content.toLowerCase());

        const collector = message.channel.createMessageCollector(filter, { max: 1, time: 25000 });

        const earnings = Math.floor(Math.random() * (600 - 5 + 1)) + 200;


        collector.on('collect', async (m) => {
            message.channel.send(`You obtained ${earnings} **primos <:765129529802752040:896709784785547365>** from the chest!`);

            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        primos: earnings,
                    },
                }
            );
        });

        collector.on('end', (collected, reason) => {
            if (reason == "time") {
                message.channel.send('You ran out of time!');
            }
        });


        message.channel.send(`<@${message.author.id}> Which location would you like to search?\n Type the location in this channel\n \`${chosenLocations.join('` `')}\``);
    }
}