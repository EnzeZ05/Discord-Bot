const profileModel = require("../models/profileSchema");
module.exports = {
  name: "wish",
  aliases: ["ws"],
  permissions: [],
  description: "consume primos to pull a banner",
  async execute(message, args, client, discord, profileData) {
    const amount = args[0];
    if (amount % 1600 != 0 || amount <= 0) return message.channel.send("Primos amount failed banner requirements");
    if (amount % 1600 != 0 || amount >= 1601) return message.channel.send("primos exceeded");

    try {
      if (amount > profileData.primos) return message.channel.send(`You don't have enough primos in your bag`);

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            primos: -amount,
          },
        }
      );
      {

        number = 36;
        imageNumber = Math.floor (Math.random()*(number - 1 + 1)) + 1;
        message.channel.send ({files: ["./wishimages/" + imageNumber + ".png"]})
      }

        return message.channel.send(`You spent ${amount} of primos<:765129529802752040:896709784785547365> for 10 whishes`);
    } catch (err) {
      console.log(err);
    }
  },
};