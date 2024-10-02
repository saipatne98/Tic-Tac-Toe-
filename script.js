let boxes = document.querySelectorAll(".box");
let box = document.querySelector(".box");
let winnerMsg = document.querySelector(".msgContainer");
let resetBtn = document.querySelector(".resetBtn");

let turnO = true;
let count=0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            turnO = false;
            box.innerText = "O";

        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner=checkWinner();
        if(count === 9 && !isWinner ){
            gameDraw();
        }
    })
})


const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return true;
            }
        }
    }
}

const showWinner = (winner) => {
    winnerMsg.innerText = `Winner is ${winner}`;
    winnerMsg.classList.remove("hide");
    disableBoxes();

}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const resetGame = () => {
    for (box of boxes) {
        box.innerText = "";
        box.disabled = false;

    }
    winnerMsg.classList.add("hide");

}

const gameDraw=()=>{
    winnerMsg.innerText="Oh hoh ! Game Draw ,Click on Play New Game to Play";
    winnerMsg.classList.remove("hide");
    
}

resetBtn.addEventListener("click", resetGame);