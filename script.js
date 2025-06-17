
let coins = 1000;

function login() {
  alert("Login efetuado! Bem-vindo de volta.");
}

function register() {
  alert("Cadastro concluído! Faça login para começar a jogar.");
}

function playGame(game) {
  if (coins < 50) {
    alert("Você precisa de pelo menos 50 Lucky Coins para jogar.");
    return;
  }
  coins -= 50;
  let win = Math.random() > 0.5;
  if (win) {
    let ganho = 100 + Math.floor(Math.random() * 200);
    coins += ganho;
    alert(`Você jogou ${game} e ganhou ${ganho} Lucky Coins!`);
  } else {
    alert(`Você jogou ${game} e perdeu! Tente novamente.`);
  }
  document.getElementById("coins").textContent = coins;
}
