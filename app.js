const defaultGrid = 3;

divsketch = document.querySelector(".sketch");

let color = [0, 0, 0];

let clicked = false;

window.addEventListener("mousedown", (e) => {

    clicked = true;
    window.onmousemove = (e) => {
        if (e.target.className == "grid-item") {
            e.target.style.background = createRGB(color[0], color[1], color[2]);
        }
    }    
})

window.addEventListener("mouseup", () =>{
    window.onmousemove = null;
});

window.addEventListener("drag", () =>{
    window.onmousemove = null;
});

function createRGB(r, g, b){
    return "rgb("+r+","+g+","+b+")";
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
    try{

        nGrid = prompt("How you want the grid? (nxn)");
        createDivs(nGrid);

    }catch(err){
        console.log(err.message);
        createDivs(defaultGrid);
    }

}
