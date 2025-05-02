const $box = document.getElementById("box");

class Player {
  constructor(name = 'none', hp = 100, img = 'none', weapon = []) {
    this.name = name;
    this.hp = hp;
    (this.img = img), 
    (this.weapon = weapon);
  }

  atack() {
    console.log(`${this.name} fight`);
  }
}

let player1 = new Player("Scorpion", 30, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2_-jlZS4eyARNG22CP8E9sMdZ89XpSCt4Q&s');
let player2 = new Player("Subzero", 0,  'https://storage.googleapis.com/pod_public/1300/127851.jpg');

const createPlayer = (player = Player(), name = 'none', life = 100) => {
    // Создание элементов
    let $playerElement = document.createElement('div');
    $playerElement.className = 'player1';
    let $progressbar = document.createElement('div');
    $progressbar.className = 'progressbar';
    let $character = document.createElement('div');
    $character.className = 'character';
    let $life = document.createElement('div');
    $life.className = 'life';
    $life.style.width = '100%';
    let $name = document.createElement('div');
    $name.className = 'name';
    $name.innerText = name;
    let $img = document.createElement('img');
    $img.className = 'img';
    $img.src = player.img;


    $playerElement.appendChild($progressbar);
    $playerElement.appendChild($character);

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);
    console.log('in functions');
    $arenaş.appendChild($playerElement);

};

let $arenaş = document.querySelector('.arenas');

createPlayer(player1, 'SCORPION', 80);

createPlayer(player2, 'SUB-ZERO', 80);


