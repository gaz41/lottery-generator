// Select DOM element
const lotteryBtn = document.getElementById("lottoGenBtn");
const deleteBtn = document.getElementById("deleteNumbers");
const generateNumbers = document.getElementById("generateNumbers");
const lotterySelectedText = document.getElementById("lotterySelectedText");
const displayLotteryContainer = document.getElementById(
  "displayLotteryContainer",
);
const displayLotteryNumbers = document.getElementById("displayLotteryNumbers");
const boxes = document.querySelectorAll(".box");
const optionsForm = document.getElementById("optionsForm");
const hotpicksRange = document.getElementById("hotpicks-range");
const lotteryType = document.getElementById("lotteryType");
const backgroundBox = document.getElementById("backgroundBox");
const copyright = document.getElementById("copy");
const removeClasses = [
  "lottoBg",
  "euromillionsBg",
  "powerballBg",
  "setForLifeBg",
  "thunderballBg",
];

let msg; // Variable to hold the message
let msg2; // Variable for displaying lotto type
let range; // Range of numbers for the selected lottery
let pick; // Number of picks required
let pickSelected; // User-selected number of picks
let supRange; // Range for supplementary numbers
let supPick; // Number of supplementary picks
let supNums = false; // Flag for supplementary numbers
let pickValue = false; // Flag for user-selected pick count
let circle_colors; // Variable for circle color based on lottery type
let circle2_colors; // Variable for supplementary circle color
let circle2_suffix; // Variable for supplementary circle suffix

// Add event listeners
optionsForm.addEventListener("change", selectedOption); // Handle lottery type selection
lotteryBtn.addEventListener("click", lotteryNums); // Generate lottery numbers
deleteBtn.addEventListener("click", clear); // Clear selections
lotterySelectedText.style.display = "none"; // Initially hide results
displayLotteryContainer.style.display = "none"; // Initially hide results
boxes.forEach((box) => {
  box.addEventListener("click", pickNumber); // Handle number picking
});

boxes[0].click(); // Set the first box as the default selection

// Function to clear all selections and results
function clear() {
  lotterySelectedText.style.display = "none"; // Hide results display
  displayLotteryContainer.style.display = "none"; // Hide results display
  deleteBtn.style.display = "none"; // Hide delete button
  displayLotteryNumbers.innerHTML = ""; // Clear generated numbers display
}

// Function to handle number picking for hotpicks numbers
function pickNumber() {
  pickSelected = this.textContent; // Store the selected number
  boxes.forEach((box) => box.classList.remove("highlight")); // Remove highlight from all boxes
  this.classList.add("highlight"); // Highlight the selected box
  pickValue = true; // Set flag indicating a number has been picked
}

