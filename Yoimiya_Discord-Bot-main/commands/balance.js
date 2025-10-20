module.exports = {
  name: "balance",
  aliases: ["bal", "bl"],
  permissions: [],
  description: "Check the user balance",
  execute(message, args, client, Discord, profileData) {
    message.channel.send(`Your primo balance is ${profileData.primos}**<:765129529802752040:896709784785547365>**, you bag balance is ${profileData.bag}**<:765129529802752040:896709784785547365>**`);
  },
};

  