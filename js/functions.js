// Hiragana and Katakana lists
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

let correctCount = 0;
let incorrectCount = 0;
let currentKana = {};
let currentType = 'hiragana'; // Default to hiragana

// Function to get a random kana character
function getRandomKana() {
    const randomIndex = Math.floor(Math.random() * kanaLists[currentType].length);
    return kanaLists[currentType][randomIndex];
}

// Function to display a random kana character
function displayRandomKana() {
    currentKana = getRandomKana();
    const kanaDisplay = document.getElementById("kanaDisplay");
    if (kanaDisplay) {
        kanaDisplay.textContent = currentKana.kana; // Set the text to the kana character
    } else {
        console.error("Kana display element not found!");
    }
}

// Function to handle user input
function handleSubmit() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const feedback = document.getElementById("feedback");
    const score = document.getElementById("score");

    if (userInput === currentKana.romaji) {
        feedback.textContent = "Correct!";
        correctCount++;
    } else {
        feedback.innerHTML = `Incorrect! The correct answer is <strong>${currentKana.romaji}</strong>.`;
        incorrectCount++;
    }

    // Update score
    score.textContent = `Correct: ${correctCount}, Incorrect: ${incorrectCount}`;

    // Clear input
    document.getElementById("userInput").value = "";

    // Display new random
    displayRandomKana();
}

// Event listener for submit button
document.getElementById("submitBtn").addEventListener("click", handleSubmit);

//Event listener for enter key
document.getElementById("userInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") { // Check if Enter key is pressed
        event.preventDefault(); // Prevent form submission if inside a form
        handleSubmit(); // Call the submit function
    }
});

// Display first random
displayRandomKana();

// Set type
function setKanaType(type) {
    console.log(`Setting kana type to: ${type}`); // console.log kana type
    currentType = type;
    correctCount = 0;
    incorrectCount = 0;
    displayRandomKana();
}

// Make function available globally
window.setKanaType = setKanaType;
