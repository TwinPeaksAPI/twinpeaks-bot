const Discord = require('discord.js');
const randomQuote = require('./randomquote');
const daleCooperQuote = require('./daleCooper');
const logLadyQuote = require('./logLady');
const laruaPalmerQuote = require('./lauraPalmer');
const theGiantQuote = require('./theGiant');
const sheriffTrumanQuote = require('./sheriffTruman');

const dotenv = require('dotenv')
dotenv.config()

const client = new Discord.Client();

const prefix = '!';

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

  if (command === 'characters') {
    message.channel.send('Type one of these commands to get a random quote that includes that character: !dale, !gordon, !loglady, !laura, !thegiant, !sherifftruman')
  }

  if (command === 'random') {
    const randoQuote = await randomQuote()
    message.channel.send(randoQuote)
  }
  if (command === 'dale') {
    const daleCooper = await daleCooperQuote()
    message.channel.send(daleCooper)
  }
  if (command === 'loglady') {
    const logLady = await logLadyQuote()
    message.channel.send(logLady)
  }
  if (command === 'laurapalmer') {
    const lauraPalmer = await laruaPalmerQuote()
    message.channel.send(lauraPalmer)
  }
  if (command === 'thegiant') {
    const theGiant = await theGiantQuote()
    message.channel.send(theGiant)
  }
  if (command === 'sherifftruman') {
    const sheriffTruman = await sheriffTrumanQuote()
    message.channel.send(sheriffTruman)
  }

});

client.login(process.env.DISCORD_TOKEN);