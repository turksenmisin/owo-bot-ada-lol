const Discord = require("discord.js");
const client = new Discord.Client();
const {JsonDatabase} = require("wio.db");
const db = require('./functions/db');
const uptime = require("moment");
require("moment-duration-format");
//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762

//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762

//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
client.on("ready", () => {
	console.log(" ")
	console.log("-------------------------------------------------------------------------------")
	console.log("Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000");
	console.log("Bu Botun Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762");
	console.log("-------------------------------------------------------------------------------")
	console.log(" ")
	let status = "✅ | Aktif.\n> :gear: | Durdurmak için **!durdur** komutunu kullanabilirsin.";
	if (db.get("owosystemstatus") == "0") {
		status = "⛔ | Aktif değil.\n> :gear: | Aktif etmek için **!başlat** komutunu kullanabilirsin.";
	}
	console.log(`${client.user.tag} olarak giriş yapıldı.`)
	console.log("Bot çalışıyor.");
	console.log(" ")
	if (db.get("channelid") != "0") {
		if (!client.channels.get(db.get("channelid"))) return db.set("channelid", "0");
		client.channels.get(db.get("channelid")).send("> ✅ | Bot çalışıyor.\n> "+status);
	}
});

//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
setInterval(function() {
	if (Number(db.get("securitytime")) > 10 || Number(db.get("securitytime")) < 1) {
		db.set("securitytime", "3");
		client.channels.get(db.get("channelid")).send("> :warning: | Güvenlik ayarları hatalı girildiğinden dolayı **Captcha Koruma Süresi 3 Dakika** olarak yapılandırıldı.");
		console.log("Güvenlik ayarları hatalı girildiğinden dolayı Captcha Koruma Süresi 3 Dakika olarak yapılandırıldı.")
	}
	if (db.get("captchasecurity") == "1") {
		if (db.get("owosecurity") == "0") {
			if (db.get("owosystemstatus") == "1") {
				db.set("owosystemstatus", "0");
				
				client.channels.get(db.get("channelid")).send("> :pause_button: | Botun doğrulamaya girmemesi için "+db.get("securitytime")+" dakikalığına durdurulmuştur.");
				console.log(" ")
				console.log("Bot doğrulamaya girmemesi için "+db.get("securitytime")+" dakikalığına durdurulmuştur.")
				console.log(" ")
				console.log("-------------------------------------------------------------------------------");
            	console.log("Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000");
            	console.log("Bu Botun Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762");
	            console.log("-------------------------------------------------------------------------------");
				console.log(" ")
				return;
			}
		
			if (db.get("owosystemstatus") == "0") {
				if (db.get("owostop") == "1") {
					console.log(" ")
					console.log("Bot durduruldu.")
					console.log(" ")
					//client.channels.get(db.get("channelid")).send("Bot durduruldu.");
					return;
				}
				else {
				db.set("owosystemstatus", "1");
				client.channels.get(db.get("channelid")).send("> :arrow_forward: | Captcha koruma süresi sona ermiştir. Bot tekrardan aktif edildi.");
				
				console.log("Captcha koruma süresi sona ermiştir. Bot tekrardan aktif edildi.")
				console.log(" ")
				console.log("-------------------------------------------------------------------------------");
            	console.log("Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000");
            	console.log("Bu Botun Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762");
	            console.log("-------------------------------------------------------------------------------");
				console.log(" ")
				return;
				}
			
		}
	}
	}
}, 60000*Number(db.get("securitytime")));
//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
setInterval(function() {
	console.log(" ")
	console.log("-------------------------------------------------------------------------------");
	console.log("Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000");
	console.log("Bu Botun Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762");
	console.log("-------------------------------------------------------------------------------");
	console.log(" ")
},300000);
//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
client.on("message", async message => {
	if (db.get("autogive") == "1") {
	  if (message.author.id != "408785106942164992") return; 
	  if (db.get("owomessagestatus") == "1") {
		if (db.get("owomessage") != message.channel.id) return;
		if (message.content.indexOf(client.user.username) != "-1") {
			if (message.content.indexOf("you currently have") == "-1") return;

			let cash = message.content.split(" ")[6].match(/\d/g).join("")
	
	
			if (db.get("otogönderim") == "1") {
				if (Number(cash) < 10000) {
					message.channel.send("> ⛔ | Otomatik para gönderme işlemi tamamlanamadı. Yetersiz Cowoncy: "+cash+"");
					console.log("Otomatik para gönderme işlemi tamamlanamadı.")
					return;
				}
				else {
				
				message.channel.send("owo give <@"+db.get("ownerid")+"> "+(Number(cash)-1000)).then(msg => {
					msg.delete();
					console.log("Otomatik para gönderme işlemi tamamlandı.")
					message.channel.send("> ✅ | Otomatik para gönderme işlemi tamamlandı.");
				});
				};

			}
			return;
	}
}
	}
},60000*10);

setInterval(function() {
	if (db.get("owosystemstatus") == "1") {
		if (db.get("autosell") == "1") {
			client.channels.get(db.get("channelid")).send("> ✅ | Otomatik satım işlemi yapılıyor.").then(msg => {
				setTimeout(function() {
					client.channels.get(db.get("channelid")).send("owo sell all").then(msg2 => {
						msg2.delete();
						client.channels.get(db.get("channelid")).send("> ✅ | Otomatik satım işlemi tamamlandı.");
						client.channels.get(db.get("channelid")).send("owo cash").then(msg3 => {
							msg3.delete();
						})
						console.log("Otomatik satım işlemi tamamlandı.")
					});
				}, 500);
			});
			return;
		}
		
				}
},60000*10);

//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
let hunt = ['17000', '20000', '24000', '27000']; 
hunt = hunt[Math.floor(Math.random() * hunt.length)];

let battle = ['27000' ,'33000' ,'37000' ,'43000']; 
battle = battle[Math.floor(Math.random() * battle.length)];

let kiss = ['35000' ,'35500' ,'36000' ,'36500']; 
kiss  = kiss[Math.floor(Math.random() * kiss.length)];

let hug = ['43000' ,'45500' ,'47000' ,'49500']; 
hug = hug[Math.floor(Math.random() * hug.length)];

let cf = ['51000' ,'53000' ,'55000' ,'57500']; 
cf = cf[Math.floor(Math.random() * cf.length)];

let slot = ['57500' ,'59500' ,'61500' ,'63000'];
slot = slot[Math.floor(Math.random() * slot.length)];


let daily = "3600000"
let pray = "300000"


