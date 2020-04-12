const fetch = require('node-fetch');

module.exports = async (msg, args) => {
    if (args.length !== 1) {
        msg.reply({embed: {
            color: 3447003,
            title: "You need to specify one person to roast",
            description: "!roast <name> [<name>]*",
      }})
    } else {
        target = args[0];
        fetch(`https://insult.mattbas.org/api/insult.json?who=${target}`)
            .then((resp) => resp.json())
            .then((data) => {
                msg.channel.send(data.insult);
            });
    }
  };