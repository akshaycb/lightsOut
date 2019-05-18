const HEIGHT = 5;
const WIDTH = 7;
const DIFFICULTY_LEVEL = 2;

//create random number from 0 to max
function randomNumber(max){
  return Math.floor(Math.random() * max);
}

//crete 7 random moves
function randomBoard(diff_level){
  for(let i=0; i<diff_level; i++){
    let x=randomNumber(HEIGHT);
    let y=randomNumber(WIDTH);
    toggleCellAndNeighbors(x,y);
  }
}

//function to toggle is x,y coordinates
function toggleCell(x,y){
  if((y >= 0 && y <= WIDTH-1) &&(x >= 0 && x <= HEIGHT-1)){
    // console.log();
    document.getElementById('cel-'+x+'-'+y).classList.toggle('on');
  }
}

function toggleCellAndNeighbors(x,y){
  console.log('cel-'+x+'-'+y);
  toggleCell(x,y);
  toggleCell(x,y-1);
  toggleCell(x,y+1);
  toggleCell(x-1,y);
  toggleCell(x+1,y);
}

function handleClick(event){
  let x = Number(event.target.id.split('-')[1]);
  let y = Number(event.target.id.split('-')[2]);
  toggleCellAndNeighbors(x,y);
  if(checkWon()){
    setTimeout(winHandle, 0);
  }
}

function winHandle(){
  alert('You won! Try one more!');
  randomBoard(DIFFICULTY_LEVEL);
}

function checkWon(){
  let allcells = document.querySelectorAll('#game_table td');
  for(let cell of allcells){
    if(cell.classList.contains('on')){
      return false;
    }
  }
  return true;
}

document.querySelector('#game_table').addEventListener('click', handleClick);
randomBoard(DIFFICULTY_LEVEL);