// Function to handle the selected lottery option
function selectedOption(event) {
  const selectedValue = event.target.value; // Get the value of the selected radio button
  let hotpicksDisplay; // Display hotpicks: "block" or "none"
  lotterySelectedText.innerHTML = ""; // Clear previous results
  displayLotteryNumbers.innerHTML = ""; // Clear previous results

  // Switch statement to handle different lottery selections
  switch (selectedValue) {
    case "LOTTO":
      range = 59; // Set range for LOTTO
      pick = 6; // Set number of picks for LOTTO
      supNums = false; // No supplementary numbers for LOTTO
      pickValue = false; // Reset pick value
      circle_colors = "circle-lotto"; // Set color for LOTTO
      hotpicksDisplay = "none"; // Hide hotpicks display
      msg = `
      <div class="description">
        <p class="description-title">LOTTO</p>
        <p>Pick <span class="msgText">${pick}</span> numbers ranging from 1 to ${range}.</p>
      </div>`;
      msg2 = `<p class="description-title">LOTTO numbers</p>`; // Message for LOTTO numbers
      backgroundBox.classList.remove(...removeClasses);
      backgroundBox.classList.add("lottoBg");
      break;
    case "EUROMILLIONS":
      range = 50;
      pick = 5;
      supRange = 12;
      supPick = 2;
      supNums = true;
      pickValue = false;
      circle_colors = "circle-euromillions";
      circle2_colors = "circle2-euromillions";
      circle2_suffix = "circle2-suffix-euromillions";
      hotpicksDisplay = "none";
      msg = `
      <div class="description">
        <p class="description-title">EUROMILLIONS</p>
        <p>Pick <span class="msgText">${pick}</span> numbers ranging from 1 to ${range} and pick <span class="msgText">${supPick}</span> LUCKY STARS ranging from 1 to ${supRange}.</p>
      </div>`;
      msg2 = `<p class="description-title">EUROMILLIONS numbers</p>`;
      backgroundBox.classList.remove(...removeClasses);
      backgroundBox.classList.add("euromillionsBg");
      break;
    case "POWERBALL":
      range = 69;
      pick = 5;
      supRange = 26;
      supPick = 1;
      supNums = true;
      pickValue = false;
      circle_colors = "circle-powerball";
      circle2_colors = "circle2-powerball";
      circle2_suffix = "circle2-suffix-powerball";
      hotpicksDisplay = "none";
      msg = `
      <div class="description">
        <p class="description-title">POWERBALL</p>
        <p>Pick <span class="msgText">${pick}</span> numbers ranging from 1 to ${range} and pick <span class="msgText">${supPick}</span> POWER BALL ranging from 1 to ${supRange}.</p>
      </div>`;
      msg2 = `<p class="description-title">POWERBALL numbers</p>`;
      backgroundBox.classList.remove(...removeClasses);
      backgroundBox.classList.add("powerballBg");
      break;
    case "SET FOR LIFE":
      range = 47;
      pick = 5;
      supRange = 10;
      supPick = 1;
      supNums = true;
      pickValue = false;
      circle_colors = "circle-set-for-life";
      circle2_colors = "circle2-set-for-life";
      circle2_suffix = "circle2-suffix-set-for-life";
      hotpicksDisplay = "none";
      msg = `
      <div class="description">
        <p class="description-title">SET FOR LIFE</p>
        <p>Pick <span class="msgText">${pick}</span> numbers ranging from 1 to ${range} and pick <span class="msgText">${supPick}</span> LIFE&nbsp;BALL ranging from 1 to ${supRange}.</p>
      </div>`;
      msg2 = `<p class="description-title">SET FOR LIFE numbers</p>`;
      backgroundBox.classList.remove(...removeClasses);
      backgroundBox.classList.add("setForLifeBg");
      break;
    case "THUNDERBALL":
      range = 39;
      pick = 5;
      supRange = 14;
      supPick = 1;
      supNums = true;
      pickValue = false;
      circle_colors = "circle-thunderball";
      circle2_colors = "circle2-thunderball";
      circle2_suffix = "circle2-suffix-thunderball";
      hotpicksRange.style.display = "none";
      msg = `
      <div class="description">
        <p class="description-title">THUNDERBALL</p>
        <p>Pick <span class="msgText">${pick}</span> numbers ranging from 1 to ${range} and pick <span class="msgText">${supPick}</span> THUNDERBALL ranging from 1 to ${supRange}.</p>
      </div>`;
      msg2 = `<p class="description-title">THUNDERBALL numbers</p>`;
      backgroundBox.classList.remove(...removeClasses);
      backgroundBox.classList.add("thunderballBg");
      break;
    case "LOTTO HOTPICKS":
      range = 59;
      pick = pickSelected;
      supNums = false;
      pickValue = false;
      circle_colors = "circle-lotto-hotpicks";
      hotpicksDisplay = "block";
      msg = `
      <div class="description">
        <p class="description-title">LOTTO HOTPICKS</p>
        <p>Pick how many numbers to match ranging from 1 to 5. Pick numbers ranging from 1 to ${range}.</p>
      </div>`;
      msg2 = `<p class="description-title">LOTTO HOTPICKS numbers</p>`;
      backgroundBox.classList.remove(...removeClasses);
      backgroundBox.classList.add("lottoBg");
      break;
    case "EUROMILLIONS HOTPICKS":
      range = 50;
      pick = pickSelected;
      supNums = false;
      pickValue = false;
      circle_colors = "circle-euromillions-hotpicks";
      hotpicksDisplay = "block";
      msg = `
      <div class="description">
        <p class="description-title">EUROMILLIONS HOTPICKS</p>
        <p>Pick how many numbers to match ranging from 1 to 5. Pick numbers ranging from 1 to ${range}.</p>
      </div>`;
      msg2 = `<p class="description-title">EUROMILLIONS HOTPICKS numbers</p>`;
      backgroundBox.classList.remove(...removeClasses);
      backgroundBox.classList.add("euromillionsBg");
      break;
    default:
      console.log("No option selected");
  }

  hotpicksRange.style.display = hotpicksDisplay; // Show or hide hotpicks range
  lotteryType.innerHTML = msg; // Update the lotteryType text
  generateNumbers.style.display = "block"; // Show Generate Numbers button
  lotterySelectedText.style.display = "none"; // Hide results
  displayLotteryContainer.style.display = "none"; // Hide results
  deleteBtn.style.display = "none"; // Hide delete button
}

