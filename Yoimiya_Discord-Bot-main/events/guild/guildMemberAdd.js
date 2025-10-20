const profileModel = require("../../models/profileSchema");

module.exports = async (client, discord, member) => {
  let profile = await profileModel.create({
    userID: member.id,
    serverID: member.guild.id,
    primos: 1000,
    bag: 0,
  });
  profile.save();
};