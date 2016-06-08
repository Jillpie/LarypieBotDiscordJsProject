// Program Details for
var programDetails = [
"Larypie Bot",
"Version 1",
"Discord Js"
];
console.log("--------------------");
for (var i = 0; i < programDetails.length; i++) {
  console.log(programDetails[i]);
};
console.log("--------------------");
// Load discord.js
var Discord = require("discord.js");
console.log("Loaded Discord Js");
// Create a client
var larypieBot = new Discord.Client();
console.log("Created Client");
// This code will run once the bot has started up.
larypieBot.on("ready", function () {
  console.log("Ready to begin! Serving in " + larypieBot.channels.length + " channels");
});
console.log("Attempted to ready");
// This code will run once the bot has disconnected from Discord.
larypieBot.on("disconnected", function () {
  // alert the console
  console.log("Disconnected!");
  // exit node.js with an error
  process.exit(1);
});
console.log("Attempted to disconnect");
// This code will run once the bot receives any message.
larypieBot.on("message", function (msg) {
  // if message begins with "ping"
  if (msg.content.indexOf("ping") === 0) {
    // send a message to the channel the ping message was sent in.
    larypieBot.sendMessage(msg.channel, "pong!");
    // alert the console
    console.log("pong-ed " + msg.author.username);
  }
});
console.log("Attempted to message");
// Login (replace these auth details with your bot's)
larypieBot.loginWithToken("MTg5OTI3NDMxNDMwMzQwNjA4.CjkUWg.9kAzFEGq-ZtGCDkYvyoY5Fhle2s");
console.log("Attempted to token");
console.log("Program: " + programDetails[0] + " terminated");