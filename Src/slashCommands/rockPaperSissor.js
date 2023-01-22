const { ApplicationCommandOptionType } = require("discord.js");
rps = {
  name: "rps",
  description: "Play Rock Paper Sissor with this command.",
  options: [
    {
      name: "choise",
      description: "Choose any one from the above list",
      type: ApplicationCommandOptionType.String,
      choices: [
        {
          name: "rock",
          value: "Rock",
        },
        {
          name: "paper",
          value: "Paper",
        },
        {
          name: "sissor",
          value: "Sissor",
        },
      ],
      required: true,
    },
  ],
};

module.exports = { rps };
