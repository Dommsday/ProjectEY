const curseurCadran = document.getElementById("curseurCadran");
const curseur = document.getElementById("curseur");
const curseurArrow = document.getElementById("curseur_aiguille");
const arrayNumber = [1,2,3,4,5];
const manivelleLeft = document.getElementById("manivelle_left");
const manivelleRight = document.getElementById("manivelle_right");
let move = 0;



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

const moveArrowLeft = () =>{
    manivelleRight.addEventListener("click", () =>{
        const totalMove = move+= 30;
        curseurArrow.style.marginLeft = totalMove+'px';
        if(move == 120){
            manivelleRight.disabled = true;
        }
    });
}

const moveArrowRight = () =>{
    manivelleLeft.addEventListener("click", () =>{
        const totalMove = move-= 30;
        curseurArrow.style.marginRight = totalMove+'px';
        if(move == 0){
            manivelleLeft.disabled = true;
        }else{
            manivelleLeft.disabled = false;
        }
    });
}

showVMC();
curseurVMC();
moveArrowLeft();
moveArrowRight();