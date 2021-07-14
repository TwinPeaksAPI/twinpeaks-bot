const Discord = require('discord.js');
const randomQuote = require('./randomquote');

const dotenv = require('dotenv')
dotenv.config()

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
  console.log('Twin Peaks Bot is online!')
})

client.on('message', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.channel.send('pong!')
  }
  if (command === 'random') {
    const randoQuote = await randomQuote()
    message.channel.send(randoQuote)
  }

});

client.login(process.env.DISCORD_TOKEN);