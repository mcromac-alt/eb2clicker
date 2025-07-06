var money = 0;
var income = 1;
var nextlvlmoney = 50;
const moneytext = document.getElementById("moneytext");
const block = document.getElementById("Block");	
var blocks = ["cobblestone","coal","copper","iron","gold"]
var level = 1
    
function tap() {
    block.style.width = "75%";
  			money = money + income;
    new Audio('sounds/stonekick.ogg').play();
    moneytext.textContent = `${money} Камней`;
    console.log(`Money: ${money}`);
    setTimeout(() => { block.style.width = "80%"; }, 70);
}

function upgrade() {
    if (money>=nextlvlmoney) {
        ++level;
        income = income * level;
        nextlvlmoney = nextlvlmoney*level
        console.log(`Achieved ${blocks[level-1]} level.`);
        block.src=`textures/${blocks[level-1]}.png`;
    }
}