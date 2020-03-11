let magazine = 'two times three is not four';
let node = 'two times two is four';

function checkMagazine(magazine, node) {
  let magazineArr = magazine.split(' ');
  let nodeArr = node.split(' ');
  let magazineObj = {};
  let possible = true;

  magazineArr.forEach(word => {
    magazineObj[word] ? magazineObj[word]++ : magazineObj[word] = 1;
  });

  nodeArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) {
        possible = false;
      }
    } else {
      possible = false;
    }
  });
  possible ? console.log('Yes') : console.log('No');
};

checkMagazine(magazine, node);