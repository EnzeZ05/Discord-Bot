const profileModel = require("../models/profileSchema");
module.exports = {
  name: "withdraw",
  aliases: ["wd"],
  permissions: [],
  description: "withdraw primos from your bag",
  async execute(message, args, client, Discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Withdrawn amount must be a whole number");

    try {
      if (amount > profileData.bag) return message.channel.send(`You don't have that amount of primos<:765129529802752040:896709784785547365> to withdraw`);

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            primos: amount,
            bag: -amount,
          },
        }
      );

      return message.channel.send(`You withdrew ${amount} of **primos<:765129529802752040:896709784785547365>** into your wallet`);
    } catch (err) {
      console.log(err);
    }
  },
};