//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
setInterval(function(){
	if (db.get("owosystemstatus") == "1") {
		if (db.get("systems.whunt") == "1") {

			if(db.get("wprefix") == "1" ) {
				
				let owohunt = ['owo hunt' ,'owohunt' ,'owoh' ,'owo h',
				'whunt' ,'w hunt' ,'wh' ,'w h',
				'wH' ,'Wh' ,'WH' ,'W hunt',
				'owo hunt' ,'owoHUNT' ,'wHUNT' ,'w HUNT',
			   ];

            owohunt = owohunt[Math.floor(Math.random() * owohunt.length)];

            db.add("hunt", 1);
			client.channels.get(db.get("channelid")).send(owohunt);
			console.log("OwO Hunt komutu kullanıldı.")

			} else {
			db.add("hunt", 1);
			client.channels.get(db.get("channelid")).send("owo h");
			console.log("OwO Hunt komutu kullanıldı.")
		}
	}
	}
}, hunt);
//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
setInterval(function(){
	if (db.get("owosystemstatus") == "1") {
		if (db.get("systems.wbattle") == "1") {

			if(db.get("wprefix") == "1" ) {

				let wwbattle = ['owo battle' ,'owobattle' ,'owob' ,'owo b',
			                 'wbattle' ,'w battle' ,'wb' ,'w b',
							 'wB' ,'Wb' ,'WB' ,'W battle',
			                 'owo BATTLE' ,'owoBATTLE' ,'wBATTLE' ,'w BATTLE',
							];

							
	            wwbattle = wwbattle[Math.floor(Math.random() * wwbattle.length)];

			db.add("battle", 1)
			client.channels.get(db.get("channelid")).send(wwbattle);
			console.log("OwO Battle komutu kullanıldı.")

			} else {

			db.add("battle", 1);
			client.channels.get(db.get("channelid")).send("owo b");
			console.log("OwO Battle komutu kullanıldı.")
		}
		}
	}
}, battle);
//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
setInterval(function(){
	if (db.get("owosystemstatus") == "1") {
		if (db.get("systems.wkiss") == "1") {
			if(db.get("wprefix") == "1" ) {

				let wwkiss = ['owo kiss' ,'owokiss' ,'wkiss' ,'w kiss',
			                 'OWO KISS' ,'OWOKISS' ,'WKISS' ,'W kiss',
							 'OWO kiss' ,'OWOkiss' ,'Wkiss' ,'W kiss',
			                 'owo KISS' ,'owoKISS' ,'wKISS' ,'w KISS',
							];

	            wwkiss = wwkiss[Math.floor(Math.random() * wwkiss.length)];

				db.add("kiss", 1);
			client.channels.get(db.get("channelid")).send(wwkiss+" <@408785106942164992>");
			console.log("OwO Kiss komutu kullanıldı.")

			} else {
			db.add("kiss", 1);
			client.channels.get(db.get("channelid")).send("owo kiss <@408785106942164992>");
			console.log("OwO Kiss komutu kullanıldı.")
		}
		}
	}
}, kiss);
//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
setInterval(function(){
	if (db.get("owosystemstatus") == "1") {
		if (db.get("systems.whug") == "1") {
			if(db.get("wprefix") == "1" ) {

				let wwhug = ['owo hug' ,'owohug' ,'whug' ,'w hug',
			                 'OWO HUG' ,'OWOHUG' ,'WHUG' ,'W HUG',
							 'OWO hug' ,'OWOhug' ,'Whug' ,'W hug',
			                 'owo HUG' ,'owoHUG' ,'wHUG' ,'w HUG',
							];

	            wwhug = wwhug[Math.floor(Math.random() * wwhug.length)];

				db.add("hug", 1);
				client.channels.get(db.get("channelid")).send(wwhug+" <@408785106942164992>");
				console.log("OwO Hug komutu kullanıldı.")
			
			} else {
                db.add("hug", 1);
			    client.channels.get(db.get("channelid")).send("owo hug <@408785106942164992>");
			    console.log("OwO Hug komutu kullanıldı.")
			}
		}
	}
}, hug);

setInterval(function() {
	console.log("-------------------------------------------------------------------------------");
	console.log("Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000");
	console.log("Bu Botun Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762");
	console.log("-------------------------------------------------------------------------------");
},1000000);

//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
setInterval(function(){
	if (db.get("owosystemstatus") == "1") {
		if (db.get("systems.wcf") == "1") {

		  if(db.get("wprefix") == "1" ) {

			let para = ['1','2','3','4','5'];
                para = para[Math.floor(Math.random() * para.length)];

            let owocf = ['owo cf' ,'owocf' ,'owo coinflip' ,'owocoinflip',
			             'owo cf t' ,'owocf t' ,'owo coinflip t' ,'owocoinflip t',
						 'owo cf tails' ,'owocf tails' ,'owo coinflip tails' ,'owocoinflip tails',
						 'w cf' ,'wcf' ,'w coinflip' ,'wcoinflip'];
                owocf = owocf[Math.floor(Math.random() * owocf.length)];

			db.add("cf", 1);
			client.channels.get(db.get("channelid")).send(owocf+" "+para+"");
			console.log("OwO Coinflip komutu kullanıldı.")
		} else {
			
			db.add("cf", 1);
			client.channels.get(db.get("channelid")).send("owo cf 1");
			console.log("OwO Coinflip komutu kullanıldı.")

		}
		}
	}
}, cf);

setInterval(function(){
	if (db.get("owosystemstatus") == "1") {
		if (db.get("systems.wslot") == "1") {

			if(db.get("wprefix") == "1" ) {

			let para = ['1','2','3','4','5'];
                para = para[Math.floor(Math.random() * para.length)];

            let owoslot = ['owo slot', 'owoslot', 'owos' , 'owo s',
			               'w slot', 'wslot', 'ws' , 'ws',
						   'OWO SLOT', 'OWOSLOT', 'OWOS' , 'OWO S',
						   'owo SLOT', 'owoSLOT', 'owoS' , 'owo S'];
			owoslot = owoslot[Math.floor(Math.random() * owoslot.length)];
		} else {
			
			db.add("cf", 1);
			client.channels.get(db.get("channelid")).send("owo slot 1");
			console.log("OwO Coinflip komutu kullanıldı.")
		}
		}
	}
}, slot);

let sahip = "<@"+db.get("ownerid")+">"
setInterval(function(){
	if (db.get("owosystemstatus") == "1") {

		if(db.get("wprefix") == "1" ) {

			if (db.get("systems.wpraycurse") == "1") {
				
				let pray = ['owo pray','owopray','wpray','w pray',
				            'OWO pray','owo PRAY','OWO PRAY','W PRAY',
							'W pray','w PRAY','WPRAY','OWOPRAY'];
                pray = pray[Math.floor(Math.random() * pray.length)];

				db.add("pray", 1)
				console.log("OwO Pray komutu kullanıldı.")

				client.channels.get(db.get("channelid")).send(pray+" "+sahip+"");
			}

			if (db.get("systems.wpraycurse") == "0") {
				
				let curse = ['owo curse','owocurse','wcurse','w curse',
				'OWO curse','owo CURSE','OWO CURSE','W CURSE',
				'W curse','w CURSE','WCURSE','OWOCURSE'];
	            curse = curse[Math.floor(Math.random() * curse.length)];

				db.add("curse", 1)
				console.log("OwO Curse komutu kullanıldı.")

				client.channels.get(db.get("channelid")).send(curse+" "+sahip+"");
			}

		} else {

		if (db.get("systems.wpraycurse") == "1") {
			praycurse = "owo pray ";
			db.add("pray", 1)
			console.log("OwO Pray komutu kullanıldı.")
		}
		
		if (db.get("systems.wpraycurse") == "0") {
			praycurse = "owo curse ";
			db.add("curse", 1)
			console.log("OwO Curse komutu kullanıldı.")
		}
			client.channels.get(db.get("channelid")).send(praycurse+""+sahip+"");
	}
	}
}, pray);

