/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/
// Define Global Variables


const navBar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// create menu dynamically
  let menu = () =>{
    for (let i = 0; i < sections.length; i++) {
    navBar.innerHTML += `<li class='menu__link'><a href='#${sections[i].id}'>${sections[i].dataset.nav}</a></li>`;
    }
  }

// smooth scroll to sections from nav
  let navScrollTo = () => {
    for (let i = 0; i < navBar.childNodes.length; i++) {
    navBar.childNodes[i].addEventListener('click', function (e) {
        e.preventDefault();
        const hash = e.target.innerHTML;
        const scrollTarget = document.querySelector(`[data-nav="${hash}"]`);
        scrollTarget.scrollIntoView({behavior: 'smooth', block: 'center'});
    })};
  }

// update nav elements and sections to active class dependent on their location in viewport
  function elementActiveStates() {
    const links = document.querySelectorAll('.menu__link');
    let index = sections.length;

    while(--index && window.scrollY + 400 < sections[index].offsetTop) {}

    links.forEach((link) => link.classList.remove('your-active-link'));
    links[index].classList.add('your-active-link');
    sections.forEach(element => {element.classList.remove('your-active-class');
    sections[index].classList.add('your-active-class');
    })
  }

// load nav after page is loaded
document.addEventListener('load', menu ());


// smooth scroll to sections
navScrollTo();

// change section and nav link to css active when in viewport
setTimeout(() => window.addEventListener('scroll', function () {elementActiveStates();} ), 0);

//menu on mobile
const navActive = () => {
  const burger = document.querySelector('.burger');
  const navbarList = document.querySelector('.navbarList');
  const navLinks = document.querySelectorAll('.menu__link');

  // animate/open mobile menu
  burger.addEventListener('click', () => {
    navbarList.classList.toggle('navbarList_active');

    // animate mobile menu links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navbarListFade 0.5s ease forwards ${index / 7 + .2}s`;
      }
    });
    // animate burger icon
    burger.classList.toggle('activeLine');

  });


}
// create mobile menu
navActive();