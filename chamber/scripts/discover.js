fetch('./data/places.json')
    .then(response => response.json())
    .then(places => displayItems(places))
    .catch(error => console.error("Error loading places:", error));

const showHere = document.querySelector("#allplaces");

function displayItems(places) {
    places.forEach(x => {
        const thecard = document.createElement('div');

        const thephoto = document.createElement('img');
        thephoto.src = `images/${x.photo_link}`;
        thephoto.alt = x.name;
        thecard.appendChild(thephoto);

        const thetitle = document.createElement('h2');
        thetitle.innerText = x.name;
        thecard.appendChild(thetitle);

   
        const theaddress = document.createElement('address');
        theaddress.innerText = x.address;
        thecard.appendChild(theaddress);
      
        const thedesc = document.createElement('p');
        thedesc.innerHTML = `${x.description} <br><br>COST:  ${x.cost}`;
        thecard.appendChild(thedesc);

        const thelearn = document.createElement('button');
        thelearn.innerText = "Learn More";
        thecard.appendChild(thelearn);

        showHere.appendChild(thecard);
    });
}
