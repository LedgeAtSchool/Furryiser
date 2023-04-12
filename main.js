function furryize() {
  // Get the input box element and the furrytext element
  const inputBox = document.getElementById("input-box");
  const furryText = document.getElementById("furrytext");

  // Replace "r" with "w" and "l" with "W" only if the original character is lowercase,
  // and replace "r" with "w" and "l" with "w" only if the original character is uppercase
  let text = inputBox.value.replace(/[rl]/g, (match) => {
    if (match === 'r') {
      return inputBox.value.match(/[RL]/) ? 'R' : 'w';
    } else if (match === 'l') {
      return inputBox.value.match(/[RL]/) ? 'L' : 'w';
    }
  });

  // Replace all "." characters with "~"
  text = text.replace(/\./g, "~");

  // Replace ":)" with ":3"
  text = text.replace(/:\)/g, ":3");

  // Add "owo" before each question mark
  text = text.replace(/\?/g, " owo?");

  // Add " ^w^" after each exclamation mark
  text = text.replace(/!/g, " ^w^");

  // Set the text of the furrytext element to the furryfied text
  furryText.textContent = text;
}
