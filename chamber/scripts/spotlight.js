const spotlight = document.querySelector('#spot');
const path = './data/members.json';


const memberLevels = {
    3: "Silver Member",
    4: "Gold Member"
};

async function getMembers() {
    const response = await fetch(path);
    const data = await response.json();

   
    const selectedMembers = data.members.filter(member => member.level === 3 || member.level === 4);
    
    displayMembers(selectedMembers);
}

getMembers();

const displayMembers = (myArray) => {
    let count = Math.min(3, myArray.length); 
    for (let step = 0; step < count; step++) {
        const random = Math.floor(Math.random() * myArray.length);
        let picked = myArray[random];
        myArray.splice(random, 1);
        showOnPage(picked);
    }
};

function showOnPage(x) {
    const sl = document.createElement('div');

    const name = document.createElement('h2');
    name.textContent = x.name;
    sl.appendChild(name);

    const photo = document.createElement('img');
    photo.src = `images/${x.logopath}`;
    photo.alt = x.name;
    sl.appendChild(photo);

    const phone = document.createElement('p');
    phone.textContent = x.phone;
    sl.appendChild(phone);

    const address = document.createElement('p');
    address.textContent = x.address;
    sl.appendChild(address);

    const link = document.createElement('a');
    link.href = x.url;
    link.textContent = "Visit Website";
    link.target = "_blank";
    sl.appendChild(link);

    const level = document.createElement('p');
    level.textContent = `Membership Level: ${memberLevels[x.level] || "Unknown"}`;
    sl.appendChild(level);

    spotlight.appendChild(sl);
}
