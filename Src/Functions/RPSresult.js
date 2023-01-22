const result = (userWon) => {
  if (userWon == 1) {
    return "Congratulation!!🎉🎊🎉🎊\n> You Won...😑";
  } else if (userWon == -1) {
    return "Ahahahaha homi 🤣😂...\n> You... *coughs* You Loose\n> 😂😂😂😹😹";
  } else {
    return "Hmm looks like you hackin...\n> Its a tie!😅 Lets go again?";
  }
};

module.exports = { result };
