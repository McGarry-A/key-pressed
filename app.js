const body = document.body
const eventKeyLabel = document.getElementById('eventKey')
const eventWhichLabel = document.getElementById('eventWhich')
const eventCodeLabel = document.getElementById('eventCode')
const mainHeading = document.body.querySelector('h1');
const cards = document.getElementById('cards')

body.addEventListener('keypress',(e)=>{
    
    eventCodeLabel.textContent = e.code
    eventKeyLabel.textContent = e.key
    eventWhichLabel.textContent = e.which
    mainHeading.textContent = e.which

    cards.style.display='flex'
});
