const indicationScreenOne = document.getElementById("picture_house");
const pictureScreenOne = document.getElementById("container_indication");
const buttonCross = document.getElementById("buttonCross");

function screenOne(){
    
    indicationScreenOne.addEventListener("click", () =>{
        TweenMax.to(pictureScreenOne, 2, {bottom: "0px"});
    });

    buttonCross.addEventListener("click", () =>{
        TweenMax.to(pictureScreenOne, 1, {bottom: "-150px"});
    }); 

    
}

screenOne();
