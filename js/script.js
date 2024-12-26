src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"
 src="https://kit.fontawesome.com/58a810656e.js"
 crossorigin="anonymous"

 var typeData = new Typed(".role", {
    strings: [
      "Web Developer",          
      "Coder",
      "Frontend Developer",
      "Problem-Solver",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });

  function refreshPage() {
    location.reload();
}

const navMenu = document.getElementById('nav-menu');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-menu');

function toggleMenu() {
    navMenu.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

// Close menu when clicking on any menu item
const navItems = document.querySelectorAll('.nav-items div');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Handle theme toggle click separately to prevent menu from closing
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', (e) => {
    e.stopPropagation();
});


// contact form
const scriptURL = "https://script.google.com/macros/s/AKfycbz6qNOxwEQNWCRHz1FC-fSClV6BLp3navxJ7jGP1Xp06RWGJx8NtA2AKghJRP-mo-U/exec";
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, {method: 'POST', body: new FormData(form) })

.then(response => alert("Thanks for Contacting us..! I will contact You Soon..."))
.catch(error => console.error('Error!', error.message))
form.reset()
})