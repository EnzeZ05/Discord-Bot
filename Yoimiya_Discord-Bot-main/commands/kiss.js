const { Client, Message, MessageEmbed } = require("discord.js");
const retribution = require("../distribution").distribution;
const HMfull = require("hmfull");

module.exports = {
  name: "kiss",
  category: "Interactions",
  description: "Leave your memories in one action >:3",
  usage: "kiss [@mention]",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   async execute(message, args, client, Discord) {
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("Please ping a usre to kiss");

    let users = [target, message.author];

    let kissGif = await HMfull.Nekos.sfw.kiss();

    const KissEmbed = new MessageEmbed()
      .setTitle("You call it madness, but I call it love💞")
      .setFooter("🍑")
      .setImage(kissGif.url)
      .setTimestamp()
      .setColor("RED")
      .setDescription(`${users[0]} kissed ${users[1]}`);

    return retribution(KissEmbed, "😘", users, message, "kissed");
  },
};
