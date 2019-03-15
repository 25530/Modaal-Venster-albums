// variabele die alle content van de modale vensters heeft
const modaalContent = document.querySelectorAll(".modaalContent");

// alle modale content verwijderen uit de document
for (var i = 0; i < modaalContent.length; i++) {
	let modaalNode = modaalContent[i];
	modaalNode.parentNode.removeChild(modaalNode);
}
//nodelist van alle modale knoppen die inhoud moeten oproepen
const modaalKnoppen = document.querySelectorAll(".modaal-knop");
const modaalKnoppenArray = [];

//toekomstje node-elementen
let modaalAchtergrond = document.createElement('div');
modaalAchtergrond.className = 'modaal-achtergrond';
let modaal = document.createElement('div');
modaal.className = 'modaal';
let sluitKnop = document.createElement('button');
sluitKnop.className = 'sluit-knop';
sluitKnop.innerHTML = '&#x00D7;';

const voegInhoudToe = (event) => {
	const teller = modaalKnoppenArray.indexOf(event.target);
	console.log(teller);
	modaal.appendChild(sluitKnop);
	modaal.appendChild(modaalContent[teller]);
	modaalAchtergrond.appendChild(modaal);
	document.body.appendChild(modaalAchtergrond);
}

const sluitModaal = () => {
	modaal.innerHTML = '';
	modaalAchtergrond.innerHTML = '';
	document.body.removeChild(modaalAchtergrond);
}

sluitKnop.addEventListener('click', sluitModaal);

for(let i = 0; i < modaalKnoppen.length; i++) {
	modaalKnoppenArray.push(modaalKnoppen[i]);
	modaalKnoppen[i].addEventListener('click', voegInhoudToe);
}