const hashTag = document.getElementById("hashTag")
// const firstCont= document.getElementById("firstSection")
const bellsEl = document.getElementById("bells")
const weddingLocation = document.getElementById("invitedPersons")
const closeEl = document.getElementById("close")
const modalBtn = document.getElementById("modalBtn")
const invitationModal = document.getElementById("invitationModal")
const myVid = document.getElementsByTagName("video")

// bellsEl.addEventListener("dblclick", function(){
//     console.log("Pressed")
//     // hashTag.style.animation="ring 1s linear 1"
//     // hashTag.style.animationFillMode="none"
//     weddingLocation.style.animation="hearts 10s linear 2"
//     // weddingLocation.style.visibility="visible"
//     weddingLocation.style.display="block"

// })

closeEl.addEventListener("click",function(){
    // weddingLocation.style.visibility="hidden"
    weddingLocation.style.display="none"
})

modalBtn.addEventListener("click", function(){
    invitationModal.style.display="none"
    myVid.pause()
})