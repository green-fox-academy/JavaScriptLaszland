let linkOfImage = document.querySelector('img');
linkOfImage.setAttribute('src', 'https://4cdn.hu/kraken/image/upload/s--638Fryed--/c_limit,w_1160/7MhYn8tfGoSJjAYEs.jpeg');
linkOfImage.setAttribute('width', '145');

let linkToChange = document.querySelector('a');
linkToChange.setAttribute('href', 'https://www.greenfoxacademy.com');

let buttons = document.querySelectorAll('button');
buttons[1].disabled = true;
buttons[1].innerHTML = 'Don\'t click me!';

