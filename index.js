// Ethan Rich
/**
 * Full disclosure, I am following the tutorial for making a JS Discord Bot from "discordjs.guide". The following code was based around their
 * work. I do not try to claim I own this material.
 */

// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);