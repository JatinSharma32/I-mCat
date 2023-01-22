const { result } = require("./RPSresult");

const rockPaperSissor = (interaction) => {
  const choise = [
    { name: "Rock", looser: "Sissor", tie: "Rock", winner: "Paper" },
    { name: "Paper", looser: "Rock", tie: "Paper", winner: "Sissor" },
    { name: "Sissor", looser: "Paper", tie: "Sissor", winner: "Rock" },
  ];

  // const choise = ["Rock", "Paper", "Sissor"];
  let userChoise = interaction.options.get("choise").value.toLowerCase();
  let botChoise = choise[Math.floor(Math.random() * 3)];
  let userWon = 0;

  switch (userChoise) {
    case botChoise.looser.toLowerCase(): {
      userWon = -1;
      break;
    }
    case botChoise.winner.toLowerCase(): {
      userWon = 1;
      break;
    }
    default: {
      userWon = 0;
      break;
    }
  }
  interaction.reply(
    `**${
      interaction.user.username
    }: ${userChoise.toUpperCase()}\n\t\t\tV/S\nIm'Cat: ${botChoise.name.toUpperCase()}**\n\n> ${result(
      userWon
    )}`
  );
};

module.exports = { rockPaperSissor };
