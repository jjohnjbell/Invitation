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
const userInputContainer = document.getElementById("userInputContainer")
const verifyBtn = document.getElementById("verifyBtn")
const closeVerifyBtn = document.getElementById("closeVerifyBtn")
const invitedList = ["joshua", "shae"]

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

modalBtn.addEventListener("click", function () {
    reset()
    console.log("pressing the X")
})

function reset() {
    invitationModal.style.display = "none"
    myVid1.pause()
    myVid2.pause()
    myVid1.currentTime = 0
    myVid2.currentTime = 0
    invitedPersons.style.display = "none"
    notInvitedPersons.style.display = "none"
    userInputContainer.style.display = "block"
    fname.value = ""
}

hashTag.addEventListener("click", function (e) {
    invitationModal.style.display = "block"
})

verifyBtn.addEventListener("click", function () {
    if (invitedList.includes(fname.value.toLowerCase())) {
        userInputContainer.style.display = "none"
        invitedPersons.style.display = "block"
        myVid1.play()

    } else {
        userInputContainer.style.display = "none"
        invitedPersons.style.display = "block"
        invitedPersons.innerHTML = ` <video id="vidPlayer2" controls>
        <source src="img/Video/notinvited.mp4" type="video/mp4">
        Your device/browser does not support
    </video>
    <button style = "z-index:4" id="modalBtn">X</button>`
    }
})

closeVerifyBtn.addEventListener("click", function () {
    reset()
})


