const hashTag = document.getElementById("hashTag")
// const firstCont= document.getElementById("firstSection")
const bellsEl = document.getElementById("bells")

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

closeVerifyBtn.addEventListener("click", function(){
    invitationModal.style.display="none"
})

hashTag.addEventListener("click", function (e) {
    invitationModal.style.display = "block"
})

verifyBtn.addEventListener("click", function () {
})



