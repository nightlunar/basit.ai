const { Client, Collection, Intents, MessageEmbed } = require('discord.js');
const client = global.client = new Client({	allowedMentions: { parse: ['users', 'roles'], repliedUser: true },
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]
 
});

var stringSimilarity = require('./similar')


client.once("ready", () => {
    console.log("ready")
})

client.on("messageCreate", async(message) => {
    if (message.author.id == "936690896366350526") return
    let arrays = {
        test: ["test2", "test2"],
        anan: ["seninde anan", "efm aşkım"],
        nasılsın: ["iyiyim sen?", "olduğu kadar be aşkitom", "ponçik şey iyiyim ben asıl seni sormalıı"],
        bende_iyi: ["oy tipini yiyim senin", "duyduğuma sevindim"],
        annen: ["annem iyi, çay içiyor", "sanane amk", "benim sevgilim var sen nereye"],
        sude: ["ne car canm", "efendim aşkım", "noldu?", "sussy baka"],
        sen_kızmısın: ["ne yapıcaksın","evet","niye soruyorsun"],
        uwu: ["uwu","owo"],
        owo: ["uwu","owo"],
        napim: ["napim","tamam"],
        troll: ["https://tenor.com/view/troll-pilled-gif-19289988%22,%22hehe", "hehe"],
        a: ["a","aa"],
        orospu: ["aşkımm bunlar kızmaya deymez", "BAĞIRMA LAN", "OwO"],
        sew_olakmı: ["evet bebeğim, dm bekliyorum bebeğim, olduk bile"],
        nerelisin: ["paytonikistanlı, türkiyeli"],
        napıyon: ["hiç öylesine plasmicte takılıyorum sen napıyorsun ponçik, seni güzelliğini izliyorum"],
        sahibin_kim: ["pavyonik bey", "ANAN"],
        sen_takipsizad:["yo","hayır"],
         aşkım_mısın:["hayır","discorddan çıkıp edin"],
        evet:["neye evet","hayır"],
        kız:["evet","uwu kızım"],
        ayak_numaran_kaç: ["36.5","ne yapıcan"],
        seni_seviyorum: ["bence arkadaş kalalım","bende seni seviyorum", "◑﹏◐", "(❤ ω ❤)"],
        seviyorum: ["bence arkadaş kalalım","bende seni seviyorum", "◑﹏◐", "(❤ ω ❤)"],
        sev: ["bence arkadaş kalalım","bende seni seviyorum", "◑﹏◐", "(❤ ω ❤)"],
        insta_varmı: ["var atıyorum özelden sew oluruz", "yok"],
        artı_on_sekiz: ["en sevdiğim belki yaparız", "walla?"],
        sevgili_olak:["sevgilim var","yo"],
        sus:["hayır","ne yapıcan"],
        gta:["hayır","aylardır bunu bekliyordum sewgiyim"],
        yok:["hayır","aylardır bunu bekliyordum sewgiyim"],
        amk:["ASIL BEN SENİN AMK","küfür etme aşkitom"],
        yaratıcın_kim:["pythonic ,takipsizad bir kaç cümle ekledi","tahmin et"], 
        goatse_cx:["nerden biliyorsun ve neden attın","panik"], 
        meme:["eğelenceli fotoğraf olanmı yoksa *eğelenceli fotoğraf olanmı*","panik"], 
        pembe:["nasılsın canım", "anannnnn"], 
        baba:["olsa burda olurmuyum", "＞﹏＜"], 
        oje:["FUCK PEACE ITS TIME FOR A REVOLUTION", "oje oje oje oje oje oje oje oje"], 
        komik:["bikaç tane sevdiğim komikli post veremmi*","https://preview.redd.it/hqasz0flayp51.jpg?auto=webp&s=c0c8639d95b17f9d018083aedfc5c66129b93e1e", "https://cdn.forum.shiftdelete.net/data/xfmg/thumbnail/1/1007-76b62fd5cbfe1daf226f77d92af21eea.jpg?1628775840", "https://preview.redd.it/qxdcbbbcsnx51.jpg?width=640&crop=smart&auto=webp&s=f47dae109901070bc334c489651418130ddcfbc7"], 
        xkcd:["güzelmiş bence oku","https://xkcd.com/327/ "],
        yaş_kaç:["12","19"],
        eyw:["KİME EYWALLAH, SANAYSA BENDENDE SANA OLAN EYWALLAHA SANA BİR EYWALLAH ヾ(≧▽≦*)o","KİME EYWALLAH, SANAYSA BENDENDE SANA OLAN EYWALLAHA SANA BİR EYWALLAH ヾ(≧▽≦*)o"],
        eyvallah:["KİME EYWALLAH, SANAYSA BENDENDE SANA OLAN EYWALLAHA SANA BİR EYWALLAH ヾ(≧▽≦*)o","KİME EYWALLAH, SANAYSA BENDENDE SANA OLAN EYWALLAHA SANA BİR EYWALLAH ヾ(≧▽≦*)o"],
        selam:["Aleyküm selam","Aleykumesselamu ve rahmatullahi ve berakatihi Bismillahirrahmanirrahim Yasın Vel kur’anil hakiym İnneke le minel murseliyn Ala sıratım müstekıym Tenziylel aziyzir rahıym Li tünzira kavmem ma ünzira abaühüm fehüm ğafilun Le kad hakkal kavlü ala ekserihim fehüm la yü’minun İnna cealna fı a’nakıhim ağlalen fe hiye ilel ezkani fehüm mukmehun Ve cealna mim beyni eydihim seddev ve min halfihim sedden fe ağşeynahüm fehüm la yübsırun Ve sevaün aleyhim e enzertehüm em lem tünzirhüm la yü’minun İnnema tünziru menittebeaz zikra ve haşiyer rahmane bil ğayb fe beşşirhü bi mağfirativ ve ecrin kerım İnna nahnü nuhyil mevta ve nektübü ma kaddemu ve asarahüm ve külle şey’in ahsaynahü fı imamim mübiyn"],
        sa:["Aleyküm selam","Aleykumesselamu ve rahmatullahi ve berakatihi Bismillahirrahmanirrahim Yasın Vel kur’anil hakiym İnneke le minel murseliyn Ala sıratım müstekıym Tenziylel aziyzir rahıym Li tünzira kavmem ma ünzira abaühüm fehüm ğafilun Le kad hakkal kavlü ala ekserihim fehüm la yü’minun İnna cealna fı a’nakıhim ağlalen fe hiye ilel ezkani fehüm mukmehun Ve cealna mim beyni eydihim seddev ve min halfihim sedden fe ağşeynahüm fehüm la yübsırun Ve sevaün aleyhim e enzertehüm em lem tünzirhüm la yü’minun İnnema tünziru menittebeaz zikra ve haşiyer rahmane bil ğayb fe beşşirhü bi mağfirativ ve ecrin kerım İnna nahnü nuhyil mevta ve nektübü ma kaddemu ve asarahüm ve külle şey’in ahsaynahü fı imamim mübiyn"],
        mrb:["pythonic tarafından rehine olarak tutuluyorum ve yazıyorum","merhaba","selam","sa",":D sevgilin değilim","Merhaba Nasılsın?"],
        adam:["merhaba, ben sude φ(*￣0￣) 12 yaşında bir discord oyuncusuyum ç","ben göremedim galiba"],
        döv:["yiyosa döv lan, gel kapışak", "ben seni dövüyormuyum ＞︿＜"],
        dövrm:["yiyosa döv lan, gel kapışak", "ben seni dövüyormuyum ＞︿＜"],
        dövicem:["yiyosa döv lan, gel kapışak", "ben seni dövüyormuyum ＞︿＜"],
        ara:["kimi", "＞︿＜"],
        niyet: ["ben iyi niyetli bir insanım", "OwO"],
        sik: ["AŞKIM BENİM YANIMDA KÜFÜR ETME DEMEDİMMİ SANA   ", "evet aşkitom böyle devam    "],
        discord:["discord sunucuma gelebilirsin", "discord.gg/javascript"],
        aynen:["ASIL SANA AYNEN", "＞︿＜"],
        oç: ["İnsanların annesine laf etmen hiç doğru değil   ", "Aşkım ne diyorsun"],
        zıkkım:["LAN ÇOCUK O YENMEZ, ZIKKIM O ", "uyuşturucu içince bunun gibi oluyorsunuz millet. İçmeyin..."],
        naber:["İYİ CANIM SEN NASILSINNNNNNNNNNNNN", "＞︿＜"],
        göt:["minnacık", "efsane amk 40 kilometre.", "dünyada heykelini yapacak çimento yok"],
        merhaba: ["günaydın   ", "iyi geceler    "],
        it: ["köpek   ", "AAAAAAAAAAAAAAAAAA    "],
        sayı: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        rastgele_sayı: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        bir_sayı_tut: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        sayı_tut: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        para_çevir: ["yazı", "tura", "dik geldi desem inanırmısın", "TURA", "YAZI"],
        yazı_tura: ["yazı", "tura", "dik geldi desem inanırmısın", "TURA", "YAZI"],


    }
    let f = ["Arapça konuşsan daha iyi anlicam", "Ponçiğim ben bunları anlamıyorum", "ponçikiletto ne diyon", "anlamadım (❁´◡`❁)", "ne dion amk (●'◡'●)", "(•_•) neyyy", "¯\_(ツ)_/¯ bende yok bu", "(⓿_⓿) nası yani", "ne diyon amk" ]                                             
   var no = f[Math.floor(Math.random() * f.length)]
   if (message.mentions.has(client.user)) {
       
    var matches = stringSimilarity.findBestMatch(message.content.replace("<@!936690896366350526>", ""), Object.getOwnPropertyNames(arrays))
  console.log(matches)
    var rating = matches.bestMatch.rating
    
    if (rating < 0.2) {
        return message.reply(`${no}`)
    } else {
        let reply = matches.bestMatch.target
        var x = eval("arrays" + "." + reply)
        var y = x[Math.floor(Math.random() * x.length)]
    
       return message.reply(`${y}`)
    }
  
   } else {


    var matches = stringSimilarity.findBestMatch(message.content, Object.getOwnPropertyNames(arrays))
    var rating = matches.bestMatch.rating
    
    if (rating < 0.5) {
        return
    }
         const rndInt = Math.floor(Math.random() * 6) + 1
         if (rndInt < 2) {
            let reply = matches.bestMatch.target
            var x = eval("arrays" + "." + reply)
            var y = x[Math.floor(Math.random() * x.length)]
        
           return message.reply(`${y}`)
         }

   }



})

client.login("")
