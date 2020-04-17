const { Client } = require('discord.js');
require('dotenv').config();

const commandHandler = require('./commands');

const client = new Client();

client.once('ready', () => {
    console.log('bot ready');   
});

client.on('message', commandHandler);


client.login(process.env.BOT_TOKEN);






