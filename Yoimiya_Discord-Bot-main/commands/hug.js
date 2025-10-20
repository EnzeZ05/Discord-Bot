const { MessageEmbed } = require("discord.js");
const axios = require("axios");
const colors = require("../colors.json");

module.exports = {
  name: "hug",
  category: "Interactions",
  description: "We can only learn to love by loving💖",
  usage: "hug [@mention]",
  async execute(message, args, client, Discord) {
    const member = message.mentions.members.first();
    if (!member)
      return message.channel.send("You must mention someone to hug them!");
    const url = "https://some-random-api.ml/animu/hug";

    let response, data;
    try {
      response = await axios.get(url);
      data = response.data;
    } catch (e) {
      return message.channel.send(`An error occured!`);
    }

    const embed = new MessageEmbed()
      .setTimestamp()
      .setColor(colors.blue)
      .setTitle(
        `${message.author.username} hugs ${
          message.mentions.users.first().username
        }...`
      )
      .setImage(data.link);

    await message.channel.send(embed);
  },
};