// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

const userInput1 = document.querySelector("#userInput1");
const copyButton = document.querySelector("#copy");
const outputArea = document.querySelector(".output");

copyButton.addEventListener("click", () => {
  outputArea.textContent = userInput1.value;
});

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event
// INSERT under Exercise #2

const userInput2 = document.querySelector("#userInput2");
const outputArea2 = document.querySelector("#output2");

userInput2.addEventListener("input", () => {
  outputArea2.textContent = userInput2.value;
});
