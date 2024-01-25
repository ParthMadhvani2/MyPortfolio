// Animation function
const observeElements = (elements, threshold) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animation');
            } else {
                entry.target.classList.remove('scroll-animation');
            }
        });
    }, { threshold });

    elements.forEach((element) => observer.observe(element));
};

// Define animations
const animationsConfig = [
    { selector: '.animationX', threshold: 0.5 },
    { selector: '.animationXX', threshold: 0.5 },
    { selector: '.animationY', threshold: 0.5 },
    { selector: '.animationYY', threshold: 0.8 },
    { selector: '.animationZ', threshold: 0.5 },
    { selector: '.animationL', threshold: 0.5 },
    { selector: '.animationR', threshold: 0.5 },
    // Add more animations as needed
    { selector: '.animationA', threshold: 0.6 },
    { selector: '.animationB', threshold: 0.7 },
    { selector: '.animationC', threshold: 0.5 }
];

// Check if the viewport width is less than a certain threshold (e.g., 600 pixels) for mobile view
const isMobileView = window.innerWidth < 600;

// Apply animations
animationsConfig.forEach(({ selector, threshold }) => {
    const elements = document.querySelectorAll(selector);
    // Adjust the threshold for mobile view
    const adjustedThreshold = isMobileView ? threshold * 0.5 : threshold;
    observeElements(elements, adjustedThreshold);
});

// Hover Btn Js code
document.querySelector('.hover-btn').onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);
};

// Navbar
function toggleNav() {
    var navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('active');
  }
