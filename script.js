var textsArr = [];

var currentIndex = 0;


function addText() {
    var newText = document.getElementById("myText").value;

    if (newText != "") {
        document.getElementById("enteredText").innerHTML = newText;
        textsArr.push(newText);

        console.log(textsArr[currentIndex]);
        currentIndex++;
    } else {
        console.log("empty");
    }
}