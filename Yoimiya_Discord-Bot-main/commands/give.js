const profileModel = require("../models/profileSchema");
module.exports = {
  name: "give",
  aliases: [],
  permissions: ["admin"],
  description: "give a player some primos",
  async execute(message, args, client, discord, profileData) {
    if (message.member.id !="590948720560832539") return message.channel.send(`Sorry only **Mihoyodad** can run this command 😔`);
    if (!args.length) return message.channel.send("You need to mention a player to give them primos");
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("That user does not exist");

    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Deposit amount must be a whole number");

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`This user doens't exist in the db`);

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            primos: amount,
          },
        }
      );

      return message.channel.send(`This player has been given their primos<:765129529802752040:896709784785547365>! ${amount} of primos!`);
    } catch (err) {
      console.log(err);
    }
  },
};
