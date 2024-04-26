// Add your code here

const inputElement = document.getElementById('userInput');
const textElement = document.getElementById('textContainer');

const highlightMatchingWords = (event) => {
  // Execute the function only when the Enter key is pressed
  if (event.key !== 'Enter') {
    return;
  }

  const userInput = inputElement.value.trim().toLowerCase();
  if (!userInput) {
    return; // Do nothing if input is empty
  }

  const text = textElement.textContent;
  const words = text.split(/\b/); // Split the text into words and punctuation
  const highlightedText = words.map((word) => {
    // Check if the word matches the user input, ignoring case
    if (word.toLowerCase() === userInput) {
      return `<span class="highlight">${word}</span>`; // Highlight matching words
    }
    return word; // Return non-matching words unchanged
  });

  // Update the text container's HTML with the new highlighted text
  textElement.innerHTML = highlightedText.join('');
};

// Add an event listener to the input field to handle keyboard events
inputElement.addEventListener('keydown', highlightMatchingWords);

