
var boxes = document.querySelectorAll(".box");
console.log(boxes);
var isFirstPerson = true;
var isGameFinished = false;
var gameArea = document.getElementById("gameArea");
var resulyDiv = document.getElementById("resultDiv");
var restartBtn = document.getElementById("restartBtn");
restartBtn.style.display = "none";

var horData = [
    [0, 1, 2], //00 01 02
    [3, 4, 5], //10 11 12
    [6, 7, 8] //20 21 22
];
var verData = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];
// var diaData=[
//     [0,4,8],
//     [2,4,6]
// ];

function checkHorizontal() {
    for (i = 0; i < horData.length; i++) {
        let checkArray = [
            boxes[horData[i][0]].innerHTML,
            boxes[horData[i][1]].innerHTML,
            boxes[horData[i][2]].innerHTML,
        ];
        console.log("check Array", checkArray);
        let uniqueArray = [...new Set(checkArray)];
        console.log("uniqueArray", uniqueArray);
        let uniqueArrayLength = uniqueArray.length;
        console.log("uniqueArrayLength", uniqueArrayLength);
        if (uniqueArrayLength == 1 && !uniqueArray.includes("")) {
            console.log("winner is", isFirstPerson ? "player 1" : "payer 2");
            isGameFinished = !isGameFinished;
        }

    }
}

function checkVertical() {
    for (i = 0; i < verData.length; i++) {
        let checkValue = [
            boxes[verData[i][0]].innerHTML,
            boxes[verData[i][1]].innerHTML,
            boxes[verData[i][2]].innerHTML,
        ];
        console.log("check value", checkValue);
        let uniqueValue = [...new Set(checkValue)];
        console.log("uniqueValue", uniqueValue);
        let uniqueValueLength = uniqueValue.length;
        console.log("uniqueValueLength", uniqueValueLength);
        if (uniqueValueLength == 1 && !uniqueValue.includes("")) {
            console.log("winner is", isFirstPerson ? "player 1" : "payer 2");
            isGameFinished = !isGameFinished;
        }
    }

}
function checkDiagonal() {
    var diagonalA = [boxes[0].innerHTML, boxes[4].innerHTML, boxes[8].innerHTML];
    var diagonalB = [boxes[2].innerHTML, boxes[4].innerHTML, boxes[6].innerHTML];
    let uniqueDA = [...new Set(diagonalA)];
    let uniqueDALength = uniqueDA.length;
    let uniqueDB = [...new Set(diagonalB)];
    let uniqueDBLength = uniqueDB.length;
    if (uniqueDALength == 1 && !uniqueDA.includes("")) {
        console.log('winner is', isFirstPerson ? "player 1" : "player2");
        isGameFinished = !isGameFinished;
    }
    if (uniqueDBLength == 1 && !uniqueDB.includes("")) {
        console.log('winner is', isFirstPerson ? "player 1" : "player2");
        isGameFinished = !isGameFinished;
    }

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("clicked");
        if (box.innerHTML == "" || box.innerHTML == null) {
            box.innerHTML = isFirstPerson ? "O" : "X";
            checkForWinner();
            if (isGameFinished) {
                gameArea.style.display = "none";
                resulyDiv.innerHTML = "THE WINNER IS" + (isFirstPerson ? "player 1" : "player 2");
                resulyDiv.style.display = "";
                restartBtn.style.display = "block";


            } else {
                if (isGameTie()) {
                    gameArea.style.display = "none";
                    resulyDiv.innerHTML = "THE GAME IS TIE";
                    resulyDiv.style.display = "";
                    restartBtn.style.display = "block";

                } else {
                    isFirstPerson = !isFirstPerson;

                }
            }

        }
    });
});

function isGameTie() {
    let sampleBoxData = [];
    boxes.forEach((box) => {
        sampleBoxData.push(box.innerHTML);

    });
    if (sampleBoxData.includes("")) {
        console.log(sampleBoxData);
        return false;
    } else {
        isGameFinished = true;
        return true;
    }

}

restartBtn.addEventListener("click", () => {
    gameArea.style.display = "grid";
    boxes.forEach((box) => {
        box.innerHTML = "";

    });
    resulyDiv.style.display = "none";
    restartBtn.style.display = "none";
    isFirstPerson = true;
    isGameFinished = false;

});


function checkForWinner() {
    checkHorizontal();
    checkVertical();
    checkDiagonal();
}


