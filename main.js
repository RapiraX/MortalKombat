// const $box = document.getElementById("box");

// class Player {
//   constructor(name = 'none', hp = 100, img = 'none', weapon = []) {
//     this.name = name;
//     this.hp = hp;
//     (this.img = img),
//     (this.weapon = weapon);
//   }

//   atack() {
//     console.log(`${this.name} fight`);
//   }
// }

// let player1 = new Player("Scorpion", 30, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2_-jlZS4eyARNG22CP8E9sMdZ89XpSCt4Q&s');
// let player2 = new Player("Subzero", 0,  'https://storage.googleapis.com/pod_public/1300/127851.jpg');

// const createPlayer = (player = Player(), name = 'none', life = 100) => {
//     // Создание элементов
//     let $playerElement = document.createElement('div');
//     $playerElement.className = 'player1';
//     let $progressbar = document.createElement('div');
//     $progressbar.className = 'progressbar';
//     let $character = document.createElement('div');
//     $character.className = 'character';
//     let $life = document.createElement('div');
//     $life.className = 'life';
//     $life.style.width = '100%';
//     let $name = document.createElement('div');
//     $name.className = 'name';
//     $name.innerText = name;
//     let $img = document.createElement('img');
//     $img.className = 'img';
//     $img.src = player.img;

//     $playerElement.appendChild($progressbar);
//     $playerElement.appendChild($character);

//     $progressbar.appendChild($life);
//     $progressbar.appendChild($name);

//     $character.appendChild($img);
//     console.log('in functions');
//     $arenaş.appendChild($playerElement);

// };

// let $arenaş = document.querySelector('.arenas');

// createPlayer(player1, 'SCORPION', 80);

// createPlayer(player2, 'SUB-ZERO', 80);

//images:
// https://www.fightersgeneration.com/characters3/scorpion-mk3-fix2.gif
// https://www.fightersgeneration.com/characters2/kitana-r.gif
// https://www.fightersgeneration.com/np2/char1/gifs/liukang-mk3stance.gif
// https://www.fightersgeneration.com/np2/char1/gifs/sonya-mk3-stance.gif
// https://www.fightersgeneration.com/characters3/subzero-stance.gif
// https://www.fightersgeneration.com/characters/cyclops-stance.gif
// https://www.fightersgeneration.com/characters2/iron-man-stance.gif
// https://www.fightersgeneration.com/characters2/kitana-r.gif

const $arenaş = document.querySelector(".arenas");
const $randomButton = document.querySelector('.button');


const player1 = {
    player: 1,
    name: "SCORPION",
    hp: 100,
    img: "https://www.fightersgeneration.com/characters3/scorpion-mk3-fix2.gif",
    attack: function (name) {
        console.log(name + " " + "Fight...");
    },
};
const player2 = {
    player: 2,
    name: "SUB-ZERO",
    hp: 100,
    img: "https://www.fightersgeneration.com/characters3/subzero-stance.gif",
    attack: function (name) {
        console.log(name + " " + "Fight...");
    },
};

function createElement(tag , className) {
    const $tag = document.createElement(tag);
    if (className !== undefined) {
      $tag.classList.add(className);
    }
    
    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player'+playerObj.player );
    const $progressbar = createElement('div', 'progressbar' );
    const $character = createElement('div', 'character' );
    const $life = createElement('div', 'life' );
    const $name = createElement('div', 'name' );
    const $img = createElement('img');


    $life.style.width = playerObj.hp + "%";
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
}

function changeHP(player) {
  const $playerLife = document.querySelector('.player'+ player.player +' .life')
  player.hp -= 20;
  $playerLife.style.width = player.hp + '%';
  if (player.hp < 0) {
    $arenaş.appendChild(playerLose(player.name));
    player.hp = 0;
  }
  console.log('player hp = '+ player.hp);
  
}
function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';
    
    return $loseTitle;
}

$randomButton.addEventListener('click', function() {
    changeHP(player1);
    // changeHP(player2);
});

$arenaş.appendChild(createPlayer(player1));
$arenaş.appendChild(createPlayer(player2));

