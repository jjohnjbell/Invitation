const hashTag = document.getElementById("hashTag")
// const firstCont= document.getElementById("firstSection")
const bellsEl = document.getElementById("bells")
const weddingLocation = document.getElementById("invitedPersons")
const closeEl = document.getElementById("close")

bellsEl.addEventListener("click", function(){
    hashTag.style.animation="ring 1s linear 1"
    hashTag.style.animationFillMode="forwards"
    weddingLocation.style.animation="hearts 10s linear 2"
    weddingLocation.style.visibility="visible"

})

closeEl.addEventListener("click",function(){
    weddingLocation.style.visibility="hidden"
})