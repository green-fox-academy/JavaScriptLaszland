var paragraphs = document.querySelectorAll('p');
if (paragraphs[3].classList.contains('dolphin')) {
    paragraphs[0].innerHTML = 'pear';
}

if (paragraphs[0].classList.contains('apple')) {
    paragraphs[2].innerHTML = 'dog';
}

paragraphs[0].classList.replace('apple', 'red');
paragraphs[1].classList.replace('balloon', 'nonballoon');