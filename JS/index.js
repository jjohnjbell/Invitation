const hashTag = document.getElementById("hashTag")
// const firstCont= document.getElementById("firstSection")
const bellsEl = document.getElementById("bells")
const weddingLocation = document.getElementById("invitedPersons")
const closeEl = document.getElementById("close")
const modalBtn = document.getElementById("modalBtn")
const invitationModal = document.getElementById("invitationModal")
const invitedPersons = document.getElementById("invitedPersons")
const notInvitedPersons = document.getElementById("notInvitedPersons")
const myVid1 = document.getElementById("vidPlayer1")
const myVid2 = document.getElementById("vidPlayer2")
let fname = document.getElementById("fname")
let videoCont = document.getElementById("videoCont")
let newForm = document.myForm.fname
const invitedList = ["Joshua", "Shae"]

// bellsEl.addEventListener("dblclick", function(){
//     console.log("Pressed")
//     // hashTag.style.animation="ring 1s linear 1"
//     // hashTag.style.animationFillMode="none"
//     weddingLocation.style.animation="hearts 10s linear 2"
//     // weddingLocation.style.visibility="visible"
//     weddingLocation.style.display="block"

// })


// let my = document.createElement('img')
//                     delBtn.src = "/img/close.png"
//                     delBtn.id = "closeIcon"
//                     delBtn.style.width = "18px"
//                     delBtn.style.height = "18px"
//                     delBtn.title = "Delete this item"
//                     delBtn.className = "resultSetBtn"

closeEl.addEventListener("click", function () {
    // weddingLocation.style.visibility="hidden"
    weddingLocation.style.display = "none"
})

modalBtn.addEventListener("click", function (e) {
    invitationModal.style.display = "none"
    myVid1.pause()
    myVid2.pause()
    myVid1.currentTime = 0
    myVid2.currentTime = 0
})

hashTag.addEventListener("click", function (e) {
    invitationModal.style.display = "block"
    
    // notInvitedPersons.style.display="block"
    // myVid2.style.display="block"
    // myVid2.play()

})

function verify(e){
    e.preventDefault
    if (newForm.value.toLowerCase() === "test"){
        console.log(newForm.value)
    }else{
        console.log("nope")
    }
}

