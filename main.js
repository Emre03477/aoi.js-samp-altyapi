console.log(`discord.gg/akparti`)
const { AoiClient, LoadCommands } = require("aoi.js"); // Elleme
const client = `bot`
const bot = new AoiClient({
    token: "", // Bot Tokenini Gir
    prefix: "", // Prefixini Gir
    intents: ["Guilds", "GuildMessages", "MessageContent"], // Ä°ntentler
    events: ["onMessage", "onInteractionCreate"], // Eventler
       database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here",
  }
});
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/")
bot.variables ({
 ip:"", // doldur
 port:"" // doldur
})
process.on("uncaughtException", (error) => {
    console.error("Beklenmeyen bir hata oluştu:");
    console.error(error);
  });
  
process.on("unhandledRejection", (reason, promise) =>  {
    console.error("İşlenmemiş bir geri dönüşüm hatası oluştu:");
    console.error("Promise:", promise);
    console.error("Reason:", reason);
});
