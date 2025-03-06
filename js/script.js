//const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
//Function to click services to  show all detail
const sections = document.querySelectorAll('section');

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
})

/*const activePage = () => {
  const barsBox =document.querySelector('.bars-box');

  navLinks.forEach(links => {
    link.classList.remove('active');

  });

  barsBox .classList.remove('active');
  setTimeout(() => {
    barsBox.classList.add('active')

  },1100);



}*/

//Major Problem Clickk One by one Home Services Resume Portpolio Contact
const navLinks = document.querySelectorAll('header nav a'); // Select all navigation links


/*const header = document.querySelector('header');
const barsBox = document.querySelector('.bars-box'); // Select the bars background


header.classList.remove('active');
setTimeout(() => {
  header.classList.add('active');
}, 1100);

// Function to handle active page logic
/*const activePage = (clickedLink) => {
  // Remove 'active' class from all links
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });

  // Add 'active' class to the clicked link
  clickedLink.classList.add('active');

  // Reset bars animation
  barsBox.classList.remove('active');
  setTimeout(() => {
    barsBox.classList.add('active');
  }, 1100);
};

// Add click event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    activePage(link); // Call the activePage function with the clicked link
  });
});*/

const activePage = (clickedLink) => {
const header = document.querySelector('header');
const barsBox = document.querySelector('.bars-box'); // Select the bars background


/*const activePage = () => {
  // Remove 'active' from all navigation links
  navLinks.forEach((link) => link.classList.remove('active'));

  // Remove 'active' from all sections
  sections.forEach((section) => section.classList.remove('active'));
};
*/


header.classList.remove('active');
setTimeout(() => {
  header.classList.add('active');
}, 1100);



// Function to handle active page logic
//const activePage = (clickedLink) => {

  // Remove 'active' class from all links
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });

   // Remove 'active' from all sections
   /*sections.forEach((section) => section.classList.remove('active'));*/


  // Add 'active' class to the clicked link
  //clickedLink.classList.add('active');

  // Reset bars animation
  barsBox.classList.remove('active');
  setTimeout(() => {
    barsBox.classList.add('active');
  }, 1100);
////Function to click services to  show all detail
  sections.forEach((section) => {
    section.classList.remove('active');
  });

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

// Add click event listener to each navigation link
/*navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    activePage(link); // Call the activePage function with the clicked link
  });
});*/



/*navLinks.forEach(link, idx) => {
  link.addEventListener(`click`, () => {
    if(!link.classList.contains('active')) {
      activePage();
      link.classList.add('active');
    }

  });
});*/


navLinks.forEach((link, idx) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active')) {
      activePage();
      link.classList.add('active');
//Function to click services to  show all detail
      setTimeout(() => {
        sections[idx].classList.add('active');
      }, 1100);
    }
  });
});

logoLink.addEventListener(`click`, () => {
  if(!navLinks[0].classList.contains('active')) {
    activePage();
    navLinks[0].classList.add('active');
//Function to click services to  show all detail
    setTimeout(() => {
      sections[0].classList.add('active');
    }, 1100);
  }
});

/*logoLink.addEventListener(`click`, () => {
  // Check if the first navigation link is not active
  if (!navLinks[0].classList.contains('active')) {
    // Reset the current active state
    activePage();
    
    // Add 'active' class to the first navigation link
    navLinks[0].classList.add('active');

    // Function to activate the corresponding section
    setTimeout(() => {
      // Add 'active' class to the first section
      sections[0].classList.add('active');
    }, 1100); // Wait for the animation or delay to complete
  }
});
*/


const resumeBtns = document.querySelectorAll(`.resume-btn`);

/* click on each button one by one*/
/*resumeBtns.forEach((btn,idx) => {
  btn.addEventListener(`click`,() => {
    //code for resume-detail
    const resumeDetails=document.querySelectorAll(`.resume-detail`)

    resumeBtns.forEach(btn => {
      btn.classList.remove('active');
     
    });
    btn.classList.add('active');
   //code for resume-detail click on education show My Education
    resumeDetails.forEach(detail => {
      detail.classList.remove('active');
     
    });
    resumeDetails[idx].classList.add(`active`);
  });
});
*/


resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const resumeDetails = document.querySelectorAll('.resume-detail');
    resumeBtns.forEach((btn) => btn.classList.remove('active'));
    btn.classList.add('active');
    resumeDetails.forEach((detail) => detail.classList.remove('active'));
    resumeDetails[idx].classList.add('active');
  });
});


/*make prtpolio arrow functionable*/

/*const arrowRight =document.querySelector('.portpolio-box .navigation .arrow-right')
const arrowLeft =document.querySelector('.portpolio-box .navigation .arrow-left')

let index=0;

const activePortpolio = () => {
  const imgSlide = document.querySelector('.portpolio-carousel .img-slide');
  imgSlide.style.transform=`translateX(calc(${index* -100}%-${index * 2}rem))`;
}

arrowRight.addEventListener('click', () => {
  if(index<4) {
    index++;
  } else {
    index=5;
  }
  activePortpolio();
});

arrowLeft.addEventListener('click', () => {
  if(index>1) {
    index--;
  } else {
    index=0;
  }
  activePortpolio();
});
*/

const arrowRight = document.querySelector('.portpolio-box .navigation .arrow-right');

let index = 0; // Initialize the current slide index

// Function to update the carousel based on the current index
const activePortpolio = () => {
  const imgSlide = document.querySelector('.portpolio-carousel .img-slide');
 /* function for propertyDetails*/
  const portpolioDetails=document.querySelectorAll('.portpolio-detail')

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
/* code to show all project one by one*/
  portpolioDetails.forEach(detail => {
    detail.classList.remove('active');
  });
  portpolioDetails[index].classList.add('active');

};

// Event listener for the right arrow
arrowRight.addEventListener('click', () => {
  const totalSlides = document.querySelectorAll('.portpolio-carousel .img-slide img').length; // Total slides
  if (index < totalSlides - 1) { // Ensure index does not exceed the last slide
    index++;
  } else {
   /* index = 0; // Loop back to the first slide*/
    index = totalSlides - 1;
  }
  activePortpolio();
});


const arrowLeft = document.querySelector('.portpolio-box .navigation .arrow-left');

arrowLeft.addEventListener('click', () => {
  const totalSlides = document.querySelectorAll('.portpolio-carousel .img-slide img').length; // Total slides
  if (index > 0) { // Ensure index does not go below the first slide
    index--;
  } /*else {
    index = totalSlides - 1; // Loop back to the last slide
  }*/
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

*/
