/*
  this bot is a ping pong bot, and every time a message
  beginning with "ping" is sent, it will reply with
  "pong!".
*/

// Load discord.js
var Discord = require("discord.js");

// Create a client
var bot = new Discord.Client();

// This code will run once the bot has started up.
bot.on("ready", function () {
  console.log("Ready to begin! Serving in " + bot.channels.length + " channels");
});

// This code will run once the bot has disconnected from Discord.
bot.on("disconnected", function () {
  // alert the console
  console.log("Disconnected!");

  // exit node.js with an error
  process.exit(1);
});

// This code will run once the bot receives any message.
bot.on("message", function (msg) {
  // if message begins with "ping"
  if (msg.content.indexOf("ping") === 0) {
    // send a message to the channel the ping message was sent in.
    bot.sendMessage(msg.channel, "pong!");

    // alert the console
    console.log("pong-ed " + msg.author.username);
  }
});

// Login (replace these auth details with your bot's)
bot.loginWithToken("MTg5OTI3NDMxNDMwMzQwNjA4.CjkUWg.9kAzFEGq-ZtGCDkYvyoY5Fhle2s");