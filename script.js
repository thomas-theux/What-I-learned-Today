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
    
    displayLines();

    // Only for testing – should be increased automatically every day
    currentIndex++;
}


function addNewLine() {
    textsArr.push(newText);
}


function replaceLine() {
    textsArr[currentIndex] = newText;
}


function displayLines() {
    var concatedLines = "";
    var currentLine = "";
    var allLines = "";

    for (i = 0; i < textsArr.length; i++) {
        currentLine = textsArr[i] + "<br>";
        allLines = concatedLines.concat(currentLine);
        concatedLines = allLines;
    }
    
    document.getElementById("displayedLines").innerHTML = allLines;
}