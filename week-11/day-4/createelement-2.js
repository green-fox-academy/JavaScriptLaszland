const planetData = [
    {
      category: 'inhabited',
      content: 'Foxes',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Whales and Rabbits',
      asteroid: true,
    },
    {
      category: 'uninhabited',
      content: 'Baobabs and Roses',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Giant monsters',
      asteroid: false,
    },
    {
      category: 'inhabited',
      content: 'Sheep',
      asteroid: true,
    },
  ];

let selectedItem = document.getElementsByTagName('ul')[0]
let selectedListElement = document.getElementsByTagName('li');
selectedItem.removeChild(selectedListElement[0]);

for (let i = 0; i < planetData.length; i++) {
    if (planetData[i].asteroid) {
        var newListelement = document.createElement('li');
        newListelement.id = planetData[i].category;
        newListelement.textContent = planetData[i].content;
        selectedItem.appendChild(newListelement); 
    } 
}

