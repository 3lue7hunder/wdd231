document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelector('#members'); 
  if (!cards) {
      console.error('Error: #members element not found.');
      return;
  }

  const path = './data/members.json';
  async function getMembers() {
    try {
        const response = await fetch(path);
        const data = await response.json();
        console.log(data.members);
        displayMembers(data.members);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
  }

  getMembers();

  const displayMembers = (allMembers) => {
    allMembers.forEach((member) => {
      const myName = document.createElement('h2');
      myName.textContent = member.name;
      const myAddress = document.createElement('p');
      myAddress.textContent = member.address;
      const myPhone = document.createElement('p');
      myPhone.textContent = member.phone;
      const myURL = document.createElement('p');
      myURL.innerHTML = `<a href="${member.url}" target="_blank">Website</a>`;
      const myLogo = document.createElement('img');
      myLogo.src = `./images/${member.logopath}`;
      myLogo.setAttribute('loading', 'lazy');
      myLogo.setAttribute('width', '300');
      myLogo.setAttribute('height', '200');
      myLogo.setAttribute('alt', `${member.name}`);
      const myLevel = document.createElement('p');
      switch (member.level) {
        case 1:
          myLevel.textContent = "Level = Non-Profit";
          break;
        case 2:
          myLevel.textContent = "Level = Bronze";
          break;
        case 3:
          myLevel.textContent = "Level = Silver";
          break;
        case 4:
          myLevel.textContent = "Level = Gold";
          break;
        default:
          myLevel.textContent = "Level = Unknown";
      }
      const mySection = document.createElement('section');
      mySection.appendChild(myLogo);
      mySection.appendChild(myName);
      mySection.appendChild(myAddress);
      mySection.appendChild(myPhone);
      mySection.appendChild(myURL);
      mySection.appendChild(myLevel);
      cards.appendChild(mySection);
    });
  };

  const setGrid = document.querySelector('#btnGrid');
  const setList = document.querySelector('#btnList');
  
  if (setGrid && setList) {
      setGrid.addEventListener('click', () => {
          setGrid.className = "active";
          setList.className = "";
          cards.className = 'grid';
      });

      setList.addEventListener('click', () => {
          setList.className = "active";
          setGrid.className = "";
          cards.className = 'list';
      });
  }
});
