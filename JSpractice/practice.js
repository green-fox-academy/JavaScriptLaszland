const _ = {};

_.each = function (list, callback) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for (let key in list) {
      callback(list[key], key, list);
    }
  }
}

_.map = function (list, callback) {
  let storage = []
  _.each(list, function(v, i, list) {
    storage.push(callback(v, i, list));
  })
  return storage;
}

_.filter = function (arr, cb) {
  // create storage
  const storage = [];
  // loop through the arr
  _.each(arr, function(item, i, list ) {
    if (cb(item, i, list)) {
      storage.push(item);
    }
  });
    // check cb returns true
    // if true push to storage
  return storage;
}

const videoData = [
  {
      name: 'Miss Scarlet',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Mrs. White',
      present: false,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Reverend Green',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Rusty',
      present: false,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Colonel Mustard',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Professor Plum',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  }
];

/* var suspects = [
  {
    name: "Rusty",
    color: "orange"
  },
  {
    name: "Miss Scarlett",
    color: "red"
  }
] */

//let [color1, color2] = [suspects[0].color, suspects[1].color];

//console.log(color1, color2);

var rooms = ['ballroom', 'bathroom', 'kitchen', 'libary'];

_.each(rooms, (room) => {
  console.log(room);
});

const weapons = ['gun', 'envelope', 'kitchen knife', 'wooden spoon'];
let breakeWeapons = _.map(weapons, (weapon) => {
  return `broken ${weapon}`
});

const suspects = _.filter(videoData, function(suspectObjects) {
  return suspectObjects.present;
});

const suspectNames = _.map(suspects, suspect => {
  return suspect.name;
});

console.log(breakeWeapons);
console.log(suspects);
console.log(suspectNames);
