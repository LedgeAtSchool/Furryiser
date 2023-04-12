function furryize() {
  // Get the input box element and the furrytext element
  const inputBox = document.getElementById("input-box");
  const furryText = document.getElementById("furrytext");

  // Replace all "r" and "l" characters with "w"
  let text = inputBox.value.replace(/[rl]/gi, (match) => match === 'r' ? 'w' : 'W');

  // Replace all "." characters with "~"
  text = text.replace(/\./g, "~");

  // Replace ":)" with ":3"
  text = text.replace(/:\)/g, ":3");

  // Add "owo" before each question mark
  text = text.replace(/\?/g, " owo?");

  // Add " nwn" after each exclamation mark
  text = text.replace(/!/g, " nwn!");

  // Capitalize the "w"s if the original text had capital "R"s or "L"s
  text = inputBox.value.replace(/[rl]/g, (match) => match === 'r' ? 'w' : 'W');

  // Set the text of the furrytext element to the furryfied text
  furryText.textContent = text;
}
