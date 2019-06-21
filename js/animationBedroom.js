const messagesInformation = document.querySelectorAll('.information');
const picturesBedroom = document.querySelectorAll('.t');

function displayInformation(){

    for(let message of messagesInformation){
        message.style.display="none";
    }
}

function showMessage(){
    for(let i = 0; i<picturesBedroom.length; i++){
        
        picturesBedroom[i].addEventListener("click", ()=>{
            
            for(let j = 0; j<messagesInformation.length; j++){
                 
                if(i === j){
                    messagesInformation[j].style.display="block";
                }
            }
        });
    }

}

displayInformation();
showMessage();