let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter the operation");

let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let op = document.querySelector(".op");
let ans = document.querySelector(".ans");
let message = document.querySelector(".message");
let reset = document.querySelector(".reset");

num1.innerText = a;
num2.innerText = b;
op.innerText = c;

let obj = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "*"
};

function faulty() {
    let i = Math.random();
    if (i < 0.1) {
        //Faulty operation

        c = obj[c];
        message.style.visibility = "visible";
       
    }
    else {
        message.style.visibility = "hidden";  

        }
        ans.innerText = eval(`${a}${c}${b}`);


    }
    ans.addEventListener("click", faulty);

function resetbtn(){
   

// message.style.visibility = "hidden";  
// ans.innerText = "Answer";(Try once again by your own today itdelf then message for help)

a = prompt("Enter first number");
b = prompt("Enter second number");
c = prompt("Enter the operation");
num1.innerText = a;
num2.innerText = b;
op.innerText = c;
} 

reset.addEventListener("click", resetbtn);




