function furryize() {
  // Get the input box element and the furrytext element
  const inputBox = document.getElementById("input-box");
  const furryText = document.getElementById("furrytext");

  // Replace "r" and "l" with "w", and "R" and "L" with "W"
  let text = inputBox.value.replace(/[rlRL]/g, (match) => {
    if (match === 'r' || match === 'l') {
      return 'w';
    } else if (match === 'R' || match === 'L') {
      return 'W';
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
