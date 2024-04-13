// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*Script for animation*/
document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
  });
  
  document.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
  });