const defaultGrid = 3;
divsketch = document.querySelector(".sketch");

let color = [0, 0, 0];
let clicked = false;
let randomized = false;

window.addEventListener("click", (e) =>{

    if (e.target.className == "grid-item") {
        clicked = !clicked;
        if (clicked){
            window.onmousemove = (e) => {
                if (e.target.className == "grid-item" && clicked) {
                    e.target.style.background = createRGB(randomized);
                }
            }
        }
    }
    
})

function createRGB(random){

    if (randomized){

        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1; 
        b = Math.floor(Math.random() * 255) + 1; 
        return "rgb("+r+","+g+","+b+")";

    }else{
        return "rgb(0, 0, 0)";
    }

}

function createDivs(numberGrid){
    
    let nAuto = "";
    divsketch.style.gridTemplateColumns = "";

    for (let i = 0; i < numberGrid; i++){
        nAuto += "auto ";
        for (let n = 0; n < numberGrid; n++){
            divsketch.innerHTML += '<div class="grid-item"/>';
        }
    }

    divsketch.style.gridTemplateColumns = nAuto;

}

function reset(){

    divsketch.innerHTML = "";
    nGrid = Number(prompt("How you want the grid? (nxn)"));

    if (Number.isNaN(nGrid) || Number.isSafeInteger(nGrid) != true || nGrid <= 0){

        alert("No valid number introduced.");
        createDivs(defaultGrid);
    }
    else{

        createDivs(nGrid);

    }

}

function randomizer(obj){

    randomized = !randomized;
    if (randomized){
        obj.style.background = "#4CAF50";
        obj.style.color = "black";
    }else{
        obj.style.background = "white"
        obj.style.color = "black";
    }

}
