const messagesInformation = document.querySelectorAll('.information');
const picturesBedroom = document.querySelectorAll('.picture_bedroom');
const pictureLibrary = document.querySelector('.picture_library');
const library = document.querySelector('#library');
const belier = document.querySelector('#belier');
const closeInformation = document.querySelectorAll('.close_information');

const displayInformation = () =>{

    for(let message of messagesInformation){
        message.style.display="none";
    }
}

const showMessage = () =>{
    for(let i = 0; i<picturesBedroom.length; i++){

        picturesBedroom[i].addEventListener("click", ()=>{
            console.log("test");
            
            for(let j = 0; j<messagesInformation.length; j++){
                 
                if(i === j){
                    messagesInformation[j].style.display="block";
                    console.log("hello");
                }
            }
        });
    }

}

const hideMessage = () =>{
    for(let i = 0; i<closeInformation.length; i++){

        closeInformation[i].addEventListener("click", () =>{
            
            for(let j = 0; j<messagesInformation.length; j++){

                if(i === j){
                    console.log("succes");
                    messagesInformation[j].style.display="none"; 
                }
            } 
        });
    }
}

const moveLibrary = () =>{
    belier.addEventListener("click", () =>{
        TweenMax.to(library, 4, {left: "15%"});
    });
}



displayInformation();
showMessage();
hideMessage();
moveLibrary();
