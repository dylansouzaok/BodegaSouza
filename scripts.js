const menuToggle = document.getElementById('menu-toggle');
const navOverlay = document.getElementById('nav-overlay');
const navLinks = document.querySelectorAll('.nav-link');

const toggleMenu = () => {
  menuToggle.classList.toggle('active');
  navOverlay.classList.toggle('active');
};

menuToggle.addEventListener('click', toggleMenu);

// Cierra el menú al hacer clic en un enlace
navLinks.forEach(link => {
  link.addEventListener('click', toggleMenu);
});

// --- Lógica del Carrusel de Vinos ---
const track = document.getElementById('wine-track');
const prevButton = document.getElementById('prev-wine');
const nextButton = document.getElementById('next-wine');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;

let currentIndex = 0;

const updateButtons = () => {
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === slides.length - 1;
};

const moveToSlide = (index) => {
  track.style.transform = 'translateX(-' + slideWidth * index + 'px)';
  currentIndex = index;
  updateButtons();
};

nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) moveToSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) moveToSlide(currentIndex - 1);
});

updateButtons(); // Inicializa el estado de los botones