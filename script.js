
// script.js
document.getElementById('questionForm').addEventListener('submit', handleFormSubmit);

const questions = [
    { label: "Full Name", key: "fullName" },
    { label: "Date of Birth (YYYY-MM-DD)", key: "dob" },
    { label: "City of Birth", key: "cityOfBirth" },
    { label: "Time of Birth (HH:MM)", key: "timeOfBirth" }
];

let currentQuestionIndex = 0;
let responses = {};

function handleFormSubmit(event) {
    event.preventDefault();
    const answer = document.getElementById('answer').value;
    responses[questions[currentQuestionIndex].key] = answer;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        document.getElementById('questionLabel').textContent = questions[currentQuestionIndex].label;
        document.getElementById('answer').value = '';
        document.getElementById('answer').setAttribute('type', 'text');
        if (questions[currentQuestionIndex].key === 'dob') {
            document.getElementById('answer').setAttribute('type', 'date');
        }
    } else {
        displayAstrologicalSign();
    }
}

function displayAstrologicalSign() {
    const dob = new Date(responses.dob);
    const sign = calculateAstrologicalSign(dob);
    document.getElementById('formContainer').innerHTML = `<p>Your astrological sign is ${sign}.</p>`;
}

function calculateAstrologicalSign(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Aries";
    }
    // Add more conditions for other signs
    return "Unknown";
}
