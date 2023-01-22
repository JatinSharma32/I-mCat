const timer = (msg) => {
  let time = msg.content.split(" ")[1].split(":");
  if (!isNaN(time[0]) && !isNaN(time[1]) && !isNaN(time[2])) {
    let hour = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);
    if (hour > 12 && minutes > 0 && seconds > 0) {
      msg.reply("Please keep your time below 12 hours");
      return;
    }
    let stop = 1000 * (hour * 60 * 60 + minutes * 60 + seconds);
    setTimeout(() => {
      msg.reply("Times Up!!\nHave a nice Day");
    }, stop);
  } else {
    msg.reply("Invalid time\nUse **!help timer** for help");
  }
};

module.exports = { timer };
