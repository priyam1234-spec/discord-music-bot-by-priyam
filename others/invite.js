const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using The Music Bot? Great, Thank you! Consider adding it to your server")
      .setColor("#F0EAD6")
      .setAuthor('Music Bot','https://avatars.githubusercontent.com/u/76640873?s=200&v=4')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add Music Bot to your discord server`, 'https://discord.com/api/oauth2/authorize?client_id=887557968705519706&permissions=8&scope=bot%20applications.commands', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};
