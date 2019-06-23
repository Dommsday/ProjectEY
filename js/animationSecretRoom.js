const curseurCadran = document.getElementById("curseurCadran");
const curseur = document.getElementById("curseur");
const arrayNumber = [1,2,3,4,5];

function showVMC(){

    arrayNumber.map(number =>{
        const p = document.createElement("p");
        p.setAttribute("class", "numberVMC");
        p.textContent= number;
        curseurCadran.appendChild(p);
    });  
}

function curseurVMC(){
    arrayNumber.map(number =>{
        const p = document.createElement("p");
        p.setAttribute("class", "numberVMC");
        p.textContent= number;
        curseur.appendChild(p);
    });  
}

showVMC();
curseurVMC();