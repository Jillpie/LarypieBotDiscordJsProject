// Program Details for
var programDetails = [
"Larypie Bot",
"Version 1.1",
"Discord Js"
];
console.log("--------------------");
for (var i = 0; i < programDetails.length; i++) {
  console.log(programDetails[i]);
};
console.log("--------------------");
// Load discord.js
var Discord = require("discord.js");
// Create a client
var larypieBot = new Discord.Client();
// This code will run once the bot has started up.
larypieBot.on("ready", function () {
  console.log("Ready to begin! Serving in " + larypieBot.channels.length + " channels");
  larypieBot.sendMessage("#schsrobotics", "Larypie Bot Ready.");
});
// This code will run once the bot has disconnected from Discord.
larypieBot.on("disconnected", function () {
  // alert the console
  console.log("Disconnected!");
  // exit node.js with an error
  process.exit(1);
});
// This code will run once the bot receives any message.
larypieBot.on("message", function (msg) {
  // if message begins with "ping"
  if(msg.content.indexOf("Stahp") === 0) {
    // send a message to the channel the ping message was sent in.
    larypieBot.sendMessage(msg.channel, msg.tts);
    larypieBot.sendMessage(msg.channel, msg.embeds);
    larypieBot.sendMessage(msg.channel, msg.client);
    larypieBot.sendMessage(msg.channel, msg.id);
    larypieBot.sendMessage(msg.channel, "not" + msg.content + " Bot");
    larypieBot.sendMessage(msg.channel, msg.author);
    larypieBot.sendMessage(msg.channel, msg.mentions);
    // alert the console
    console.log("pong-ed " + msg.author.username);
  }
  if(msg.content.toLowerCase().includes("you")){
    larypieBot.sendMessage(msg.channel, "No u.  ");
  }
  if(msg.content.toLowerCase().includes(">channelid")){
    larypieBot.sendMessage(msg.channel, msg.channel);
  }
  if(msg.content.toLowerCase().includes("who")){
    larypieBot.sendMessage(msg.channel, "ME!!!!!!!!!!!!!!!!!!!!!");
  }
  larypieBot.startTyping(msg.channel);
  larypieBot.stopTyping(msg.channel);
  if(msg.content.toLowerCase().includes("learn")){
    larypieBot.sendMessage(msg.channel, "learning");
  }
  if(msg.content.indexOf(">Hello") === 0) {
    // send a message to the channel the ping message was sent in.
    larypieBot.sendMessage(msg.channel, "Hi!");
    // alert the console
    console.log("Hi!-ed " + msg.author.username);
  }
});

// Login (replace these auth details with your bot's)
larypieBot.loginWithToken("MTg5OTI3NDMxNDMwMzQwNjA4.CjkUWg.9kAzFEGq-ZtGCDkYvyoY5Fhle2s");
console.log("Program: " + programDetails[0] + " JS file complete.");