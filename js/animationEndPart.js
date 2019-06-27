const digicodeNumber = [7, 8, 9, 4, 5, 6 , 1, 2, 3, '*', 0, '#'];
const digicode = document.getElementById("digicode");
const classNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function showDigicode(){

    digicodeNumber.map(number =>{
        const symbole = document.createElement('p');
        symbole.setAttribute('class', 'number_digicode');
        symbole.textContent = number;
        digicode.appendChild(symbole);
    });
}

function test(){
    
    digicode.childNodes[1].addEventListener("click", ()=>{
        a = true;
        console.log("valeur de a "+a);
    });

    digicode.childNodes[0].addEventListener("click", ()=>{
        b = true;
        console.log("valeur de b "+b);
    });

    if(a == true && b == true){
        console.log("BINGO");
    }else{
        console.log(`Valeur de A ${a} et valeur de B ${b}`);
    }
}

showDigicode();
test();