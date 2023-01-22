const dotenv = require("dotenv");
const {
  Client,
  Events,
  GatewayIntentBits,
  InteractionResponse,
} = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
});

const { timer } = require("./Functions/Timer");
const { rockPaperSissor } = require("./Functions/rockPaperSirror");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on(Events.MessageCreate, (msg) => {
  //Timer
  if (msg.content === "!help timer") {
    msg.reply(
      `**Hello, ${msg.author.username}😊**\nHere is the command and its uses\n\n> !timer [ Hours:Minutes:seconds ]\n\n*Note: Dont forget to remove these [] in your command they are just for Syntax purpose*\nExample: !time 1:13:56\nYou will be notified once your timer is over.`
    );
  } else if (
    msg.content.split(" ")[0] === "!timer" &&
    msg.content.split(" ")[1] !== undefined
  ) {
    timer(msg);
  }
});

client.on(Events.InteractionCreate, (interaction) => {
  if (interaction.isChatInputCommand()) {
    // TIME command responce
    if (interaction.commandName === "time") {
      interaction.reply(
        `Time right now is\n> **Time:**   ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} ${
          new Date().getHours() > 12 ? "PM" : "AM"
        }\n> **Date:**   ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
      );
    }

    // Rock Paper Sissor command responce
    if (interaction.commandName === "rps") {
      rockPaperSissor(interaction);
    }
  } else {
    return;
  }
  return;
});

// Use .env files to store Important variables
dotenv.config();
client.login(process.env.TOKEN);
