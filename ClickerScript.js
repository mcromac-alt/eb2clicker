var money = 0;
			var income = 1;
      const moneytext = document.getElementById("moneytext");
    	const block = document.getElementById("Block");	
    
			function tap() {
        block.style.width = "75%";
  			money = money + income;
        new Audio('sounds/stonekick.ogg').play()
        moneytext.textContent = `${money} Камней`;
        console.log(money);
        setTimeout(() => { block.style.width = "80%"; }, 70);
			}