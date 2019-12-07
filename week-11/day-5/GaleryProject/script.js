var africa = {
    path:  'assets/africa.jpg',
    title: 'Africa',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit amet. Cras ornare arcu dui vivamus arcu felis. Viverra accumsan in nisl nisi scelerisque.'
};

var basaar = {
    path:  'assets/basaar.jpg',
    title: 'Basaar of Jerusalem',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit amet. Cras ornare arcu dui vivamus arcu felis. Viverra accumsan in nisl nisi scelerisque.'
};

var beach = {
    path:  'assets/beach.jpg',
    title: 'Beach',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit amet. Cras ornare arcu dui vivamus arcu felis. Viverra accumsan in nisl nisi scelerisque.'
};

var desert = {
    path:  'assets/desert.jpg',
    title: 'Desert in Jordan',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit amet. Cras ornare arcu dui vivamus arcu felis. Viverra accumsan in nisl nisi scelerisque.'
};

var geishas = {
    path:  'assets/geishas.jpg',
    title: 'Geishas of Kyoto',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit amet. Cras ornare arcu dui vivamus arcu felis. Viverra accumsan in nisl nisi scelerisque.'
};

var japan = {
    path:  'assets/japan.jpg',
    title: 'Tower',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit amet. Cras ornare arcu dui vivamus arcu felis. Viverra accumsan in nisl nisi scelerisque.'
};

var montain = {
    path:  'assets/montain.jpg',
    title: 'Montain at Night',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit amet. Cras ornare arcu dui vivamus arcu felis. Viverra accumsan in nisl nisi scelerisque.'
};

var morocco = {
    path:  'assets/morocco.jpg',
    title: 'Colorful Morocco',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit amet. Cras ornare arcu dui vivamus arcu felis. Viverra accumsan in nisl nisi scelerisque.'
};
var pictureToShow = document.getElementById('p789');
const listOfPictures = [africa, basaar, beach, desert, geishas, japan, montain, morocco];
let counter = 0;

var rightArrow = document.getElementById('a222');
var leftArrow = document.getElementById('a111');

pictureToShow.setAttribute('src', listOfPictures[counter].path);

rightArrow.onclick = function increaseCounter() {
    counter++;
    if (counter >= listOfPictures.length) {
        counter = 0;
    }
    pictureToShow.setAttribute('src', listOfPictures[counter].path);
}

leftArrow.onclick = function decreaseCounter() {
    counter--;
    if (counter < 0) {
        counter = listOfPictures.length - 1;
    }
    pictureToShow.setAttribute('src', listOfPictures[counter].path);
}