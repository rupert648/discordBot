const dog = require('./dog');
const ping = require('./ping');
const halo = require('./halo');
const roast = require('./roast');

const guildID = process.env.GUILD_ID;
const channelID = process.env.TEST_CHANNEL_ID;

const commands = {
    ping,
    dog,
    halo,
    roast
}

module.exports = async (msg) => {
    if (msg.guild.id === guildID && msg.channel.id === channelID) {
      const args = msg.content.split(' ');
      if (args.length == 0 || args[0].charAt(0) !== process.env.PREFIX) return;
      const command = args.shift().substr(1);
      if (Object.keys(commands).includes(command)) {
        commands[command](msg, args);
      }
    }
  };