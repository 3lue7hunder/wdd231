//Grab the  URL for this page from the ? to the end
let currentUrl = window.location.search;
console.log(currentUrl);

// remove the ? from the beginning
currentUrl = currentUrl.substring(1,currentUrl.length)
console.log(currentUrl);

//Break the form name value pairs into an array
formData=currentUrl.split('&')
console.log(formData)

function show(cup) {
    formData.forEach((element) => {
        console.log(element)
        if (element.startsWith(cup)) {
            //result=element.split('=')[1]
            //result=result.replace("%40","@")
            result=(element.split('=')[1].replace("%40","@"))
        } // end of if
    }); // end of loop
    return(result)
}

const showInfo = document.querySelector('#results')
showInfo.innerHTML = `
<p>Application from ${show('first')} ${show('last')}</p>
<p>Business Name: ${show('organization')} </p>
<p>Your Phone: ${show('phone')} </p>
<p>Your email  <a href="mailto:${show('email')}">${show('email')}</a> </p>
<p>Form was submitted on ${show('hiddendate')}</p>
`