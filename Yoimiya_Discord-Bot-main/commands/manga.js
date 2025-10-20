const { Client, Message, MessageEmbed } = require('discord.js');
const { searchManga, mangaSearch } = require("@freezegold/anime.js");
const colors = require("../colors.json");

module.exports = {
    name: 'manga',
    category : 'Anime',
    usage: "manga [manga name]",
    description : 'Get a manga descrption about a query',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
     execute: async (message, args, client, Discord) => {
        const query = args.join(" ");
    if (!query) return message.channel.send("Please type a name of an anime!");
    const manga = await mangaSearch(query, 1).then((res) => {
      return res[0];
    });
    function trim(input) {
      return input.length > 1024 ? `${input.slice(0, 1015)} [...]` : input;
    }

    console.log(manga.attributes.titles);
    const embed = new MessageEmbed()
      .setColor(colors.blue)
      .setAuthor(manga.attributes.titles.en, "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png")
      .setTitle("Manga")
      .addFields(
        {
          name: "Titles: ",
          value:
            `➥ English: ${manga.attributes.titles.en}\n` +
            `➥ Romaji: ${manga.attributes.titles.en_jp}`,
          inline: true,
        },
        {
          name: "Ratings: ",
          value:
            `➥ Readers: ${manga.attributes.userCount}\n` +
            `➥ Favourites: ${manga.attributes.favoritesCount}\n` +
            `➥ Ratings: ${manga.attributes.averageRating} ⭐`,
          inline: true,
        },
        {
          name: "Synopsis: ",
          value: trim(manga.attributes.synopsis),
          inline: false,
        }
      )
      .setThumbnail(manga.attributes.posterImage.original)
      .setTimestamp();

      message.channel.send(embed);
    }
}