document.addEventListener("DOMContentLoaded", function () {
  // Class references
  const container = document.querySelector(".container");
  const dateContainer = document.querySelector(".date");
  const timeContainer = document.querySelector(".time");
  const languageSelector = document.querySelector(".language-selector");
});

function toggleDropdown() {
  const dropdown = document.getElementById("languageDropdown");
  dropdown.classList.toggle("show");
}

// Close dropdown when clicking outside
window.onclick = function (event) {
  if (!event.target.matches(".language-btn")) {
    const dropdowns = document.getElementsByClassName("language-dropdown");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Add click handler for options
document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".language-dropdown option");
  options.forEach((option) => {
    option.addEventListener("click", function () {
      console.log("Selected language:", this.value); // User will handle in JS
      toggleDropdown();
    });
  });
});
//! my code
