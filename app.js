const defaultGrid = 3;

divsketch = document.querySelector(".sketch");

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