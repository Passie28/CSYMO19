//display the text the user enters in an alert message
function displayMyText() {
    var element = document.getElementById('myTextbox');
    var div = document.getElementById('result');
    div.firstChild.nodeValue = element.value;
}

//detecting the actual clicking on the button
function detectClicking() {
    var element = document.getElementById('myButton');
    element.addEventListener('click', displayMyText);
}

//detect the clicking on the button when the page is loaded
document.addEventListener('DOMContentLoaded', detectClicking);