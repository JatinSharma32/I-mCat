require("dotenv").config();
const { REST, Routes } = require("discord.js");
const { Time } = require("./slashCommands/time.js");
const { rps } = require("./slashCommands/rockPaperSissor.js");

console.log("1");
const command = [Time, rps];
console.log("2");

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
console.log("3");

(async () => {
  console.log("4");
  try {
    console.log("Reg started...");
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: command }
    );
    console.log("Reg Done!!");
  } catch (error) {
    console.log("5");
    console.log(`Code failed: ${error}`);
  }
})(); // anonymus function which can self execute
