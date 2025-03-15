import { places } from '../data/places.mjs'
console.log(places);



//---------- GRAB A REFERENCE TO THE DIVISION WHERE WE DISPLAY THE ITEMS 
const showHere = document.querySelector("#allplaces")


// ---------------- LOOP THROUGH THE ARRAY OF JSON ITEMS 
function displayItems(places) {
  places.forEach(x => {
    //build the card element
    const thecard = document.createElement('div')
    //build the photo element
    const thephoto = document.createElement('img')
    thephoto.src = `images/${x.photo_link}`
    thephoto.alt = x.name
    thecard.appendChild(thephoto)
    //build the title element
    const thetitle = document.createElement('h2')
    thetitle.innerText = x.name
    thecard.appendChild(thetitle)
    //build the address element
    const theaddress = document.createElement('address')
    theaddress.innerText = x.address
    thecard.appendChild(theaddress)
    //build the description element
    const thedesc = document.createElement('p')
    thedesc.innerHTML = `${x.description} <br><br>COST:  ${x.cost}`
    thecard.appendChild(thedesc)
    //build the button
    const thelearn = document.createElement('button')
    thelearn.innerText = "Learn More"
    thecard.appendChild(thelearn)


    showHere.appendChild(thecard)
  }) // end loop
} // end function

// START DISPLAYING ALL ITEMS IN THE JSON FILE
displayItems(places)


// POPULATE THE DIALOG WITH INFORMATION WHEN IMAGE IS CLICKED
function showStuff(x) {
  mytitle.innerHTML = x.name
  myinfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`
  mydialog.showModal();
}