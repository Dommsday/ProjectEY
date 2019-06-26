const curseurCadran = document.getElementById("curseurCadran");
const curseur = document.getElementById("curseur");
const curseurArrow = document.getElementById("arrow_up");
const arrayNumber = [1,2,3,4,5];
const reset = document.getElementById("manivelle_reset");
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

function moveArrow(){
    let positionRight;
    let positionLeft = 0;
    

    manivelleRight.addEventListener('click', () =>{
        move = move+=30;
        positionRight = move;

        console.log(`Valeur de move : ${move}`);
        console.log(`Valeur de positionRight : ${positionRight}`);

        curseurArrow.style.marginLeft = `${positionRight}px`;

        if(move == 120){
            manivelleRight.disabled = true;
        }
    });

    reset.addEventListener('click', () =>{
        move = 0;
        positionRight = 0;
        curseurArrow.style.marginLeft="inherit";
        manivelleRight.disabled = false;
    });
}

showVMC();
curseurVMC();
moveArrow();
