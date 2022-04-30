import { randomGridPosition } from "./grid.js";
import { onSnake , expandSnake} from "./snake.js";

let food = { x: 5, y: 8 }
const EXPANSION_RATE=3;


export function update() {
    if( onSnake(food) ){
        expandSnake(EXPANSION_RATE);
        // food = { x: 9, y: 15 }
        food=getRandomFoodPosition();
    }
}

export function draw(gameBoard) {

    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);

}

function getRandomFoodPosition(food){
    if(food==null || onSnake(food)){
        return randomGridPosition();
    }
}
