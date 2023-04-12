function furryize() {
  // Get the input box element and the furrytext element
  const inputBox = document.getElementById("input-box");
  const furryText = document.getElementById("furrytext");

  // Replace all "r" and "l" characters with "w"
  let text = inputBox.value.replace(/[rl]/gi, "w");

  // Replace all "." characters with "~"
  text = text.replace(/\./g, "~");

  // Replace ":)" with ":3"
  text = text.replace(/:\)/g, ":3");

  // Add "owo" before each question mark
  text = text.replace(/\?/g, " owo?");

  // Add " nwn" after each exclamation mark
  text = text.replace(/!/g, " nwn!");

  // Set the text of the furrytext element to the furryfied text
  furryText.textContent = text;
}
