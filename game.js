import { SNAKE_SPEED, update as updateSnake, draw as drawSnake , getSnakeHead, snakeIntersection} from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import {outsideGrid} from './grid.js'


let lastpainttime = 0
let gameboard = document.querySelector('#game-board')
let gameOver=false

function gameLoop(currentTime) {

    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
          window.location = '/'
        }
        return
      }
    

    window.requestAnimationFrame(gameLoop);
    const secondssincelastrenderedtime = (currentTime - lastpainttime) / 1000;
    if (secondssincelastrenderedtime < 1 / SNAKE_SPEED) {
        return
    }

    lastpainttime=currentTime


    update();
    draw();
}

window.requestAnimationFrame(gameLoop);

function update(){
    updateSnake();
    updateFood();
    checkDeath();

}

function draw(){ 
    gameboard.innerHTML='';
    drawSnake(gameboard);
    drawFood(gameboard);

}

function checkDeath(){
    
gameOver = (outsideGrid(getSnakeHead()) || snakeIntersection())  
console.log(gameOver)
}
