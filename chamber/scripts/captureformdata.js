let currentUrl = window.location.search;
console.log(currentUrl);

currentUrl = currentUrl.substring(1, currentUrl.length);
console.log(currentUrl);

let formData = currentUrl.split('&');
console.log(formData);

function show(cup) {
    let result = ''; 
    formData.forEach((element) => {
        console.log(element);
        if (element.startsWith(cup)) {
            result = decodeURIComponent(element.split('=')[1].replace(/\+/g, ' '));
        }
    });
    return result;
}
const showInfo = document.querySelector('#results')
showInfo.innerHTML = `
<p>Applicant Name: ${show('first')} ${show('last')}</p>
<p>Title: ${show('title')}
<p>Your Email: <a href="mailto:${show('email')}">${show('email')}</a> </p>
<p>Your Phone: ${show('phone')} </p>
<p>Business Name: ${show('organization')} </p>
<p>Membership Level: ${show('membership')} </p>
<p>Description: ${show('description')} </p>
<p>Form was submitted on ${show('hiddendate')}</p>
`