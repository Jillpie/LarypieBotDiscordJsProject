// Program Details for
var programDetails = [
"Larypie Bot",
"Version 5.0.0",
"Discord Js"
];
console.log("--------------------");
for (var i = 0; i < programDetails.length; i++) {
  console.log(programDetails[i]);
};
console.log("--------------------");
//vars
  //Msg
    //Terminate
      var commandTerminate = 0,
      checkTerminate = 0;
    //discord
      // Load discord.js
      var Discord = require("discord.js");
      // Create a client
      var larypieBot = new Discord.Client();
    //Songs
      var song = [
       "Lux",
       "+play https://www.youtube.com/watch?v=VTaOzFVZIIY",
        "Temmo",
        "+play https://www.youtube.com/watch?v=KDIAGsCOWD8",
       "Braum",
       "+play https://www.youtube.com/watch?v=zYd8D804bT0",
       "Windmill",
       "+play https://www.youtube.com/watch?v=41kF2-JvwPs",
       "Undertale",
       "+play https://www.youtube.com/watch?v=ZcoqR9Bwx1Y"
      ],
      songSelect = 1,
      songToggLoop = false,
      youToggLoop = false,
      youPlay = "https://www.youtube.com/watch?v=ADmSA0eE8SU";
    //Messaging Array
      var messArray = [
        "SAMPLE:Message",
         "TYPE:Command,Natural;ASUMES:interperts all as lowercases",
         "RESPONCE:Message",
        //Messageing Basic
          "you",
          "Natural",
          "No u.",

          " u ",
          "Natural",
          "No u.",

          ">channelid",
          "Command",
          msg.channel
      ];
      //Messaging Array Referance

// This code will run once the bot has started up.
larypieBot.on("ready", function () {
  console.log("Ready to begin! Serving in " + larypieBot.channels.length + " channels");
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
  larypieBot.joinVoiceChannel(msg.author.voiceChannel);
  //Messageing Array
    for (var i = Things.length - 1; i >= 0; i--) {
      Things[i]
    };
  //Messageing
    if((msg.content.toLowerCase().includes("you") || msg.content.toLowerCase().includes(" u ")) && !msg.content.toLowerCase().includes("youtube")){
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
    if(msg.content.indexOf(">array") === 0){
      larypieBot.sendMessage(msg.channel, programDetails);
    }
    if(msg.content.indexOf(">Hello") === 0) {
      // send a message to the channel the ping message was sent in.
      larypieBot.sendMessage(msg.channel, "Hi!");
      // alert the console
      console.log("Hi!-ed " + msg.author.username);
    }
    if(msg.content.toLowerCase().includes(">Help")){
      this.sendMessage(msg.channel, "Hi");
    }
  //Terminate
    if(msg.content.indexOf(">terminate") === 0){
      larypieBot.sendMessage(msg.channel, "I see that " + msg.author + " doesn't want me here anymore.");
      commandTerminate = 1;
    }
    if(commandTerminate > 0){
      checkTerminate++
      if(checkTerminate == 2){
        larypieBot.sendMessage(msg.channel, "terminal velocity.");
        larypieBot.voiceConnection.destroy();
        process.exit(1);
      }
    }
  //Best Hexa
    if(msg.content.indexOf("Music finished! Disconnecting from voice channel!") != -1 && songToggLoop == true){
      larypieBot.sendMessage(msg.channel, song[songSelect]);
    }
    if(msg.content.indexOf("ping") != -1){
      console.log("pong-ed " + msg.author.username);
    }
    if(msg.content.indexOf(song[songSelect]) != -1){
      larypieBot.sendMessage(msg.channel, programDetails[0] + " " + programDetails[1]);
    }
    if(msg.content.indexOf(">Play Song") != -1){
      larypieBot.sendMessage(msg.channel, "msg.channel: " + msg.channel);
      larypieBot.sendMessage(msg.channel, "msg.author.voiceChannel: " + msg.author.voiceChannel);
      larypieBot.sendMessage(msg.channel, song[songSelect]);
    }
    if(msg.content.indexOf(">Change Song") != -1){
      songSelect++;
      songSelect++;
      larypieBot.sendMessage(msg.channel, song[songSelect - 1]);
    }
    if(msg.content.indexOf(">RChange") != -1){
      songSelect = 1;
      larypieBot.sendMessage(msg.channel, song[songSelect - 1]);
    }
    if(msg.content.indexOf(">Stop Song") != -1){
      larypieBot.sendMessage(msg.channel, "+stop");
    }
    if(msg.content.indexOf(">Play Music") != -1){
    //  larypieBot.voiceConnection.playFile("https://www.youtube.com/watch?v=ZcoqR9Bwx1Y");
    }
    if(msg.content.indexOf(">Fun") != -1){
      larypieBot.sendMessage(msg.channel, "Song Select: " + songSelect);
      larypieBot.sendMessage(msg.channel, "Song.Length: " + song.length);
    }
    if(msg.content.indexOf(">Next Song?") != -1){
      this.sendMessage(msg.channel, song[songSelect - 1]);
    }
    if(msg.content.indexOf(">Togg Loop") != -1){
      songToggLoop = !songToggLoop;
      this.sendMessage(msg.channel, songToggLoop);
    }
    if(msg.content.indexOf(">Stop Song") != -1){
      this.sendMessage(msg.channel, "+stop");
    }
  //Youtube Play All
    if(msg.content.indexOf("https://www.youtube.com") === 0){
      larypieBot.joinVoiceChannel(msg.author.voiceChannel);
      larypieBot.sendMessage(msg.channel, "+play " + msg.content);
      youPlay = msg.content;
    }
    if(youToggLoop == true && msg.content.indexOf("Music finished! Disconnecting from voice channel!") === 0){
      larypieBot.joinVoiceChannel(msg.author.voiceChannel);
      larypieBot.sendMessage(msg.channel, "+play " + youPlay);
    }
    if(msg.content.indexOf(">Togg You") != -1){
      youToggLoop = !youToggLoop;
      this.sendMessage(msg.channel, youToggLoop);
    }
    if(msg.content.indexOf(">Play Last") != -1){
      this.sendMessage(msg.channel, "+play " + youPlay);
    }
    if(msg.content.indexOf(">del") === 0 ){
      larypieBot.deleteMessage(msg.id);
      larypieBot.deleteMessage(msg.content);
      larypieBot.deleteMessage(msg.server);
      larypieBot.deleteMessage(msg.channel);
      larypieBot.sendMessage(msg.channel,"completed!");
      larypieBot.getChannelLogs(msg.channel);
      larypieBot.sendMessage(msg.channel,larypieBot.getChannelLogs(msg.channel));

    }

});

// Login (replace these auth details with your bot's)
larypieBot.loginWithToken("MTg5OTI3NDMxNDMwMzQwNjA4.CjkUWg.9kAzFEGq-ZtGCDkYvyoY5Fhle2s");
console.log("Program: " + programDetails[0] + programDetails[1] + " JS file complete.");