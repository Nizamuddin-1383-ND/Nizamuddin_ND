function getRndInteger(min, max) {
  var yourName = prompt("What is your name?");
  prompt("What is your lover's name");

  var loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore) + 1;
  if (loveScore > 85) {
    alert(
      "Your love Score is " +
        loveScore +
        "%,😮" +
        yourName +
        "!! it meane that you love each other very much!💞💝💖💕"
    );
  }
  if (loveScore > 30 && loveScore <= 85) {
    alert(
      "Your love Score is " +
        loveScore +
        "%, Good, but you have to work on your relationship " +
        yourName +
        "!💛😑"
    );
  }
  if (loveScore <= 30) {
    alert(
      "your loveScore is " +
        loveScore +
        "%, 🤭😆 Poor " +
        yourName +
        "!, your love is falled don't try on it🤣"
    );
  }
}

function openPhoto() {
  window.open("Venture_logo.png", "_blank", "width=600,height=600");
}
