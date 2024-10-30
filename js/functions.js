// hiragana and Katakana lists
const kanaLists = {
    hiragana: [
        { kana: "あ", romaji: "a" },
        { kana: "い", romaji: "i" },
        { kana: "う", romaji: "u" },
        { kana: "え", romaji: "e" },
        { kana: "お", romaji: "o" },
        { kana: "か", romaji: "ka" },
        { kana: "き", romaji: "ki" },
        { kana: "く", romaji: "ku" },
        { kana: "け", romaji: "ke" },
        { kana: "こ", romaji: "ko" },
        { kana: "さ", romaji: "sa" },
        { kana: "し", romaji: "shi" },
        { kana: "す", romaji: "su" },
        { kana: "せ", romaji: "se" },
        { kana: "そ", romaji: "so" },
        { kana: "た", romaji: "ta" },
        { kana: "ち", romaji: "chi" },
        { kana: "つ", romaji: "tsu" },
        { kana: "て", romaji: "te" },
        { kana: "と", romaji: "to" },
        { kana: "な", romaji: "na" },
        { kana: "に", romaji: "ni" },
        { kana: "ぬ", romaji: "nu" },
        { kana: "ね", romaji: "ne" },
        { kana: "の", romaji: "no" },
        { kana: "は", romaji: "ha" },
        { kana: "ひ", romaji: "hi" },
        { kana: "ふ", romaji: "fu" },
        { kana: "へ", romaji: "he" },
        { kana: "ほ", romaji: "ho" },
        { kana: "ま", romaji: "ma" },
        { kana: "み", romaji: "mi" },
        { kana: "む", romaji: "mu" },
        { kana: "め", romaji: "me" },
        { kana: "も", romaji: "mo" },
        { kana: "や", romaji: "ya" },
        { kana: "ゆ", romaji: "yu" },
        { kana: "よ", romaji: "yo" },
        { kana: "ら", romaji: "ra" },
        { kana: "り", romaji: "ri" },
        { kana: "る", romaji: "ru" },
        { kana: "れ", romaji: "re" },
        { kana: "ろ", romaji: "ro" },
        { kana: "わ", romaji: "wa" },
        { kana: "を", romaji: "wo" },
        { kana: "ん", romaji: "n" },
    ],
    katakana: [
        { kana: "ア", romaji: "a" },
        { kana: "イ", romaji: "i" },
        { kana: "ウ", romaji: "u" },
        { kana: "エ", romaji: "e" },
        { kana: "オ", romaji: "o" },
        { kana: "カ", romaji: "ka" },
        { kana: "キ", romaji: "ki" },
        { kana: "ク", romaji: "ku" },
        { kana: "ケ", romaji: "ke" },
        { kana: "コ", romaji: "ko" },
        { kana: "サ", romaji: "sa" },
        { kana: "シ", romaji: "shi" },
        { kana: "ス", romaji: "su" },
        { kana: "セ", romaji: "se" },
        { kana: "ソ", romaji: "so" },
        { kana: "タ", romaji: "ta" },
        { kana: "チ", romaji: "chi" },
        { kana: "ツ", romaji: "tsu" },
        { kana: "テ", romaji: "te" },
        { kana: "ト", romaji: "to" },
        { kana: "ナ", romaji: "na" },
        { kana: "ニ", romaji: "ni" },
        { kana: "ヌ", romaji: "nu" },
        { kana: "ネ", romaji: "ne" },
        { kana: "ノ", romaji: "no" },
        { kana: "ハ", romaji: "ha" },
        { kana: "ヒ", romaji: "hi" },
        { kana: "フ", romaji: "fu" },
        { kana: "ヘ", romaji: "he" },
        { kana: "ホ", romaji: "ho" },
        { kana: "マ", romaji: "ma" },
        { kana: "ミ", romaji: "mi" },
        { kana: "ム", romaji: "mu" },
        { kana: "メ", romaji: "me" },
        { kana: "モ", romaji: "mo" },
        { kana: "ヤ", romaji: "ya" },
        { kana: "ユ", romaji: "yu" },
        { kana: "ヨ", romaji: "yo" },
        { kana: "ラ", romaji: "ra" },
        { kana: "リ", romaji: "ri" },
        { kana: "ル", romaji: "ru" },
        { kana: "レ", romaji: "re" },
        { kana: "ロ", romaji: "ro" },
        { kana: "ワ", romaji: "wa" },
        { kana: "ヲ", romaji: "wo" },
        { kana: "ン", romaji: "n" },
    ]
};

// scores from localstorage
let correctCount = parseInt(localStorage.getItem('correctCount')) || 0;
let incorrectCount = parseInt(localStorage.getItem('incorrectCount')) || 0;

updateScoreDisplay();

// update the score display
function updateScoreDisplay() {
    const score = document.getElementById("score");
    if (score) {
        score.textContent = `Correct: ${correctCount}, Incorrect: ${incorrectCount}`;
    }
}

// save score
function saveScores() {
    localStorage.setItem('correctCount', correctCount);
    localStorage.setItem('incorrectCount', incorrectCount);
}

let currentKana = {};
let currentType = 'hiragana'; // Default to hiragana

// get random kana 
function getRandomKana() {
    const randomIndex = Math.floor(Math.random() * kanaLists[currentType].length);
    return kanaLists[currentType][randomIndex];
}

// display random kana
function displayRandomKana() {
    const kanaDisplay = document.getElementById("kanaDisplay");
    currentKana = getRandomKana();
    kanaDisplay.textContent = currentKana.kana;
}


// input
function handleSubmit() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const feedback = document.getElementById("feedback");

    if (userInput === currentKana.romaji) {
        feedback.textContent = "Correct!";
        correctCount++;
    } else {
        feedback.innerHTML = `Incorrect! The correct answer is <strong>${currentKana.romaji}</strong>.`;
        incorrectCount++;
    }

    // save score
    saveScores();

    // update score
    updateScoreDisplay();

    // clear input
    document.getElementById("userInput").value = "";

    // display new random kana
    displayRandomKana();
}

// submit button
document.getElementById("submitBtn").addEventListener("click", handleSubmit);

// enter key
document.getElementById("userInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleSubmit();
    }
});

// first random kana
displayRandomKana();

// type
function setKanaType(type) {
    console.log(`Kana type: ${type}`);
    currentType = type;

    // reset localstorage score
    saveScores();

    displayRandomKana();
}

// sets kana type
window.setKanaType = setKanaType;
