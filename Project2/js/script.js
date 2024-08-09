const answers_no = {
    english: [
        "No",
        "Are you sure?",
        "Are you really sure??",
        "Are you really realy sure???",
        "Think again?",
        "Don't believe in second chances?",
        "Why are you being so cold?",
        "Maybe we can talk about it?",
        "I am not going to ask again!",
        "Ok now this is hurting my feelings!",
        "You are now just being mean!",
        "Why are you doing this to me?",
        "Please give me a chance!",
        "I am begging you to stop!",
        "Ok, Let's just start over.."
    ]
};

const answers_yes = {
    english: "Yes",
};

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
const reset_button = document.getElementById('reset-button');
var i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "./images/no.gif";
        refreshBanner();
    }
    clicks++;
    // Increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45];
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random];
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    // Change button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
        // Redirect to a new page with an image
        setTimeout(() => {
            window.location.href = "index3.html"; // Change this to the actual redirect page
        }, 2000); // Delay redirection to show alert
    }
});

yes_button.addEventListener('click', () => {
    // Change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "./images/yes.gif";
    refreshBanner();

    // Hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";

    // Show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";

    // Redirect to index4.html
    if (clicks >= 4) {
        setTimeout(() => {
            window.location.href = "index4.html";
        }, 2000); // Delay for 2 seconds
    }
    else if (clicks < 4) {
        setTimeout(() => {
            window.location.href = "index5.html";
        }, 2000); // Delay for 2 seconds
    }
});

reset_button.addEventListener('click', () => {
    // Reload the page to reset the state
    window.location.reload();
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    const selectedLanguage = selectElement.value;
    language = selectedLanguage;

    // Update question heading
    const questionHeading = document.getElementById("question-heading");
    questionHeading.textContent = "Will you be my valentine?";


    // Reset yes button text
    yes_button.innerHTML = answers_yes[language];

    // Reset button text to first in the new language
    if (clicks === 0) {
        no_button.innerHTML = answers_no[language][0];
    } else {
        no_button.innerHTML = answers_no[language][clicks];
    }

    // Update success message
    const successMessage = document.getElementById("success-message");
    successMessage.textContent = "Yepppie, see you sooonnn <3 :)";
}
