function changeText() {
    const textsArray = [
        "Welcome to SIT725",
        "Learning JavaScript",
        "Practising Git",
        "My First Webpage",
        "Week 1 Workshop"
    ];

    const number = getRandomNumberBetween(
        0,
        textsArray.length - 1
    );

    console.log("Index:", number);

    document.getElementById("heading").textContent =
        textsArray[number];
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

