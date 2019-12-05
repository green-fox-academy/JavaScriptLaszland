const kids = [
    { 'petName': 'Wattled crane', 'owner': 'Bryant' },
    { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
    { 'petName': 'Mynah, common', 'owner': 'Nelie' },
    { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
    { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
    { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
    { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
    { 'petName': 'Bison, american', 'owner': 'Tommie' },
    { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
    { 'petName': 'Carpet snake', 'owner': 'Veda' },
    { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
  ];

let petsList = document.getElementById('pets');

for (let i = 0; i < kids.length; i++) {
    var articleElement = document.createElement('article');
    var ownerName = document.createElement('h3');
    ownerName.innerText = kids[i].owner;
    articleElement.appendChild(ownerName);
    var petsName = document.createElement('p');
    petsName.innerText = kids[i].petName;
    articleElement.appendChild(petsName);
    petsList.appendChild(articleElement);
}