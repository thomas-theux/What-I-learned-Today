var textsArr = [];
var newText;

var currentIndex = 0;


function checkTexts() {
    newText = document.getElementById("myText").value;

    // Check if entered text is empty
    if (newText != "") {
        // Check if user already entered a line for the day
        if (textsArr[currentIndex] != undefined) {
            if (confirm('You already entered a line for today. Do you want to overwrite it?')) {
                replaceLine();
            }
        } else {
            addNewLine();
        }
    } else {
        alert("Please enter a line");
    }
}


function addNewLine() {
    document.getElementById("enteredText").innerHTML = newText;
    textsArr.push(newText);
}


function replaceLine() {
    document.getElementById("enteredText").innerHTML = newText;
    textsArr[currentIndex] = newText;
}