const asteroidList = document.querySelector('ul.asteroids');
const newAsteroid = document.createElement('li');

newAsteroid.id = 'b555';
newAsteroid.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid);

const newAsteriod2 = document.createElement('li');
newAsteriod2.id = 'b444';
newAsteriod2.textContent = 'The Lamplighter';
asteroidList.appendChild(newAsteriod2);

let container = document.querySelectorAll('div')[0];
const newHeader = document.createElement('h2');
newHeader.id = 'b455';
newHeader.textContent = 'I can add elements to the DOM';
container.appendChild(newHeader);

let imageToAdd = document.createElement('img');
imageToAdd.id = 'b123';
imageToAdd.src = 'http://business-superstar.com/uploads/blog/google-panda-update.jpg';
container.appendChild(imageToAdd);