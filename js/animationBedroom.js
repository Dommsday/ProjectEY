const messagesInformation = document.querySelectorAll('.information');
const picturesBedroom = document.querySelectorAll('.picture_bedroom');
const closeInformation = document.querySelectorAll('.close_information');

function displayInformation(){

    for(let message of messagesInformation){
        message.style.display="none";
    }
}

function showMessage(){
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

function hideMessage(){
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



displayInformation();
showMessage();
hideMessage();
