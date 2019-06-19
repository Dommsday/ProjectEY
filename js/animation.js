const pictureScreenOne = document.getElementById("container_indication");
const buttonPicture = document.getElementById("button_picture");
const buttonCross = document.getElementById("buttonCross");

function screenOne(){
    
    buttonPicture.addEventListener("click", () =>{
        TweenMax.to(pictureScreenOne, 2, {bottom: "0px"});
        buttonCross.style.display="block";
    });

    buttonCross.addEventListener("click", () =>{
        TweenMax.to(pictureScreenOne, 1, {bottom: "-150px"});
        buttonCross.style.display="none";
    }); 

    
}

screenOne();
