const { Client, Message, MessageEmbed } = require("discord.js");
const { AnimeWallpaper } = require("anime-wallpaper");
const wall = new AnimeWallpaper();
const colors = require("../colors.json");

module.exports = {
  name: "anime-wallpaper",
  category : 'Anime',
  description : 'Give an anime wallpaper about a query',
  usage: "anime-wallpaper [anime name]",
  aliases: ['aw'],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   async execute(message, args, client, Discord) {
    const query = args.join(" ");
    if (!query)
      return message.channel.send(
        "Please give me an anime to search a wallpaper!"
      );
    async function Wallpaper1() {
      const wallpaper = await wall.getAnimeWall1({
        search: query,
        page: 1,
      });
      return wallpaper;
    }
    try {
        var wallpapers = await Wallpaper1();
    } catch (err) {
        return message.channel.send("❌ I dind't find any wallpaper with the name: " + query.toString());
    }

    const wallpaper =
      wallpapers[Math.floor(Math.random() * wallpapers.length)].image;
    const embed = new MessageEmbed()
      .setImage(wallpaper)
      .setTitle("🍑 Anime PC Wallpaper!")
      .setDescription(`[😏 **__Download__**](${wallpaper})`)
      .setTimestamp()
      .setColor(colors.purple);

    message.channel.send(embed);
  },
};