// Function to generate random lottery numbers
function genLotteryNumbers(numsRange, numsCount) {
  window.location.href = "#lotterySelectedText"; // scroll to see results
  const min = 1; // Range starts from 1
  const nums = new Set(); // Use a Set to ensure unique numbers
  while (nums.size < numsCount) {
    const randomNum = Math.floor(Math.random() * (numsRange - min + 1)) + min; // Generate random number
    nums.add(randomNum); // Add number to the set
  }
  return Array.from(nums).sort((a, b) => a - b); // Return sorted array of numbers
}

// Function to generate lottery numbers based on user selection
function lotteryNums() {
  lotterySelectedText.style.display = "block"; // Show results display
  displayLotteryContainer.style.display = "block"; // Show results display
  deleteBtn.style.display = "block"; // Show delete button
  const count = pickValue ? pickSelected : pick; // Determine count of numbers to pick

  // Call function to generate lottery numbers
  const res = genLotteryNumbers(range, count); // Generate lottery numbers
  lotterySelectedText.innerHTML = msg2; // Display message for the type of lottery

  // Display generated lottery numbers
  res.forEach(
    (num) =>
      (displayLotteryNumbers.innerHTML += `<span class="circle ${circle_colors}">${num}</span>`),
  );
  if (!supNums) {
    displayLotteryNumbers.innerHTML += `<hr class="line" />`; // Add line if no supplementary numbers
  }

  // Check if supplementary numbers are needed
  if (supNums) {
    const res2 = genLotteryNumbers(supRange, supPick); // Generate supplementary numbers

    // Check if EUROMILLIONS AND media queries less than 570px - if true start a new line
    supPick === 2 && window.innerWidth <= 570
      ? (displayLotteryNumbers.innerHTML += `<div class="breakLn"></div>`)
      : "";

    res2.forEach(
      (num) =>
        (displayLotteryNumbers.innerHTML += ` <span class="circle2 ${circle2_colors}">${num} <span class="circle2-suffix ${circle2_suffix}"></span></span>`),
    );
    displayLotteryNumbers.innerHTML += `<hr class="line" />`;
  }
}

// Dynamically generate copyright information
copyright.innerHTML =
  "Copyright &copy; " +
  new Date().getFullYear() +
  ` <a href="https://www.gaz41.com">gaz41.com</a>. <span class="copy2">All Rights Reserved</span>`;

// uncheck ALL radio buttons
// document.querySelectorAll('input[type="radio"]').forEach((radio) => {
//   radio.checked = false;
// });
