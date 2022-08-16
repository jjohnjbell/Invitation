const detailsBtn = document.getElementById("showDetails")
const inviteBtn = document.getElementById("showInvite")
const mainContainer = document.getElementById("mainContainer")
const card = document.getElementById("card")
const details = document.getElementById("details")
const btn = document.getElementsByTagName('button')



/*.mainContainer:hover .card {
    transform: rotateY(180deg);
}
.details {
    transform: rotateY(180deg);
}*/


//Add Event to Details Button
inviteBtn.addEventListener("click", function (){
    details.style.transform="rotateY(180deg)"
    card.style.transform="rotateY(180deg)"
// mainContainer.style.transform="rotateY(180deg)"

console.log("hello")
    
})


// //Add Event to Invite Button
detailsBtn.addEventListener("click", function (){
  console.log("details")
  details.style.transform="rotateY(180deg)"
    card.style.transform="rotateY(180deg)"
})

