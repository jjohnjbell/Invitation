const hashTag = document.getElementById("hashTag")
const firstCont= document.getElementById("firstSection")
const bellsEl = document.getElementById("bells")
const popUp = document.getElementById("popUp")

bellsEl.addEventListener("click", function(){
    hashTag.style.animation="ring 1s linear 1"
    hashTag.style.animationFillMode="forwards"
    firstCont.style.animation="hearts 10s linear 2"
    popUp.style.visibility="visible"

})