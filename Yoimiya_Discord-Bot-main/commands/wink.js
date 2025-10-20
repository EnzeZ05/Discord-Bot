const { MessageEmbed } = require("discord.js");
const axios = require("axios");
const colors = require("../colors.json");

module.exports = {
  name: "wink",
  category: "Interactions",
  description: "You wink ;)",
  async execute(message, args, client, Discord) {
    const url = "https://some-random-api.ml/animu/wink";

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
        `${message.author.username} winked...`
      )
      .setImage(data.link);

    await message.channel.send(embed);
  },
};