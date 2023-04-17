const fields = document.querySelectorAll('input');
const rootStyles = getComputedStyle(document.documentElement);
const colorHighlight = rootStyles.getPropertyPriority("--color-highlight");


fields.forEach(function(input) {
  input.addEventListener("blur", function() {
    if (input.value != "" && !input.checkValidity()) {
      input.style.borderColor = "red";
    } else {
      input.style.borderColor = colorHighlight;
    } 
  });
});



