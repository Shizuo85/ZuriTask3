const Cookies = require("js-cookie")

let username = prompt("Please enter your username");
Cookies.set('Username', username);

let score = 0;
Cookies.set('Score', score)

let num;

let game = n => {
  let number = Math.floor(Math.random() * num) + 1
  
  console.log(`\nSTAGE ${num-1}`)
  let guess = prompt(`Enter a guess between 1 and ${num}`)
  
  if (guess == number) {
    console.log(`That is correct ${username}!!`)
    num += 1
    score += 1
    Cookies.set('Score', score)
    game(num)
  }
  else {
    console.log(`\nOops!!\nGame Over *_*\nScore = ${score}`)
  }
}

while (true) {
  num = 2;
  score = 0;
  game();
  console.log("\nWould you like to play again?")
  ans = prompt("Enter Y for yes");

  if (ans!="y" && ans!="Y") break;
}

console.log(`\nThanks for playing ${username}!!!!`)