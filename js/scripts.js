// Select DOM elements
const logoLink = document.querySelector('.logo');
const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');
const resumeBtns = document.querySelectorAll('.resume-btn');
const arrowRight = document.querySelector('.portpolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portpolio-box .navigation .arrow-left');
const portpolioDetails = document.querySelectorAll('.portpolio-detail');

// Toggle mobile menu
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// Function to handle active page logic
const activePage = () => {
  navLinks.forEach((link) => link.classList.remove('active'));
  sections.forEach((section) => section.classList.remove('active'));
};

// Navigation link click handler
navLinks.forEach((link, idx) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    if (!link.classList.contains('active')) {
      activePage();
      link.classList.add('active');
      setTimeout(() => {
        sections[idx].classList.add('active');
      }, 1100);
    }
    // Close mobile menu if open
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});

// Logo link click handler
logoLink.addEventListener('click', () => {
  if (!navLinks[0].classList.contains('active')) {
    activePage();
    navLinks[0].classList.add('active');
    setTimeout(() => {
      sections[0].classList.add('active');
    }, 1100);
  }
  // Close mobile menu if open
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
});

// Resume button click handler
resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const resumeDetails = document.querySelectorAll('.resume-detail');
    resumeBtns.forEach((btn) => btn.classList.remove('active'));
    btn.classList.add('active');
    resumeDetails.forEach((detail) => detail.classList.remove('active'));
    resumeDetails[idx].classList.add('active');
  });
});

// Portfolio carousel functionality
let index = 0; // Initialize the current slide index
const activePortpolio = () => {
  const imgSlide = document.querySelector('.portpolio-carousel .img-slide');
  const totalSlides = document.querySelectorAll('.portpolio-carousel .img-slide img').length;

  // Update carousel translation
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

  // Show active portfolio detail
  portpolioDetails.forEach((detail) => detail.classList.remove('active'));
  if (index >= 0 && index < totalSlides) {
    portpolioDetails[index].classList.add('active');
  }
};

// Right arrow click handler
arrowRight.addEventListener('click', () => {
  const totalSlides = document.querySelectorAll('.portpolio-carousel .img-slide img').length;
  if (index < totalSlides - 1) {
    index++;
  }
  activePortpolio();
});

// Left arrow click handler
arrowLeft.addEventListener('click', () => {
  if (index > 0) {
    index--;
  }
  activePortpolio();
});





// Select DOM elements
/*const logoLink = document.querySelector('.logo');
const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');
const resumeBtns = document.querySelectorAll('.resume-btn');
const arrowRight = document.querySelector('.portpolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portpolio-box .navigation .arrow-left');
const portpolioDetails = document.querySelectorAll('.portpolio-detail');

// Toggle mobile menu
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// Function to handle active page logic
const activePage = () => {
  navLinks.forEach((link) => link.classList.remove('active'));
  sections.forEach((section) => section.classList.remove('active'));
};

// Navigation link click handler
navLinks.forEach((link, idx) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    if (!link.classList.contains('active')) {
      activePage();
      link.classList.add('active');
      sections[idx].classList.add('active'); // Directly add active class, no delay
    }
    // Close mobile menu if open
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});

// Logo link click handler
logoLink.addEventListener('click', () => {
  if (!navLinks[0].classList.contains('active')) {
    activePage();
    navLinks[0].classList.add('active');
    sections[0].classList.add('active'); // Directly add active class, no delay
  }
  // Close mobile menu if open
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
});

// Resume button click handler
resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const resumeDetails = document.querySelectorAll('.resume-detail');
    resumeBtns.forEach((btn) => btn.classList.remove('active'));
    btn.classList.add('active');
    resumeDetails.forEach((detail) => detail.classList.remove('active'));
    resumeDetails[idx].classList.add('active');
  });
});

// Portfolio carousel functionality
let index = 0; // Initialize the current slide index
const activePortpolio = () => {
  const imgSlide = document.querySelector('.portpolio-carousel .img-slide');
  const totalSlides = document.querySelectorAll('.portpolio-carousel .img-slide img').length;

  // Update carousel translation (no delay)
  imgSlide.style.transition = 'transform 0.2s ease'; // Reduced transition time
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

  // Show active portfolio detail
  portpolioDetails.forEach((detail) => detail.classList.remove('active'));
  if (index >= 0 && index < totalSlides) {
    portpolioDetails[index].classList.add('active');
  }
};

// Right arrow click handler
arrowRight.addEventListener('click', () => {
  const totalSlides = document.querySelectorAll('.portpolio-carousel .img-slide img').length;
  if (index < totalSlides - 1) {
    index++;
  }
  activePortpolio();
});

// Left arrow click handler
arrowLeft.addEventListener('click', () => {
  if (index > 0) {
    index--;
  }
  activePortpolio();
});

*/