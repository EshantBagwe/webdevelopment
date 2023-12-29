// accessing boxes and reset button
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

// player turn PX,PY
let  turn0 = true;

// storing winning patterns
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
box.addEventListener("click", () => {
    if(turn0){ //playerx
box.innerText = "0";
turn0 = false;
}else{  //player y
    box.innerText = "X";
    turn0 = true;
}
box.disabled = true;

// check winner 
checkWinner();
});
});

const checkWinner = () =>{
    for (pattern of winPatterns){
let pos1Val = boxes[pattern[0]].innerText;
let pos2Val = boxes[pattern[1]].innerText;
let pos3Val = boxes[pattern[2]].innerText;   

if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
    if(pos1Val === pos2Val && pos2Val === pos3Val){
        console.log("Winner",pos1Val);
    }
}
    }
};
