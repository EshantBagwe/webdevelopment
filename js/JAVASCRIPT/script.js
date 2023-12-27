// let h2 = document.querySelector("h2"); //accesing element
// console.log(h2.innerText);
// h2.innerText = h2.innerText+" from apana college students";
// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for (div of divs){
//    div.innerText = `new unique value ${idx}`;
//    idx++;
// }

// accesing div
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// set attribute
// console.log(para.setAttribute("class", "8433688573"))
// no change on consle but change appers in elemnts in html doc

// let div = document.querySelector("div");
// console.log(div.style.backgroundColor="green");
// console.log(div.style.backgroundColor="purple");
// div.innerText="Hello its Eshant Bagwe developing!";
// div.style.visibility="hidden";


// insert Elements
// let newBtn = document.createElement("button");
// console.log(newBtn.innerText="submit");
// let div = document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);
// div.remove(newBtn); //delete elements

// adding new elements in dom using js logic

// let newHeadline = document.createElement("h1");
// newHeadline.innerHTML = "<i>Hi, I am new!</i>";
// document.querySelector("body").prepend(newHeadline);

// newHeadline.remove();

// hw 

// appendChild() method
// let div = document.createElement();
// let li = div.appendChild(document.createElement("section")).appendChild(document.createElement("ul")).appendChild(createElement("li"));
// li.innerText = "hello Eshant";
// document.querySelector(appendChild(div));
// removechild() method

// pq
// 1
let btn = document.createElement("button");
btn.innerText = "click me ";
btn.style.backgroundColor = "red";
btn.style.color = "white";
let body = document.querySelector("body");
body.prepend(btn);

// 2
let para = document.querySelector("p");
para.classList.add("newPara");
para.classList.remove("newPara");
