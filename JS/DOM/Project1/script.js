let main = document.querySelector("main");
let btn = document.querySelector("button");

let arr = ["i love Shivu", "Shivali is my wife", "Football is freedom", "Nivia Aura", "I will be successful", "i will provide everthing to my family", "I am the best", "I will buy a car really soon", "I will buy a house really soon for my family", "I will land a very good job really soon", "I will become a true humble person", "God bless me", "Will be too much rich"]


btn.addEventListener('click',()=>{
    let div = document.createElement('div');

    div.innerText = arr[Math.floor(Math.random()*arr.length)] 

    let x = Math.floor(Math.random()*100);
    let y = Math.floor(Math.random()*100);
    let size = Math.floor(Math.random()*4)
    let rot = Math.floor(Math.random()*360);
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    div.style.color = `rgb(${c1},${c2},${c3})`;
    // div.style.height = "100px";
    // div.style.width = "100px";
    div.style.fontSize = size + "rem"
    div.style.left = x + "%";
    div.style.top = y+"%"
    div.style.rotate = rot + "deg";

    main.append(div);
})