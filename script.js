
const showFormBtn = document.getElementById('showFormBtn');
const popupForm = document.getElementById('popupForm');
const closeFormBtn = document.getElementById('closeFormBtn');
const toTop = document.querySelector(".back-top");

// Show the form when the button is clicked
showFormBtn.addEventListener('click', () => {
    popupForm.classList.add('show');
});

// Hide the form when the close button is clicked
closeFormBtn.addEventListener('click', () => {
    popupForm.classList.remove('show');
});

// Hide the form if the user clicks outside of the form container
window.addEventListener('click', (event) => {
    if (event.target === popupForm) {
        popupForm.classList.remove('show');
    }
});

// back to the top
window.addEventListener("scroll", () => {
  if (pageYOffset > 75) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