setInterval(function(){
	if (db.get("owosystemstatus") == "1") {
			client.channels.get(db.get("channelid")).send("owo cookie "+sahip+"");
			console.log("OwO Cookie komutu kullanıldı.")
	}
}, daily);

setInterval(function(){
	if (db.get("owosystemstatus") == "1") {
			client.channels.get(db.get("channelid")).send("owo daily");
			console.log("OwO Daily komutu kullanıldı.")
	}
}, daily);

/////////OwO Gem
var currentValue = db.get("owogemtime")
  let owogemtime = ""+db.get("owogemtime")+""
var intervalId = setInterval(() => {
  updateValue()
}, 5000);
function updateValue() {
  let owogem = ""+db.get("owogem")+""
  if (db.get("owotogem") == "1") {
    client.channels.get(db.get("channelid")).send("owo use "+owogem+"");
    console.log("OwO Gem komutu kullanıldı.")
}
  var value = db.get("owogemtime")*60000
  if (value !== currentValue) {
    updateInterval();
  }
  currentValue = value;
}

function updateInterval() {
  var interval = db.get("owogemtime")*60000;
  clearInterval(intervalId);
  intervalId = setInterval(updateValue, interval);
}
/////
client.on("message", async message => {
	if (db.get("ownerid") != message.author.id) return;
	if (db.get("owotogem") == "1") {	
	if (message.content.split(" ")[0] == "!gem-ayarla") {
		if (Number(message.content.replace(message.content.split(" ")[0]+" ", "")) > 1000 || Number(message.content.replace(message.content.split(" ")[0]+" ", "")) < 1) {
			message.channel.send("> Lütfen Doğru Gem İd si Belirtin.");
			return;
		}

		db.set("owogem", message.content.replace(message.content.split(" ")[0]+" ", ""));
		message.channel.send("> ✅ | Gemler **"+message.content.replace(message.content.split(" ")[0]+" ", "")+"**  olarak ayarlanmıştır.");
		console.log("Gemler "+message.content.replace(message.content.split(" ")[0]+" ", "")+" olarak ayarlanmıştır.")
		return;
			}
}
})
	
/////////
client.on("message", async message => {
	if (db.get("ownerid") != message.author.id) return;
	if (db.get("owotogem") == "1") {	
	if (message.content.split(" ")[0] == "!gem-süre") {
		if (Number(message.content.replace(message.content.split(" ")[0]+" ", "")) > 60 || Number(message.content.replace(message.content.split(" ")[0]+" ", "")) < 1) {
			message.channel.send("> ⛔ | Lütfen 1 dakika veya 60 dakika arasında bir dakika giriniz.");
			return;
		}

		db.set("owogemtime", message.content.replace(message.content.split(" ")[0]+" ", ""));
		message.channel.send("> ✅ | Gem Süresi **"+message.content.replace(message.content.split(" ")[0]+" ", "")+" Dakika** olarak ayarlanmıştır.");
		console.log("Gem Süresi "+message.content.replace(message.content.split(" ")[0]+" ", "")+" Dakika olarak ayarlanmıştır.")
		return;
	}
}
})

//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762

//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762

client.on("message", message => {
	if (message.author.id != "408785106942164992") return; 
	if (db.get("owomessagestatus") == "1") {
		if (db.get("owomessage") != message.channel.id) return;
		if (message.content.indexOf(client.user.username) != "-1") {
			if (message.content.indexOf("you currently have") == "-1") return;

			let cash = message.content.split(" ")[6].match(/\d/g).join("")
	
	
			if (db.get("owomessagetype") == "çek") {
				if (Number(cash) < 2000) {
					message.channel.send("> ⛔ | Para çekmeniz için hesapta en az **2000 OwO Cowoncy** olmalıdır. ");
					db.set("owomessagetype", "0");
					db.set("owomessagestatus", "0");
					console.log("Para çekme işlemi tamamlanamadı.")
					return;
				}
				
			
				
				message.channel.send("owo give <@"+db.get("ownerid")+"> "+(Number(cash)-1000)).then(msg => {
				msg.delete();
				});
				db.set("owomessagetype", "0");
				db.set("owomessagestatus", "0");
				message.channel.send("> ✅ | Para çekme işlemi başarıyla tamamlanmıştır.");
				console.log("Para çekme işlemi başarıyla tamamlanmıştır.")
				return;
			}
	}
}
});


// W PREFİX KONTROL
client.on("message", message => {
	if (message.author.id != "408785106942164992") return; 
	if (db.get("owomessagestatus") == "1") {
		if (db.get("owomessage") != message.channel.id) return;
		if (message.content.indexOf(client.user.username) != "-1") {
			if (message.content.indexOf("the current prefix is set to") == "-1") return;

			     let kontrol = message.content.split(" ").slice(-1)

			
			if(db.get("gelişmişkoruma") == "1" ) {	
				if(kontrol == "**`w`**!") {
					message.channel.send("> :eye: | OwO prefixiniz kontrol ediliyor. Lütfen bekleyiniz.").then(msg => msg.delete(5000)).then(msg2 => msg2.channel.send("> ✅ | Gelişmiş Koruma Sistemi aktif edildi."))
				db.set("wprefix", "1");
				}

				if(kontrol != "**`w`**!") {
					message.channel.send("> :eye: | OwO prefixiniz kontrol ediliyor. Lütfen bekleyiniz.").then(msg => msg.delete(5000)).then(msg2 => msg2.channel.send("> ⛔ | OwO prefixiniz doğrulanamadı.\n> :gem: | Gelişmiş Koruma Sistemi devredışı edildi.\n> :gear: | Lütfen OwO prefixini **`w`** yapınız."))
				db.set("wprefix", "0");
				db.set("gelişmişkoruma", "0");
				}
				return;
			}
}
	}
});

//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
client.on("message", message => {
	if (message.author.id != "408785106942164992") return;
	const sahip = db.get('ownerid')
	if (message.channel.type == "dm") {
		if (message.content.indexOf("Are you a real human? Please use the link below so I can check!") != "-1") {
			let link = message.content.slice(-152);
			const attachment = message.attachments.first();
            const url = attachment ? attachment.url : null;

			let channelbot = "<#"+db.get("channelid")+">";

			client.channels.get(db.get("channelid")).send("> :warning: | <@"+db.get("ownerid")+"> , Bot kod doğrulamasına düştü! Kod:"+link);
			client.channels.get(db.get("channelid")).send(url);
			client.users.get(sahip).send('Kod doğrulamasına düştüm! Doğrulama Kodu: '+channelbot)
			client.users.get(sahip).send(url);

			db.set("owosystemstatus", "0");
			db.set("owosecurity", "1");
			console.log(" ")
			console.log("Bot link doğrulamasına düştü!")
			console.log("Bot link doğrulamasına düştü!") 
			console.log("Bot link doğrulamasına düştü!")
			console.log(" ")
			return;
		}

		if (message.content.indexOf("Beep Boop. Are you a real human? Please reply with the following") != "-1") {

			client.channels.get(db.get("channelid")).send("> :warning: | <@"+db.get("ownerid")+"> , Bot kelime doğrulamasına düştü! Kodu 10 dakika içerisinde girmezseniz uyarı alabilirsiniz.");
			db.set("owosystemstatus", "0");
			db.set("owosecurity", "1");
			console.log(" ")
			console.log("Bot kelime doğrulamasına düştü! Kodu 10 dakika içerisinde girmezseniz uyarı alabilirsiniz.")
			console.log("Bot kelime doğrulamasına düştü! Kodu 10 dakika içerisinde girmezseniz uyarı alabilirsiniz.")
			console.log("Bot kelime doğrulamasına düştü! Kodu 10 dakika içerisinde girmezseniz uyarı alabilirsiniz.")
			console.log(" ")
			return;                   
		}
		if (message.content.indexOf("Beep Boop. Please DM me with only the following") != "-1") {
			client.channels.get(db.get("channelid")).send("> :warning: | <@"+db.get("ownerid")+"> , Bot kelime doğrulamasına düştü! Kodu 10 dakika içerisinde girmezseniz uyarı alabilirsiniz.");
			db.set("owosystemstatus", "0");
			db.set("owosecurity", "1");
			console.log(" ")
			console.log("Bot kelime doğrulamasına düştü! Kodu 10 dakika içerisinde girmezseniz uyarı alabilirsiniz.")
			console.log("Bot kelime doğrulamasına düştü! Kodu 10 dakika içerisinde girmezseniz uyarı alabilirsiniz.")
			console.log("Bot kelime doğrulamasına düştü! Kodu 10 dakika içerisinde girmezseniz uyarı alabilirsiniz.")
			console.log(" ")
			return;
		}
		if (message.content.indexOf(":box:") != "-1") {
			client.channels.get(db.get("channelid")).send("owo lb all");
			return;
		}
		if (message.content.indexOf(":crate:") != "-1") {
			client.channels.get(db.get("channelid")).send("owo wc all");
			return;
		}
		if (message.content.indexOf(":crate:") != "-1") {
			client.channels.get(db.get("channelid")).send("owo wc all");
			return;
		}
		if (message.content.indexOf(":box:") != "-1") {
			client.channels.get(db.get("channelid")).send("owo lb all");
			return;
		}
		if (message.content.indexOf("I have verified that you are human!") != "-1") {
			client.channels.get(db.get("channelid")).send("> ✅ | <@"+db.get("ownerid")+"> , Kod başarıyla doğrulandı. Bot tekrardan aktif ediliyor.");
			console.log(" ")
			console.log('Kod başarıyla doğrulandı. Bot tekrardan aktif ediliyor.')
			console.log('Kod başarıyla doğrulandı. Bot tekrardan aktif ediliyor.')
			console.log('Kod başarıyla doğrulandı. Bot tekrardan aktif ediliyor.')
			console.log(" ")
			db.set("owosystemstatus", "1");
			db.set("owosecurity", "0");
			return;
		}
		if (message.content.indexOf("Wrong verification code!") != "-1") {
			client.channels.get(db.get("channelid")).send("> :warning: | <@"+db.get("ownerid")+"> , Kod hatalı girildi. Lütfen kontrol edip tekrar deneyin.");
			console.log(" ")
			console.log('Kod hatalı girildi. Lütfen kontrol edip tekrar deneyin')
			console.log('Kod hatalı girildi. Lütfen kontrol edip tekrar deneyin')
			console.log('Kod hatalı girildi. Lütfen kontrol edip tekrar deneyin')
			console.log(" ")
			db.set("owosystemstatus", "0");
			db.set("owosecurity", "1");
			return;
		}
		if (message.content.indexOf("You have been banned") != "-1") {
			db.set("owosystemstatus", "0");
			db.set("owosecurity", "1");
		}
	}
 
	if(message.channel.id == `${db.get("channelid")}`) {

		const attachment = message.attachments.first();
        const url = attachment ? attachment.url : null;

        if (message.content.indexOf("Please complete your captcha to verify") != "-1") {
			db.set("owosystemstatus", "0");
			db.set("owosecurity", "1");
		}
		if (message.content.indexOf("You have been banned") != "-1") {
			db.set("owosystemstatus", "0");
			db.set("owosecurity", "1");
		}

		let channelbot = "<#"+db.get("channelid")+">";

		if (message.content.indexOf("Beep Boop. Please DM me with only the following") != "-1") {
			client.channels.get(db.get("channelid")).send("> :warning: | <@"+db.get("ownerid")+"> , Bot kelime doğrulamasına düştü! Kodu 10 dakika içerisinde girmezseniz uyarı alabilirsiniz.");
			client.channels.get(db.get("channelid")).send(url);
			client.users.get(sahip).send(`${channelbot} kanalında kelime doğrulamasına düştüm. Kod:`)
			client.users.get(sahip).send(url);
			db.set("owosystemstatus", "0");
			db.set("owosecurity", "1");
			console.log(" ")
			console.log("Bot kelime doğrulamasına düştü! Kodu 10 dakika içerisinde girmezseniz uyarı alabilirsiniz.")
			console.log("Bot kelime doğrulamasına düştü! Kodu 10 dakika içerisinde girmezseniz uyarı alabilirsiniz.")
			console.log("Bot kelime doğrulamasına düştü! Kodu 10 dakika içerisinde girmezseniz uyarı alabilirsiniz.")
			console.log(" ")
			return;
		}
		return;
	}
});

//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
client.on("message", async message => {
	if (db.get("ownerid") != message.author.id) return;
	if (message.content.split(" ")[0] == "!kanal-ayarla") {
		let channelget = client.channels.get(message.content.replace("!kanal-ayarla ", ""));
		if (channelget) {
			db.set("channelid", channelget.id);
			channelget.send("> ✅ | Bot Aktif.");
			message.channel.send("> ✅ | Kanal <#"+channelget.id+"> olarak başarıyla ayarlandı.");
			console.log("Bot kanalı başarıyla değiştirildi.")
		} else {
			message.channel.send("> ⛔ | Girdiğiniz ID'ye ait bir kanal bulunamadı.");
			console.log("Girdiğiniz ID'ye ait bir kanal bulunamadı.")
		}
		return;
	}
	if (message.content.split(" ")[0] == "!komut") {
		message.channel.send(message.content.replace("!komut ", ""));
		return;
	}
	if (message.content.split(" ")[0] == "!özel-mesaj") {
		client.users.get("408785106942164992").send(message.content.replace("!özel-mesaj ", ""));
		message.channel.send("> ✅ | Başarıyla özel mesaj gönderilmiştir.");
		console.log("Özel mesajınız gönderilmiştir.")
		return;
	}
	if (message.content.split(" ")[0] == "!durum") {
		let status = "✅ | Bot Aktif";
		if (db.get("owosystemstatus") == "0") {
			status = "⛔ | Bot Aktif Değil";
		}
		message.channel.send(status);
		return;
//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
	}
	if (message.content.split(" ")[0] == "!cash") {
		message.channel.send("owo cash").then(msg => {
			msg.delete();
		});
	}
	if (message.content.split(" ")[0] == "!kutu") {
		message.channel.send("owo lb all").then(msg => {
			msg.delete();
		},8000);
		message.channel.send("owo wc all").then(msg => {
			msg.delete();
		},8000);
		message.channel.send("> ✅ | Bütün kutular açılmıştır.");
		console.log("Bütün kutular açılmıştır.")
	}
	if (message.content.split(" ")[0] == "!çek") {
		db.set("owomessagestatus", "1");
		db.set("owomessage", message.channel.id);
		db.set("owomessagetype", "çek");
		message.channel.send("owo cash").then(msg => {
			msg.delete();
		});
	}
	if (message.content.split(" ")[0] == "!oto-gönder") {
		db.set("owomessagestatus", "1");
		db.set("owomessage", message.channel.id);
		db.set("otogönderim", "1");
		message.channel.send("owo cash").then(msg => {
			msg.delete();
		});

	}

	//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
     //Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
	if (message.content.split(" ")[0] == "!kod-doğrula") {
		message.channel.send("> ✅ | Girdiğiniz kod bota ulaştırılmıştır.");
		client.users.get("408785106942164992").send(message.content.replace("!kod-doğrula ", ""));
		console.log("Girdiğiniz kod OwO bota ulaştırılmıştır.")
	}
	if (message.content.split(" ")[0] == "!use") {
		message.channel.send("owo use "+message.content.replace("!use ", ""));
	}
	if (message.content.split(" ")[0] == "!inv") {
		message.channel.send("owo inv");
	}
//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762

//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
	if (message.content.split(" ")[0] == "!komut-ayarla") {
		if (message.content.split(" ")[1] == "whunt") {
			let status = "3";
			if (message.content.split(" ")[2] == "aç") status = "1";
			if (message.content.split(" ")[2] == "kapat") status = "0";
			if (status == "3") {
				message.channel.send("> ⛔ | Lütfen geçerli argüman girin. `aç` veya `kapat` yazabilirsiniz.");
				return;
			}
			message.channel.send("> 💾 | Ayarlar başarıyla kaydedildi.");
			db.set("systems."+message.content.split(" ")[1], status);
			return;
		}
		if (message.content.split(" ")[1] == "wbattle") {
			let status = "3";
			if (message.content.split(" ")[2] == "aç") status = "1";
			if (message.content.split(" ")[2] == "kapat") status = "0";
			if (status == "3") {
				message.channel.send("> ⛔ | Lütfen geçerli argüman girin. `aç` veya `kapat` yazabilirsiniz.");
				return;
			}
			message.channel.send("> 💾 | Ayarlar başarıyla kaydedildi.");
			db.set("systems."+message.content.split(" ")[1], status);
			return;
		}
		if (message.content.split(" ")[1] == "whug") {
			let status = "3";
			if (message.content.split(" ")[2] == "aç") status = "1";
			if (message.content.split(" ")[2] == "kapat") status = "0";
			if (status == "3") {
				message.channel.send("> ⛔ | Lütfen geçerli argüman girin. `aç` veya `kapat` yazabilirsiniz.");
				return;
			}
			message.channel.send("> 💾 | Ayarlar başarıyla kaydedildi.");
			db.set("systems."+message.content.split(" ")[1], status);
			return;
		}
		if (message.content.split(" ")[1] == "wcf") {
			let status = "3";
			if (message.content.split(" ")[2] == "aç") status = "1";
			if (message.content.split(" ")[2] == "kapat") status = "0";
			if (status == "3") {
				message.channel.send("> ⛔ | Lütfen geçerli argüman girin. `aç` veya `kapat` yazabilirsiniz.");
				return;
			}
			message.channel.send("> 💾 | Ayarlar başarıyla kaydedildi.");
			db.set("systems."+message.content.split(" ")[1], status);
			return;
		}
		
		if (message.content.split(" ")[1] == "wslot") {
			let status = "3";
			if (message.content.split(" ")[2] == "aç") status = "1";
			if (message.content.split(" ")[2] == "kapat") status = "0";
			if (status == "3") {
				message.channel.send("> ⛔ | Lütfen geçerli argüman girin. `aç` veya `kapat` yazabilirsiniz.");
				return;
			}
			message.channel.send("> 💾 | Ayarlar başarıyla kaydedildi.");
			db.set("systems."+message.content.split(" ")[1], status);
			return;
		}

		if (message.content.split(" ")[1] == "wkiss") {
			let status = "3";
			if (message.content.split(" ")[2] == "aç") status = "1";
			if (message.content.split(" ")[2] == "kapat") status = "0";
			if (status == "3") {
				message.channel.send("> ⛔ | Lütfen geçerli argüman girin. `aç` veya `kapat` yazabilirsiniz.");
				return;
			}
			message.channel.send("> 💾 | Ayarlar başarıyla kaydedildi.");
			db.set("systems."+message.content.split(" ")[1], status);
			return;
		}

		if (message.content.split(" ")[1] == "wpraycurse") {
			let status = "3";
			if (message.content.split(" ")[2] == "pray") status = "1";
			if(message.content.split(" ")[2] == "pray") message.channel.send('> 💾 | OwO Pray/Curse: Pray olarak ayarlandı.'), console.log('OwO Pray/Curse: Pray olarak ayarlandı.')
			
			if (message.content.split(" ")[2] == "curse") status = "0";
			if(message.content.split(" ")[2] == "curse") message.channel.send('> 💾 | OwO Pray/Curse: Curse olarak ayarlandı.'), console.log('OwO Pray/Curse: Curse olarak ayarlandı.')
			if (status == "3") {
				message.channel.send("> ⛔ | Lütfen geçerli argüman girin. `pray` veya `curse` yazabilirsiniz.");
				return;
			}
			db.set("systems."+message.content.split(" ")[1], status);
			return;
		}

		message.channel.send("> ⛔ | Lütfen geçerli argüman girin. `whunt` veya `wbattle` veya `wcf` veya `wslot` veya `whug` veya `wkiss` veya `wpraycurse` yazabilirsiniz.");
		return;
	}

//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762

//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
	if (message.content.split(" ")[0] == "!sellall") {
		message.channel.send("owo sell all").then(msg => msg.delete());
	}
	if (message.content.split(" ")[0] == "!w") {
		message.channel.send("owo w").then(msg => msg.delete());
	}
	if (message.content.split(" ")[0] == "!zoo") {
		message.channel.send("owo zoo").then(msg => msg.delete());
	}
	if (message.content.split(" ")[0] == "!reset" || message.content.split(" ")[0] == "!yenile") {
		await message.channel.send('> :arrows_counterclockwise: | Bot tekrardan başlatılıyor. Lütfen bekleyiniz.').then(msg => msg.delete(15000).then(msg2 => msg2.channel.send('> ✅ | Bot tekrardan başlatıldı.')))
		console.log(" ")
		console.log("Bot tekrardan başlatılıyor.")
		console.log("Bot tekrardan başlatılıyor.")
		console.log("Bot tekrardan başlatılıyor.")
		process.exit(1)
		}

	if (message.content.split(" ")[0] == "!captcha-süre") {
		if (Number(message.content.replace(message.content.split(" ")[0]+" ", "")) > 10 || Number(message.content.replace(message.content.split(" ")[0]+" ", "")) < 1) {
			message.channel.send("> ⛔ | Lütfen 1 dakika veya 10 dakika arasında bir dakika giriniz.");
			return;
		}

		db.set("securitytime", message.content.replace(message.content.split(" ")[0]+" ", ""));
		message.channel.send("> ✅ | Captcha Koruması **"+message.content.replace(message.content.split(" ")[0]+" ", "")+" Dakika** olarak ayarlanmıştır.");
		console.log("Captcha Koruması "+message.content.replace(message.content.split(" ")[0]+" ", "")+" Dakika olarak ayarlanmıştır.")
		return;
	}
//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
	if (message.content.split(" ")[0] == "!captcha-koruma") {
		let option = message.content.replace(message.content.split(" ")[0]+" ", "");
		
		if (option == "aç") {
			message.channel.send("> ✅ | Captcha koruması başarıyla aktif edilmiştir.");
			console.log("Captcha koruması aktif edilmiştir.")
			db.set("captchasecurity", "1");
			return;
		}

		if (option == "kapat") {
			if (db.get("gelişmişkoruma") == "1") {
				
				 db.set("captchasecurity", "0");
				 db.set("gelişmişkoruma", "0");
				 db.set("wprefix", "0");
			     message.channel.send("> ✅ | Captcha Koruması ve Gelişmiş Captcha Koruması başarıyla deaktif edilmiştir.\n> :warning: | Captcha Korumasının kapanması aşırı derecede doğrulamaya düşmesini sağlayabilir.");
				 console.log("Captcha koruması ve Gelişmiş Captcha Koruması deaktif edilmiştir.")
			return;
			}

		  if (db.get("gelişmişkoruma") == "0") {
			  db.set("captchasecurity", "0");
			  message.channel.send("> ✅ | Captcha Koruması başarıyla deaktif edilmiştir.\n> :warning: | Captcha Korumasının kapanması botunuzun aşırı derecede doğrulamaya düşmesini sağlayabilir.");
			  console.log("Captcha koruması deaktif edilmiştir.")
			return;
			}
		}
		message.channel.send("> ⛔ | Lütfen geçerli bir argüman girin. `aç` veya `kapat` yazabilirsiniz.");
		return;
	}

	if (message.content.split(" ")[0] == "!gelişmiş-koruma") {
		if (db.get("captchasecurity") == "1") {
		let option = message.content.replace(message.content.split(" ")[0]+" ", "");
		//AÇ
		if (option == "aç") {
			db.set("gelişmişkoruma", "1");
			db.set("owomessagestatus", "1");
		    db.set("owomessage", message.channel.id);

		    message.channel.send("owo prefix").then(msg => {
			msg.delete();
		});
			return;
		}

		//KAPAT
		if (option == "kapat") {
			db.set("gelişmişkoruma", "0");
			db.set("wprefix", "0");
			message.channel.send("> ✅ | Gelişmiş Captcha Koruması başarıyla deaktif edilmiştir.");
			console.log("Gelişmiş Captcha Koruması deaktif edilmiştir.")
			return;
		}
		message.channel.send("> ⛔ | Lütfen geçerli bir argüman girin. `aç` veya `kapat` yazabilirsiniz.");
		return;
	} else {
		message.channel.send("> ⛔ | Captcha Koruması aktif edilmeden Gelişmiş Captcha Koruma sistemi kullanılamaz.")
	       }
    }

	if (message.content.split(" ")[0] == "!oto-sat") {
		let option = message.content.replace(message.content.split(" ")[0]+" ", "");
		if (option == "aç") {
			message.channel.send("> ✅ | Otomatik satış aktif edilmiştir. Artık 10 dakikada bir şekilde eşyalar satılacaktır.");
			console.log("Otomatik satış aktif edilmiştir.")
			db.set("autosell", "1");
			return;
		}
		if (option == "kapat") {
			db.set("autosell", "0");
			message.channel.send("> ✅ | Otomatik satış deaktif edilmiştir.");
			console.log("Otomatik satış deaktif edilmiştir.")
			return;
		}
		message.channel.send("> ⛔ | Lütfen geçerli bir argüman girin. `aç` veya `kapat` yazabilirsiniz.");
		return;
	}
//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
	if (message.content.split(" ")[0] == "!oto-gönder") {
		let option = message.content.replace(message.content.split(" ")[0]+" ", "");
		if (option == "aç") {
			db.set("autogive", "1");
			db.set("otogönderim", "1")
			message.channel.send("> ✅ | Otomatik para gönderimi aktif edildi. Artık botun parası 10.000'i geçtiği zaman paralar otomatik olarak size gönderilecektir.");
			console.log("Otomatik para gönderimi aktif edilmiştir.")
			return;
		}
		if (option == "kapat") {
			db.set("autogive", "0");
			db.set("otogönderim", "0")
			message.channel.send("> ✅ | Otomatik para gönderimi kapatıldı.");
			console.log("Otomatik para gönderimi deaktif edilmiştir.")
			return;
		}
		message.channel.send("> ⛔ | Lütfen geçerli bir argüman girin. `aç` veya `kapat` yazabilirsiniz.");
		return;
	}
	if (message.content.split(" ")[0] == "!başlat" || message.content.split(" ")[0] == "!aktifet") {
		    message.channel.send("> :arrow_forward: | Bot başarıyla aktifleştirilmiştir.\n> :gear: | **!durdur** komutunu kullanarak durdurabilirsiniz.");
	    	db.set("owosystemstatus", "1");
		    db.set("owosecurity", "0");
		    db.set("owostop", "0");
		    console.log(" ")
			console.log("Bot başlatıldı.")
			console.log(" ")
	  
}
	if (message.content.split(" ")[0] == "!durdur") {
		if(db.get("owostop") == "1") {
			message.channel.send("> :pause_button: | Bot zaten durdurulmuştur.\n> :gear: | **!başlat** komutunu kullanarak aktif edebilirsiniz.");
			console.log(" ")
			console.log("Bot zaten durduruldu.")
			console.log(" ")
		} else {
		db.set("owosystemstatus", "0");
		db.set("owostop", "1");
		message.channel.send("> :pause_button: | Bot başarıyla durdurulmuştur.\n> :gear: | **!başlat** komutunu kullanarak aktif edebilirsiniz.");
		console.log(" ")
		console.log("Bot durduruldu.")
		console.log(" ")
	}
	}
})

