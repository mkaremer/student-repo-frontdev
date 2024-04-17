
// // Attach an event listener to the form element to prevent default submission and check palindrome
document.getElementById('palindromeForm').addEventListener('submit', (event) => {
    event.preventDefault();
    checkPalindrome();
  });
  
  // Function to check if the entered number is a palindrome
  const checkPalindrome = () => {
    const elem = document.getElementById('input');
    const resultDiv = document.getElementById('result');
    const numString = elem.value.trim();
  
    if (!isNaN(numString) && Number(numString) > 0) {
      const numReversed = numString.split('').reverse().join('');
  
      if (numString === numReversed) {
        resultDiv.innerHTML = 'Yes. This is a palindrome!';
        resultDiv.style.color = 'green';
      } else {
        resultDiv.innerHTML = 'No. Try again.';
        resultDiv.style.color = 'red';
      }
    } else {
      resultDiv.innerHTML = 'Please enter a valid positive number.';
    }
  };
  