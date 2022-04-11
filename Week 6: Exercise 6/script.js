function updateparagraph() {
    var element = document.getElementById('paragraph');
        element.firstChild.nodeValue = 'New heading';
}
function updateH1() {
    var element = document.getElementById('pageheading');
        element.firstChild.nodeValue = 'New paragraph contents';
}

function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.addEventListener('click', updateH1);

    var element = document.getElementById('paragraph');
    element.addEventListener('click', updateparagraph);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);
