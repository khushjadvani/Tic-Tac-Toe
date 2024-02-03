let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newgamebtn = document.querySelector("new-button");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");


//player x , player 0
let turn0 = true;

const winpatterns =[
    [0,1,2] , [0,3,6] , [0,4,8]
    [1,4,7] , [2,4,6] , [2,5,8]
    [3,4,5] , [6,7,8] ,
];

const resetGame = () => {
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) =>
{
    box.addEventListener("click",() =>
    {
        // console.log("box was clicked") ;

        if(turn0)       //if player 0 ki turn
        {
            box.innerText = "0";
            turn0 = false;
            
        }
        else            //if player X ki turn
        {
            box.innerText = "X";
            turn0 =  true; 
        }
        box.disabled = true ;

        checkWinner();
    });
});

const disableboxes = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const enableboxes = () =>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";

    }
}

const showWinner = (Winner) =>{
    msg.innerText = 'congratulation , The Winner is ${Winner}';
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const checkWinner = () => {
    for (let pattern of winpatterns)
    {   
       
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;


        if(pos1val != "" && pos2val != "" && pos3val != "" )
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                // console.log("Winner",pos1val);
                showWinner(pos1val);

            }
        }
    }
};

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");

// let turnO = true; //playerX, playerO
// let count = 0; //To Track Draw

// const winPatterns = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// const resetGame = () => {
//   turnO = true;
//   count = 0;
//   enableBoxes();
//   msgContainer.classList.add("hide");
// };

// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     if (turnO) {
//       //playerO
//       box.innerText = "O";
//       turnO = false;
//     } else {
//       //playerX
//       box.innerText = "X";
//       turnO = true;
//     }
//     box.disabled = true;
//     count++;

//     let isWinner = checkWinner();

//     if (count === 9 && !isWinner) {
//       gameDraw();
//     }
//   });
// });

// const gameDraw = () => {
//   msg.innerText = `Game was a Draw.`;
//   msgContainer.classList.remove("hide");
//   disableBoxes();
// };

// const disableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = true;
//   }
// };

// const enableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = false;
//     box.innerText = "";
//   }
// };

// const showWinner = (winner) => {
//   msg.innerText = `Congratulations, Winner is ${winner}`;
//   msgContainer.classList.remove("hide");
//   disableBoxes();
// };

// const checkWinner = () => {
//   for (let pattern of winPatterns) {
//     let pos1Val = boxes[pattern[0]].innerText;
//     let pos2Val = boxes[pattern[1]].innerText;
//     let pos3Val = boxes[pattern[2]].innerText;

//     if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
//       if (pos1Val === pos2Val && pos2Val === pos3Val) {
//         showWinner(pos1Val);
//         return true;
//       }
//     }
//   }
// };

// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);