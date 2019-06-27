const digicodeNumber = [7, 8, 9, 4, 5, 6 , 1, 2, 3, '*', 0, '#'];
const digicode = document.getElementById("digicode");
const classNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
sessionStorage.setItem("t", false);

function showDigicode(){

    digicodeNumber.map(number =>{
        const symbole = document.createElement('p');
        symbole.setAttribute('class', 'number_digicode');
        symbole.textContent = number;
        digicode.appendChild(symbole);
    });
}

function test(){

    console.log(`Valeur de la mémoire de T est de  ${sessionStorage.getItem('t')}`);
    
    digicode.childNodes[1].addEventListener("click", ()=>{

        
        
        console.log("valeur de a "+a);
    });
}

showDigicode();
test();