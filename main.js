function furryize() {
  // Get the input box element and the furrytext element
  const inputBox = document.getElementById("input-box");
  const furryText = document.getElementById("furrytext");

  // Replace "r" and "l" with "w", and "R" and "L" with "W"
  let text = inputBox.value.replace(/[rl]/g, "w").replace(/[RL]/g, "W");

  // Replace all "." characters with " uwu~"
  text = text.replace(/\./g, " uwu~");

  // Replace ":)" with ":3"
  text = text.replace(/:\)/g, ":3");

  // Add "owo" before each question mark
  text = text.replace(/\?/g, " owo?");

  // Replace ";)" with ";3"
  text = text.replace(/;/)g, ";3");

  // Set the text of the furrytext element to the furryfied text
  furryText.textContent = text;
}
// Why tf is this missing???
