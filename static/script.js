var x = 5;
var y = 7;
var z = x + y;
console.log(z);
var A = "Hello";
var B = " world!";
var C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
    var x3 = x1 + x2;
    if (C.length > z) {
        console.log(C);
    }
    else if (C.length < z) {
        console.log(z);
    }
    else {
        console.log("good job!");
    }
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
const L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(list) {
//     for (let i = 0; i < list.length; i ++) {
//         if (list [i] == "Banana") {
//             window.alert("found the Banana in " + i);
//         }
//     }
// }

function findTheBanana(arr, arrayName) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("We found a banana in the " + arrayName + " array!");
        }
    });
}

findTheBanana(L1, "first");
findTheBanana(L2, "second");


function greetingFunc() {
    let E = document.getElementById("greeting");
    let d = new Date();
    let h = d.getHours();
    let greeting;
    if (h < 12) {
        greeting = "Good morning, I am Lily";
    } else if (h < 18) {
        greeting = "Good afternoon, I am Lily";
    } else if (h < 20) {
        greeting = "Good evening, I am Lily";
    } else if (h < 24 || h < 5) {
        greeting = "Good night, I am Lily";
    }
    E.innerHTML = greeting;
}

if (window.location.href.includes("index.html")){
    greetingFunc();
}