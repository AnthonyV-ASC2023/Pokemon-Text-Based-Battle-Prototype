let playerPokemon, enemyPokemon;

function setup() {
  createCanvas(400, 200);
  noLoop();
  initializePokemon();

  // Display initial information
  displayPokemonInfo();
}

function initializePokemon() {
  // Define Pokemon with name, type, HP, and moves
  playerPokemon = {
    name: "Pikachu",
    type: "Electric",
    hp: 100,
    moves: [
      { name: "Thunderbolt", damage: 30 },
      { name: "Quick Attack", damage: 20 }
    ]
  };

  enemyPokemon = {
    name: "Charmander",
    type: "Fire",
    hp: 100,
    moves: [
      { name: "Ember", damage: 25 },
      { name: "Scratch", damage: 15 }
    ]
  };
}

function displayPokemonInfo() {
  // Update the information displayed on the screen
  document.getElementById("player-name").textContent = playerPokemon.name;
  document.getElementById("player-type").textContent = playerPokemon.type;
  document.getElementById("player-hp").textContent = playerPokemon.hp;
  
  document.getElementById("enemy-name").textContent = enemyPokemon.name;
  document.getElementById("enemy-type").textContent = enemyPokemon.type;
  document.getElementById("enemy-hp").textContent = enemyPokemon.hp;
}

function playerAttack() {
  let attackIndex = floor(random(playerPokemon.moves.length));
  let attack = playerPokemon.moves[attackIndex];

  let damage = attack.damage;
  enemyPokemon.hp -= damage;

  addToBattleLog(playerPokemon.name + " uses " + attack.name + " and deals " + damage + " damage!");

  if (enemyPokemon.hp <= 0) {
    enemyPokemon.hp = 0;
    addToBattleLog("Enemy " + enemyPokemon.name + " fainted!");
    endBattle();
  } else {
    enemyAttack();
  }

  displayPokemonInfo();
}

function enemyAttack() {
  let attackIndex = floor(random(enemyPokemon.moves.length));
  let attack = enemyPokemon.moves[attackIndex];

  let damage = attack.damage;
  playerPokemon.hp -= damage;

  addToBattleLog("Enemy " + enemyPokemon.name + " uses " + attack.name + " and deals " + damage + " damage!");

  if (playerPokemon.hp <= 0) {
    playerPokemon.hp = 0;
    addToBattleLog(playerPokemon.name + " fainted! Game Over.");
    endBattle();
  }

  displayPokemonInfo();
}

function addToBattleLog(message) {
  // Add message to the battle log
  let logList = document.getElementById("log-list");
  let listItem = document.createElement("li");
  listItem.textContent = message;
  logList.appendChild(listItem);
}

function endBattle() {
  // Disable buttons and prevent further actions
  document.getElementById("actions").style.display = "none";
}

// Additional functions for switchPokemon() and runAway() can be implemented if desired.

function switchPokemon() {
    // Implement logic to select a new Pokemon from the player's roster
    // For simplicity, let's just switch to the next Pokemon in the roster
    let nextPokemonIndex = (playerPokemon.moves.length + 1) % playerPokemon.moves.length;
    playerPokemon = playerPokemon.roster[nextPokemonIndex];
  
    addToBattleLog("You switch to " + playerPokemon.name + ".");
    enemyAttack(); // Enemy gets a free attack after the player switches
    displayPokemonInfo();
  }
  
  function runAway() {
    // Implement logic to check if the player successfully runs away
    let success = random() < 0.5; // 50% chance of success
    if (success) {
      addToBattleLog("You successfully run away from the battle!");
      endBattle();
    } else {
      addToBattleLog("You failed to run away. The enemy attacks!");
      enemyAttack(); // Enemy gets a free attack after the failed escape attempt
      displayPokemonInfo();
    }
  }
  
  function initializePokemon() {
  // Define Pokemon with name, type, HP, moves, and a roster for the player
  playerPokemon = {
    name: "Pikachu",
    type: "Electric",
    hp: 100,
    moves: [
      { name: "Thunderbolt", damage: 30 },
      { name: "Quick Attack", damage: 20 }
    ],
    roster: [
      {
        name: "Pikachu",
        type: "Electric",
        hp: 100,
        moves: [
          { name: "Thunderbolt", damage: 30 },
          { name: "Quick Attack", damage: 20 }
        ]
      },
      {
        name: "Bulbasaur",
        type: "Grass",
        hp: 110,
        moves: [
          { name: "Vine Whip", damage: 25 },
          { name: "Tackle", damage: 15 }
        ]
      },
      // Add more Pokemon to the roster as desired
    ]
  };

  enemyPokemon = {
    name: "Charmander",
    type: "Fire",
    hp: 100,
    moves: [
      { name: "Ember", damage: 25 },
      { name: "Scratch", damage: 15 }
    ]
  };
}
