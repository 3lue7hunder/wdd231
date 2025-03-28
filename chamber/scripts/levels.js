const mlModal = document.querySelector('#mlModal');
const closeModal = document.querySelector('#closeModal');
closeModal.addEventListener('click', () => mlModal.close());

const mltitle = document.querySelector('#mltitle');
const mldetails = document.querySelector('#mldetails');


const ml1Btn = document.querySelector('#ml1Btn');
ml1Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Non Profit Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
    <li>You'll get a nice plaque with the mayor's stamp on it</li>
    <li>You get to ride on a float for the 4th of July Parade</li>
    </ul>
    <p>COST: Free</p>
    `
    mlModal.showModal();
});


const ml2Btn = document.querySelector('#ml2Btn');
ml2Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Bronze Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
    <li>Discount tickets to all Bowl Games</li>
    <li>You'll get a nice plaque with the mayor's stamp on it</li>
    <li>You get to ride on a float for the 4th of July Parade</li>
    </ul>
    <p>COST: $25 Annual</p>
    `
    mlModal.showModal();
});


const ml3Btn = document.querySelector('#ml3Btn');
ml3Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Silver Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
    <li>Free soda at the snack bar</li>
    <li>Discount tickets to all Bowl Games</li>
    <li>You'll get a nice plaque with the mayor's stamp on it</li>
    <li>You get to ride on a float for the 4th of July Parade</li>
    </ul>
    <p>COST: $50 Annual</p>
    `
    mlModal.showModal();
});


const ml4Btn = document.querySelector('#ml4Btn');
ml4Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Gold Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
    <li>Home Page Spotlight</li>
    <li>Invitaion to special events</li>
    <li>Free soda at the snack bar</li>
    <li>Discount tickets to all Bowl Games</li>
    <li>You'll get a nice plaque with the mayor's stamp on it</li>
    <li>You get to ride on a float for the 4th of July Parade</li>
    </ul>
    <p>COST: $75 Annual</p>
    `
    mlModal.showModal();
});


document.querySelector('#today').value = new Date();