//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762
client.on("message", async message => {	
	if (db.get("ownerid") != message.author.id) return;
		if (message.content.split(" ")[0] == "!yardım") {
			message.channel.send(`:robot: **Bot Komutları** :robot:
			> **!başlat** veya **!aktifet** |-| Botunuzu aktif edersiniz.
			> **!durdur** |-| Botunuzu durdurursunuz.
			> **!reset** |-| Botunuzu resetlersiniz.
			> **!durum** |-| Botunuzun durumunu öğrenirsiniz.
			> **!istatistik** |-| Botunuzun istatistiklerine bakarsınız.
			> **!özel-mesaj <Mesajınız>** |-| OwO botuna özelden mesaj gönderebilirsiniz.
			> **!komut <Mesajınız>** |-| Bulunduğu kanala mesaj göndermesini sağlayabilirsiniz..
			> **!kod-doğrula <Doğrulama-Kodu>** |-| Botunuz doğrulamaya düştüğü zaman <@408785106942164992> botunun gönderdiği resimdeki doğrulama kodunu girerek botu tekrardan aktif edebilirsiniz.
			> -
`);
	await message.channel.send(`:moneybag: **OwO Bot Komutları** :moneybag:
	> **!cash** |-| Botunuzun parasına bakarsınız.
	> **!çek** |-| Botunuzun hesapta sadece **1000 OwO Cowoncy** bırakır, geri kalan bütün parayı sizin hesabınıza yollar.
	> **!sellall** |-| Botunuzun bütün hayvanlarını satar, owo parasına çevirirsiniz.
	> **!zoo** |-| Botunuzun hayvanlarını görüntülersiniz.
	> **!w** |-| Botunuzun silah envanterini görüntülersiniz.
	> **!inv** |-| Botunuzun envanterini görüntülersiniz.
	> **!use <Ürün-ID>** |-| Botunuzun envanterindeki **ID**'sini yazdığınız ürünü kullandırırsınız.
	> **!kutu** |-| Botunuzun envanterindeki bütün kutuları açarsınız.
	> -`);
	
	
	await message.channel.send(`:gear: **Ayar Komutları** :gear:
	> **!ayarlar** |-| Botunuzun bütün ayarlarını görüntülersiniz.
	> **!komut-ayarla <Argüman> <aç/kapat>** |-| Botunuzda çalışmasını istemediğiniz komutları açabilir veya kapatabilirsiniz. 
	> **!kanal-ayarla <Kanal-ID>** |-| Botunuzun çalışacağını kanalı ayarlarsınız.
	> **!oto-sat <aç/kapat>** |-| Botunuzun hayvanlarını otomatik satmasını açabilir ya da kapatabilirsiniz.
	> **!oto-gönder <aç/kapat>** |-| Botunuzun parası **10000 OwO Cowoncy** olduğu zaman otomatik olarak size gönderirir.
	> **!captcha-koruma <aç/kapat>** |-| Captcha korumasını açabilir ya da kapatabilirsiniz.
	> **!gem-süre <Dakika>** |-| Gemilerin Kaç Dakikada Bir Kullanılacağını Ayarlarsınız.
	> **!gem-ayarla <1.gemid> <2.gemid> <3.gemid> ** |-| Hangi Gemilerin Kullanıcağını Ayarlarsınız.
	> **!captcha-süre <Dakika>** |-| Captcha korumasınının süresini ayarlarsınız. (Min: 1 Dakika - Max: 10 Dakika)
	> **!gelişmiş-koruma <aç/kapat>** |-| Gelişmiş captcha korumasını açabilir ya da kapatabilirsiniz.

	

:shield: __Captcha koruma sistemiyle alakalı daha detaylı bilgi için **!captcha-koruma-bilgi** komutunu kullanabilirsiniz.__`)

console.log("Yardım komutu kullanıldı.")
}
////////////////////////////////////////////////
let captchasüre = db.get("securitytime");

if (message.content.split(" ")[0] == "!captcha-koruma-bilgi" ) {

	let status = `Açık ✅\n:alarm_clock: | Captcha Koruma Süresi: ${captchasüre} Dakika\n`+":gear: | Captcha Koruma Süresini değiştirmek için `!captcha-süre <Dakika>` komutunu kullanabilirsiniz.\n:gear: | Captcha Korumasını kapatmak için `!captcha-koruma kapat` komutunu kullanabilirsiniz.";
	if (db.get("captchasecurity") == "0") status = "Kapalı :negative_squared_cross_mark:\n:gear: | Captcha Korumasını açmak için `!captcha-koruma aç` komutunu kullanabilirsiniz.";

	
	let gelismis = `Açık ✅`+"\n:gear: | Gelişmiş Captcha Korumasını kapatmak için `!gelişmiş-koruma kapat` komutunu kullanabilirsiniz.";
	if (db.get("wprefix") == "0") gelismis = "Kapalı :negative_squared_cross_mark:\n:gear: | Gelişmiş Captcha Korumasını açmak için `!gelişmiş-koruma aç` komutunu kullanabilirsiniz.\n:bangbang: | Gelişmiş Captcha Korumasının açılması için OwO Botunun prefixi `w` olmalıdır.";


	message.channel.send(`:shield: **Captcha Koruma Bilgilendirme** :shield:
> Captcha Koruma Sistemi OwO Captcha'nın en az çıkmasını sağlamaktadır.
> Standart olarak 3 dakika ayarlıdır.
> Ortalama olarak 3-4 saat içerisinde bir kere çıkmaktadır. Bu süreler artabilir ya da azalabilir, hesaptan hesaba değişmekte olan bir durumdur.

:shield: **Captcha Koruma Sistemi Nasıl Çalışır** ❓
> Botu **sabit bir algoritma** süresince çalıştırıyor ardından **belirlediğiniz dakika süresince durduruyor** süre bittikten sonra bot tekrardan otomatik olarak çalışmaya başlıyor. 

:gem: **Gelişmiş Captcha Koruma Sistemi Nasıl Çalışır** ❓
> Botu **değişken bir algoritma** süresince çalıştırıyor ardından **belirlediğiniz dakika süresince durduruyor** süre bittikten sonra bot tekrardan otomatik olarak çalışmaya başlıyor.

:warning: Gelişmiş Captcha Koruma sistemi Captcha Koruma Sistemi devredışı ise çalışmaz. :warning:

:shield: | Captcha Koruma Sistemi Durumu: ${status}

:gem: | Gelişmiş Captcha Koruma Sistemi Durumu: ${gelismis}

	`);
	
	console.log("Captcha Koruma Bilgi komutu kullanıldı.")
}
//let me die#1000
//ChaosDevil#4762
if(message.content.split(" ")[0] == "!ayarlar") {
	let captchasüre = db.get("securitytime");

	let captchakoruma = `Aktif ✅\n> :alarm_clock: | **Captcha Koruma Süresi:** ${captchasüre} Dakika\n`;
	if (db.get("captchasecurity") == "0") captchakoruma = "Aktif Değil :negative_squared_cross_mark:";

	let gelismis = `Açık ✅`;
	if (db.get("wprefix") == "0") gelismis = "Aktif Değil :negative_squared_cross_mark:";

	let autosell = "Aktif ✅";
	if (db.get("autosell") == "0") autosell = "Aktif Değil :negative_squared_cross_mark:";

	let autogive = "Aktif ✅";
	if (db.get("autogive") == "0") autogive = "Aktif Değil :negative_squared_cross_mark:";

	let whunt = "Aktif ✅";
	if (db.get("systems.whunt") == "0") whunt = "Aktif Değil :negative_squared_cross_mark:";

	let wbattle = "Aktif ✅";
	if (db.get("systems.wbattle") == "0") wbattle = "Aktif Değil :negative_squared_cross_mark:";

	let whug = "Aktif ✅";
	if (db.get("systems.whug") == "0") whug = "Aktif Değil :negative_squared_cross_mark:";

	let wcf = "Aktif ✅";
	if (db.get("systems.wcf") == "0") wcf = "Aktif Değil :negative_squared_cross_mark:";

	let wslot = "Aktif ✅";
	if (db.get("systems.wslot") == "0") wslot = "Aktif Değil :negative_squared_cross_mark:";

	let wkiss = "Aktif ✅";
	if (db.get("systems.wkiss") == "0") wkiss = "Aktif Değil :negative_squared_cross_mark:";

	let wpray = "Pray :pray:"
	if (db.get("systems.wpraycurse") == "0") wpray = "Curse :pray:";

	let channelbot = "<#"+db.get("channelid")+">";
	if (db.get("channelid") == "0") channelbot = "Kanal Ayarlı Değil :negative_squared_cross_mark:";

	message.channel.send(`:globe_with_meridians: **Genel Ayarlar** :globe_with_meridians:
	
> :robot: | **Bot Kanalı:** ${channelbot}
	
> :shield: | **Captcha Koruma:** ${captchakoruma}
> :gem: | **Gelişmiş Captcha Koruma:** ${gelismis}

> :repeat_one: | **Otomatik Satış:** ${autosell}
> :repeat_one: | **Otomatik Para Gönder:** ${autogive}

:gear: | Ayarlarınızı değiştirmek için "**!yardım**" komutunu kullanabilirsiniz.
	

:wrench: **Komutlar**

> **OwO Hunt:** ${whunt}
> **OwO Battle:** ${wbattle}
> **OwO Coinflip:** ${wcf}
> **OwO Slot:** ${wslot}
> **OwO Hug:** ${whug}
> **OwO Kiss:** ${wkiss}
> **OwO Pray**/**Curse:** ${wpray} 
	
:gear: | Komutları kapatmak için "**!komut-ayarla**" komutunu kullanabilirsiniz.`);


console.log("Ayarlar komutu kullanıldı.")
}
//////////////////////////////////////////////////////
if (message.content.split(" ")[0] == "!istatistik") {
	let huntis = db.get("hunt")
	let battleis = db.get("battle")
	let kissis = db.get("kiss")
	let hugis = db.get("hug")
	let cfis = db.get("cf")
    let slotis = db.get("slot")
	let prayis = db.get("pray")
	let curseis = db.get("curse")

	let çalışmasüresi = uptime.duration(client.uptime).format(" D [Gün], H [Saat], m [Dakika], s [Saniye] ")

	let whunt = "Aktif ✅";
	if (db.get("systems.whunt") == "0") whunt = "Aktif Değil ❎";

	let wbattle = "Aktif ✅";
	if (db.get("systems.wbattle") == "0") wbattle = "Aktif Değil ❎";

	let whug = "Aktif ✅";
	if (db.get("systems.whug") == "0") whug = "Aktif Değil ❎";

	let wcf = "Aktif ✅";
	if (db.get("systems.wcf") == "0") wcf = "Aktif Değil ❎";

	let wslot = "Aktif ✅";
	if (db.get("systems.wslot") == "0") wslot = "Aktif Değil ❎";

	let wkiss = "Aktif ✅";
	if (db.get("systems.wkiss") == "0") wkiss = "Aktif Değil ❎";

	let wpray = `Curse **|** ${curseis} kez kullanıldı.`;
	if (db.get("systems.wpraycurse") == "1") wpray = `Pray **|** ${prayis} kez kullanıldı.`;

	message.channel.send(`
===========================
**OwO Hunt:** ${whunt} **|** ${huntis} kez kullanıldı.
**OwO Battle:** ${wbattle} **|** ${battleis} kez kullanıldı.
**OwO Hug:** ${whug} **|** ${hugis} kez kullanıldı.
**OwO Kiss:** ${wkiss} **|** ${kissis} kez kullanıldı.
**OwO CoinFlip:** ${wcf} **|** ${cfis} kez kullanıldı.
**OwO Slot:** ${wslot} **|** ${slotis} kez kullanıldı.
**OwO Pray**/**Curse:** ${wpray}

**Çalışma Süresi:** ${çalışmasüresi}
===========================
`);
	console.log("İstatistik komutu kullanıldı.")                                                                                                                                                                                                                                                                     
}

});
//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762

//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762

//Bu Botun Yapımcısı İtemsatış: let me die Discord: let me die#1000
//Bu Botun Düzenleyicisi & Geliştiricisi İtemsatış: ChaosDevil Discord: ChaosDevil#4762

client.login(db.get("token"));
