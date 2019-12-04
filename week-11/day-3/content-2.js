var listElements = document.getElementsByTagName('li');
var content = ['apple', 'banana', 'cat', 'dog'];
for (let i = 0; i < content.length; i++) {
    listElements[i].innerHTML = content[i];
    listElements[i].style.backgroundColor = 'limegreen'
}

