const container = document.querySelector(".container");

function enter() {
    let u = prompt("plaese enter number zkara f mustapha");
    while(u > 100){
        u = prompt("plaese enter number zkara f mustapha");
    }
    return u;
}

let square = enter();

function devide(squarei){
    for (let j = 0 ; j < squarei * squarei ; j++){
        const div = document.createElement("div");
        container.appendChild(div);
        div.style.width = `${(400/squarei)-2}px`;
        div.style.height = `${(400/squarei)-2}px`;
        div.style.borderRadius = `${1}px`
        div.addEventListener('mouseenter', ()=>{
            div.style.backgroundColor = 'rgb(0, 41, 41)';
        });
    }
    
}
devide(square);
const divs = [...document.querySelectorAll(".container div")];

const clear = document.querySelector(".clear");
console.log(divs);
clear.addEventListener("click", () =>{
    divs.forEach(element => {
        element.style.backgroundColor = 'rgb(0, 161, 161)';
    });
});

const resize = document.querySelector(".resize");
resize.addEventListener("click", () =>{
    container.textContent = "",
    devide(enter());
});


