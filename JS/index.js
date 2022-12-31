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
const closingBtn=document.getElementById("closingBtn")
const invitedList = ["marie", "mernel", "shaunice", "junior", "princess", "rhonda", "andre", "radcliffe", "dawn", "rupert", "paulette", "nova", "clairlyn", "pauline", "sheldon", "codea", "jeffrey", "luke", "trudy", "shara", "andrew", "angelita", "ravenne"]

closeVerifyBtn.addEventListener("click", function () {
    invitationModal.style.display = "none"
})

hashTag.addEventListener("click", function (e) {
    invitationModal.style.display = "block"
})

verifyBtn.addEventListener("click", function () {
    
    if (invitedList.includes(fname.value.toLowerCase())){
        invitedPersons.style.display="block"
        myVid1.autoplay=true
        myVid1.style.display="inline-block"
        myVid1.currentTime=0
        myVid1.play()

        myVid2.style.display="none"
        myVid2.currentTime=0
        myVid2.pause()
        userInputContainer.style.display="none"
    }else{
        invitedPersons.style.display="block"
        myVid2.autoplay=true
        myVid2.play()
        myVid2.style.display="inline-block"
        myVid2.currentTime=0

        myVid1.style.display="none"
        myVid1.pause()
        myVid1.currentTime=0
        userInputContainer.style.display="none"

    }

    fname.value=""

})

closingBtn.addEventListener("click", function(){
    invitationModal.style.display="none"
    invitedPersons.style.display="none"
    myVid1.pause()
    myVid1.currentTime=0
    myVid2.pause()
    myVid2.currentTime=0
    userInputContainer.style.display="block"

})




