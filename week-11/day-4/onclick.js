var button = document.getElementsByTagName('button')[0];
let isOff = 1;
const turnTheParty = document.getElementsByTagName('body')[0]
button.onclick = () => {
    if (isOff % 2) {
        turnTheParty.classList.add('party');
        isOff++;
    } else {
        turnTheParty.classList.remove('party');
        isOff++;
    }
}

