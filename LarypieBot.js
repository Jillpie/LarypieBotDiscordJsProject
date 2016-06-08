
      var Discord = require("discord.js");
      var projectName = "Larypie Bot"
      var projectVersion = 1;
      var projectDisplay = projectName + "v" + projectVersion;
      var channelIdList = [
      "The Balloons",
      "175009966241873920",
      "Bot Testing Realm",
      "189631708721577984",
      "SCHS Robotics",
      "177211185177821184"
      ];
      var song = [
      "Lux",
      "+play https://www.youtube.com/watch?v=VTaOzFVZIIY",
      "Temmo",
      "+play https://www.youtube.com/watch?v=KDIAGsCOWD8",
      "Braum",
      "+play https://www.youtube.com/watch?v=zYd8D804bT0"
      ];
      var songSelect = 1;
      var channelSelect = 5;
      var myFun = 0;
      var songToggLoop = true;
      var larypieBotClient = new Discord.Client();

      function startPingPong(){
        larypieBotClient.on("message", function(msg){
          if(msg.content.indexOf("Music finished! Disconnecting from voice channel!") != -1 && songToggLoop == true){
            this.sendMessage(channelIdList[channelSelect], song[songSelect]);
          }
          if(msg.content.indexOf("ping") != -1){
            this.sendMessage("ping", projectDisplay);
            console.log("pong-ed " + msg.author.username);
          }
          if(msg.content.indexOf(song[songSelect]) != -1){
            this.sendMessage(channelIdList[channelSelect], projectDisplay);
          }
          if(msg.content.indexOf(">Play Song") != -1){
            this.sendMessage(channelIdList[channelSelect], song[songSelect]);
          }
          if(msg.content.indexOf(">Change Song") != -1){
            songSelect++;
            songSelect++;
            this.sendMessage(channelIdList[channelSelect], song[songSelect - 1]);
          }
          if(msg.content.indexOf(">Fun") != -1){
            myFun++;
            this.sendMessage(channelIdList[channelSelect], "Song Select: " + songSelect);
            this.sendMessage(channelIdList[channelSelect], "Song.Length: " + song.length);
            this.sendMessage(channelIdList[channelSelect], "myFun: " + myFun);
          }
          if(msg.content.indexOf(">Next Song?") != -1){
            this.sendMessage(channelIdList[channelSelect], song[songSelect - 1]);
          }
          if(msg.content.indexOf(">Togg Loop") != -1){
            songToggLoop = !songToggLoop;
            this.sendMessage(channelIdList[channelSelect], songToggLoop);
          }
        });
        larypieBotClient.loginWithToken("MTg5OTI3NDMxNDMwMzQwNjA4.CjkUWg.9kAzFEGq-ZtGCDkYvyoY5Fhle2s");
      };
    