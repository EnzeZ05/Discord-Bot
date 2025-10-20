const profileModel = require("../models/profileSchema");
module.exports = {
  name: "mihoyodad",
  aliases: [],
  permissions: [],
  description: "beg for primos",
  async execute(message, args, cmd, client, Discord, profileData) {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          primos: randomNumber,
        },
      }
    );
    return message.channel.send(`${message.author.username}, you begged and received ${randomNumber} **primos<:765129529802752040:896709784785547365>**`);
  },
};