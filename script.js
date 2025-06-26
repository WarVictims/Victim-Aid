// /**
//  * Scroll reveal effect
//  */
// const sections = document.querySelectorAll("[data-section]");

// const scrollReveal = function () {
//   for (let i = 0; i < sections.length; i++) {
//     const sectionTop = sections[i].getBoundingClientRect().top;
//     const triggerPoint = window.innerHeight / 1.3;

//     if (sectionTop < triggerPoint) {
//       sections[i].classList.add("revealed");
//     } else {
//       sections[i].classList.remove("revealed");
//     }
//   }
// };

// scrollReveal();
// addEventOnElem(window, "scroll", scrollReveal);



const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const icon = question.querySelector('.icon');

  question.addEventListener('click', () => {
    // Close others
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.icon').textContent = '+';
      }
    });

    // Toggle current
    item.classList.toggle('active');
    icon.textContent = item.classList.contains('active') ? '–' : '+';
  });
});




const HamBuger = document.querySelector('.hambuger');
const NavMenu = document.querySelector('.nav-menu');


HamBuger.addEventListener("click", () => {
  HamBuger.classList.toggle("animate");
  NavMenu.classList.toggle("animate");
})

  // Create a temporary image object to preload the CSS background

  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });
