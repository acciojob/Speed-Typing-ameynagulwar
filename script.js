//your JS code here. If required.
// Fetch random quote from the API
function fetchRandomQuote() {
  fetch("http://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      document.getElementById("quote").textContent = data.content;
    });
}

// Check typed text with the actual quote
function checkTyping() {
  const quoteInput = document.getElementById("quoteInput");
  const quoteDisplay = document.getElementById("quote");
  const timer = document.querySelector(".timer");
  
  // Remove any existing event listener
  quoteInput.removeEventListener("input", checkTyping);
  
  if (quoteInput.value === quoteDisplay.textContent) {
    quoteInput.style.borderColor = "green";
    quoteInput.value = ""; // Clear input area
    
    // Reset timer after 3 seconds
    setTimeout(() => {
      timer.textContent = "0";
      fetchRandomQuote();
      quoteInput.style.borderColor = ""; // Remove green border
      quoteInput.addEventListener("input", checkTyping);
    }, 3000);
  } else {
    quoteInput.style.borderColor = "red";
  }
}

// Initialize the application
function init() {
  const quoteInput = document.getElementById("quoteInput");
  
  // Fetch random quote when the page loads
  fetchRandomQuote();
  
  // Event listener for typing
  quoteInput.addEventListener("input", checkTyping);
  
  // Timer interval
  let time = 0;
  setInterval(() => {
    time++;
    document.querySelector(".timer").textContent = `${time}`;
  }, 1000);
}

// Call the initialization function
init();
