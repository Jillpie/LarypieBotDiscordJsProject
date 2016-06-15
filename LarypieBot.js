// Program Details for program
	var programDetails = {
		nameOfProgram: "Larypie Bot",
		version: "6.9.1",
		platform: "Discord Js"
	};
//Display the Prgram details (better way to condense this?)
	console.log("--------------------");
	console.log(programDetails.nameOfProgram);
	console.log(programDetails.version);
	console.log(programDetails.platform);
	console.log("--------------------");
//Varibles
	//Messages
		//Terminate
			var commandTerminate = 0,
			checkTerminate = 0;
		//discord
		// Load discord.js
			var Discord = require("discord.js");
		// Create a client
			var larypieBot = new Discord.Client();
		//Song playlist
			var song = [
				"Name of Song",
				"+play and the song url",
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
			songYou = [
				"echo",
				"https://www.youtube.com/watch?v=p4e5reGtKJA&index=84&list=PLPV7pwyL_dAoNxBpfZb6khglX98S_eVrE&shuffle=25147",
				"Ahhh",
				"https://www.youtube.com/watch?v=0rtV5esQT6I",
				"Cheer Up",
				"https://www.youtube.com/watch?v=c7rCyll5AeY",
				"Burn My Bread",
				"https://www.youtube.com/watch?v=-7VZ8MJWgRQ&list=PLPV7pwyL_dAoNxBpfZb6khglX98S_eVrE&index=11&shuffle=25147",
				"Spider",
				"https://www.youtube.com/watch?v=4SDwNOM2uH4&list=PLPV7pwyL_dAoNxBpfZb6khglX98S_eVrE&index=69&shuffle=25147",
				"Ignite 2",
				"https://www.youtube.com/watch?v=QsDV3GePOlE&index=35&list=PLPV7pwyL_dAoNxBpfZb6khglX98S_eVrE&shuffle=25147"
			],
			songYouSelect = 0,
			tYLoop = false,
			tYSame = false,
			songPlaylistSelect = 0,
			songPlaylist = [
			],
		//Other varibles for songs
			songSelect = 1,
			songToggLoop = false;
		//Youtube All Play
			var youToggLoop = false,
		//youPlay = "https://www.youtube.com/watch?v=ADmSA0eE8SU";
			youPlay = "https://www.youtube.com/watch?v=c7rCyll5AeY";
		//triggerTimmer
			var triggerTimmer = 0;
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
	//Messaging Array
		//Natrual Message array
		var messArrayNat = [
			"INPUT:Message",
			"RESPONCE:Message",

			"ping",
			"Pong",

			" no ",
			"Yes.",

			"you",
			"No u.",

			" u ",
			"No u.",

			"him",
			"'him'... Why not her...",

			"will",
			"And we will make " + msg.channel + " great again",

			"who",
			"ME!!!!!!!!!!!!!!!!!!!!",

			"hello",
			"HIIIIIIIII!",

			" help ",
			"Not anyone can help you. [consider >help]",
		];
		//Command Message array
		var messArrayComm = [
			"MESSAGE;DO NOT USE >; Message",
			"RESPONCE: Message",

			"help",
			"LOL STILL NOT DEVELOPED!",

			"channelid",
			"HA NOT DEVELOPED YET!",

			"triggertimmer",
			function triggerrn(){
				triggerTimmer++;
				return triggerTimmer;
			},
			"triggertimmerval",
			triggerTimmer
		];
		function commandStruct(commname, help, call, condition, commaction){
			this.commname = commname;
			this.help = help;
			this.call = call;
			this.condition = condition;
			commaction();
		};
		//Commands
		var commandPlay = new commandStruct(
			"commandPlay",
			"This plays music",
			"play",
			true,
			function(){
				larypieBot.sendMessage(msg.channel,"I TIRED TO PLAY MSUIC");
			}
		),
		commandFun = new commandStruct(
			"commandFun",
			"Funnnnnnnnnn!",
			"fun",
			true,
			function(){
				larypieBot.sendMessage(msg.channel,"FUN!");
			}
		),
		commandPile = [
			commandPlay,
			commandFun
		];
		//Commands Object Proto?
			for(var i = 0; commandPile.length > i && i > 0; i++){
				if(msg.content.toLowerCase().indexOf(">" + commandPile[i].call) === 0 && msg.author != larypieBot.user){
					commandPile[i+1].commaction;
				}
			}
		//Messageing Array Action
			//Natrual
				//Loops Array Messaging System starts after Example messages in Array
				for(var i = 2; messArrayNat.length > i && i > 0; i+=2) {
					//Checks if any message inputs have been matched (the first of every pair)
					if(msg.content.toLowerCase().includes(messArrayNat[i]) && msg.author != larypieBot.user){
						//If message Input is matched then respond with responce (secound of every pair)
						larypieBot.sendMessage(msg.channel,messArrayNat[i+1]);
						//Stop checking for messages at this point bot only says one thing to every message.
						i = -1;
					}
				};
			//Commands
				//Same as above "for" for now 
				for (var i = 2; messArrayComm.length > i && i > 0; i+=2) {
					if(msg.content.toLowerCase() == (">" + messArrayComm[i]) && msg.author != larypieBot.user){
						larypieBot.sendMessage(msg.channel,messArrayComm[i+1]);
						messArrayComm[i+1];
						i = -1;
					}
				};
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
			larypieBot.joinVoiceChannel(msg.author.voiceChannel);
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
			songSelect+=2;
			larypieBot.sendMessage(msg.channel, song[songSelect - 1]);
		}
		if(msg.content.indexOf(">Online") != -1){
			larypieBot.sendMessage(msg.channel, "Online");
			larypieBot.setStatus("online",null);
		}
		if(msg.content.indexOf(">Offline") != -1){
			larypieBot.sendMessage(msg.channel, "Offline");
			larypieBot.setStatus("offline",null);
		}
		if(msg.content.indexOf(">Game") != -1){
			larypieBot.sendMessage(msg.channel, "Game: " + msg.content.substring(6));
			larypieBot.setStatus("online", msg.content.substring(6));
		}
		if(msg.content.indexOf(">RChange") != -1){
			songSelect = 1;
			larypieBot.sendMessage(msg.channel, song[songSelect - 1]);
		}
		if(msg.content.indexOf(">Stop Song") != -1){
			larypieBot.sendMessage(msg.channel, "+stop");
		}
		if(msg.content.indexOf(">Play Music") != -1){
			//larypieBot.voiceConnection.playFile("https://www.youtube.com/watch?v=ZcoqR9Bwx1Y");
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
		if(msg.content.includes("https://www.youtube.com") && msg.author != larypieBot.user){
			larypieBot.joinVoiceChannel(msg.author.voiceChannel);
			larypieBot.sendMessage(msg.channel, "+play " + msg.content.substring(msg.content.indexOf("https://www.youtube.com")) );
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
			larypieBot.joinVoiceChannel(msg.author.voiceChannel);
		}
	//TY Music; This should all converge soon ; D [too many commands all meaning the same thing (they should all work together.)] i.e a new array
		if(msg.content.indexOf(">TY Play") != -1){
			larypieBot.joinVoiceChannel(msg.author.voiceChannel);
			this.sendMessage(msg.channel, "+play " + songYou[songYouSelect + 1]);
		}
		if(msg.content.indexOf(">TY Loop") != -1){
			tYLoop = !tYLoop;
			this.sendMessage(msg.channel, tYLoop);
		}
		if(msg.content.indexOf(">TY List") != -1){
			for (var i = 0; songYou.length > i;  i+=2) {
				this.sendMessage(msg.channel, "Song: " + songYou[i]);
			};
		}
		if(msg.content.indexOf(">TY Next") != -1){
			this.sendMessage(msg.channel, "Next TY Song is " + songYou[songYouSelect + 2]);
		}
		if(msg.content.indexOf(">TY Skip") != -1){
			songYouSelect+=2;
			if(songYouSelect > songYou.length){
				songYouSelect = 0;
			}
			this.sendMessage(msg.channel, "Next TY Song is " + songYou[songYouSelect]);
		}
		if(msg.content.indexOf(">TY Same") != -1){
			tYSame = !tYSame;
			this.sendMessage(msg.channel, "TY Same: " + tYSame);
			this.sendMessage(msg.channel, "Next TY Song is " + songYou[songYouSelect]);
		}
		if(tYLoop == true && msg.content.indexOf("Music finished! Disconnecting from voice channel!") === 0){
			larypieBot.joinVoiceChannel(msg.author.voiceChannel);
			if(tYSame == false){
				songYouSelect+=2;
				if(songYouSelect > songYou.length){
					songYouSelect = 0;
				}
			}
			larypieBot.sendMessage(msg.channel, "+play " + songYou[songYouSelect + 1]);
		}
		if(msg.content.indexOf(">Come Here") === 0){
			larypieBot.joinVoiceChannel(msg.author.voiceChannel);
		}
		if(msg.content.indexOf(">Bug") === 0){
			larypieBot.sendMessage(msg.channel, "1");
			larypieBot.sendMessage(msg.channel, "2");
			larypieBot.sendMessage(msg.channel, "3");
			larypieBot.sendMessage(msg.channel, "4");
			larypieBot.sendMessage(msg.channel, "5");
		}
	//PlayList

	});
// Login
	larypieBot.loginWithToken("MTg5OTI3NDMxNDMwMzQwNjA4.CjkUWg.9kAzFEGq-ZtGCDkYvyoY5Fhle2s");
//Alert Console that JS file ran completely
	console.log("Program: " + programDetails.nameOfProgram + " " + programDetails.version + " JS file complete.");