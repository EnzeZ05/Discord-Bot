const profileModel = require("../models/profileSchema");
module.exports = {
  name: "deposit",
  aliases: ["dep"],
  permissions: [],
  description: "Deposit primos into your bag!",
  async execute(message, args, client, Discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Deposit amount must be a whole number");
    try {
      if (amount > profileData.primos) return message.channel.send(`You don't have that amount of primos to deposit`);
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            primos: -amount,
            bag: amount,
          },
        }
      );

      return message.channel.send(`You deposited ${amount} of primos<:765129529802752040:896709784785547365> into your bag`);
    } catch (err) {
      console.log(err);
    }
  },
};