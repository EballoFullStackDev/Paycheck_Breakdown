document.getElementById('paycheckForm').addEventListener('submit', (e) => {
e.preventDefault();
const grossIncome = document.getElementById('grossIncome').value;
let paySchedule = document.getElementById('paySchedule').value;
switch(paySchedule){
    case 'weekly':
    paySchedule = 52; 
    break;
    case 'biweekly':
    paySchedule = 26;
    break;
    case 'monthly':
    paySchedule = 12; 
    break;
    paySchedule = 24;
    break;
}
const annualGrossIncome = grossIncome * paySchedule;
const annualHousingCost = annualGrossIncome *.35
const housingPerCheck = annualHousingCost/12
const resultBox = document.getElementById('resultBox')
const resultHeader = document.createElement('h2')
resultHeader.innerHTML = `You make $${parseFloat(annualGrossIncome).toLocaleString('en')} after taxes a year`
const housingParagraph = document.createElement('p')
housingParagraph.innerHTML = `Housing should be 35% gross income. Allocate $${parseFloat(annualHousingCost).toLocaleString('en') } for per year or  
$${parseFloat(housingPerCheck).toLocaleString('en')} per month. Including Rent, Maintenance, Taxes, etc...`


resultBox.innerHTML = ''
resultBox.appendChild(housingParagraph)
})

