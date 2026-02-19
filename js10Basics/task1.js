function showTextAfterDelay(text, delay) {
  setTimeout(() => {
    console.log(text);
  }, delay);
}

showTextAfterDelay("It will be 3 seconds delay", 3000);
