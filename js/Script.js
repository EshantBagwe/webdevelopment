// const product = {
//     name: "Parker Jotter Hearld CT",
//     type: "Ball Pen",
//     color: "Black",
//     rating: 4,
//     price: 270,
//     isDeal: true,
// };
// console.log(product);

// const profile ={
// name : "Eshant Bagwe",
// posts: 13,
// followers: 279,
// following: 269,
// threadId: "eshant.bagwe.13",
// Designation:"Student",
// Bio:"Love's to enjoy Present",
// isFollow: true,
// };
// console.log(profile["Bio"]);

// Event Handling
// let btn = document.querySelector("#btn");
// btn.onclick=(e) =>{
//     console.log(e);
//     let a = 0;
//     a++;
//     console.log(a);
// }

// let box = document.querySelector("#box");
// box.onmouseover = () =>{
//     console.log("you are inside div");
// }

// btn.addEventListener("click", (evt) =>{
//     console.log("button was clicked");
//     console.log(evt);
// })

let modebtn = document.querySelector("#mode");
let currMode = "light"; //dark

modebtn.addEventListener("click", () =>{
if(currMode === "light"){
currMode = "dark";
document.querySelector("body").style.backgroundColor="black";
}else{
currMode = "light";
document.querySelector("body").style.backgroundColor="white";
}
console.log(currMode);
});
