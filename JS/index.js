const showInvite = document.getElementById("details")
const showDetails = document.getElementById("invite")
const showInviteBtn = document.getElementById("showInviteBtn")
const showDetailsBtn = document.getElementById("showDetailsBtn")
const mainContainer = document.getElementById("mainContainer")
const card = document.getElementById("card")

//Add Event to Details Button
// showInviteBtn.addEventListener("click", function (){
//     console.log("hello")
//     // swap()
// })

// //Add Event to Invite Button
showDetailsBtn.addEventListener("click", function (){
    console.log("details")
    showInvite.style.transform="rotateY(180deg)"
    card.style.transform="rotateY(180deg)"
   // mainContainer.style.transform="rotateY(180deg)"
    
    // swap()
})

// function swap(){
//     showDetails.style.transform="rotateY(180deg)"
//     showInvite.style.transform="rotateY(180deg)"
//     card.style.transform="rotateY(180deg)"
//     mainContainer.style.transform="rotateY(180deg)"
// }

/*.mainContainer:hover .card {
    transform: rotateY(180deg);
}
.details {
    transform: rotateY(180deg);
}*/
