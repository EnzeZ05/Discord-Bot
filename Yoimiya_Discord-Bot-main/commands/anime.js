const { Client, Message, MessageEmbed } = require("discord.js");
const { searchAnime, animeSearch } = require("@freezegold/anime.js");
const colors = require("../colors.json");

module.exports = {
  name: "anime",
  category : 'Anime',
  usage: "anime [anime name]",
  description : 'Get an anime descrption about a query',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   execute: async (message, args, client, Discord) => {
    
    const query = args.join(" ");
    if (!query) return message.channel.send("Please type a name of an anime!");
    const anime = await animeSearch(query, 1).then((res) => {
      return res[0];
    });
    function trim(input) {
      return input.length > 1024 ? `${input.slice(0, 1015)} [...]` : input;
    }
    
    console.log(anime.attributes.titles);
    const embed = new MessageEmbed()
      .setColor(colors.blue)
      .setAuthor(
        anime.attributes.titles.en,
        "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
      )
      .setTitle("Anime")
      .addFields(
        {
          name: "Titles: ",
          value: (anime.attributes.titles.en
            ? `➥ English: ${anime.attributes.titles.en}\n`
            : "➥ English: ❌\n") +
              `➥ Romaji: ${anime.attributes.titles.ja_jp}\n` +
              `➥ Japanese: ${anime.attributes.titles.en_jp}`,
          inline: true,
        },
        {
          name: "Ratings: ",
          value:
            `➥ Watchers: ${anime.attributes.userCount}\n` +
            `➥ Favourites: ${anime.attributes.favoritesCount}\n` +
            `➥ Ratings: ${anime.attributes.averageRating} ⭐`,
          inline: true,
        },
        {
          name: "Synopsis: ",
          value: trim(anime.attributes.synopsis),
          inline: false,
        }
        
      )
      .setThumbnail(anime.attributes.posterImage.original)
      .setTimestamp();

    message.channel.send(embed);
  },
};