// Animaton JS code

const the_animationX = document.querySelectorAll('.animationX')
const the_animationXX = document.querySelectorAll('.animationXX')
const the_animationY = document.querySelectorAll('.animationY')
const the_animationYY = document.querySelectorAll('.animationYY')
const the_animationZ = document.querySelectorAll('.animationZ')
const the_animationL = document.querySelectorAll('.animationL')
const the_animationR = document.querySelectorAll('.animationR')

const observerX = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    })
},
   { threshold: 0.5
   });
//
for (let i = 0; i < the_animationX.length; i++) {
    const elements = the_animationX[i];
 
     observerX.observe(elements);
   } 


const observerXX = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    })
},
   { threshold: 0.5
   });
//
for (let i = 0; i < the_animationXX.length; i++) {
    const elements = the_animationXX[i];
 
     observerX.observe(elements);
   } 


const observerY = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    })
},
   { threshold: 0.5
   });
//
for (let i = 0; i < the_animationY.length; i++) {
    const elements = the_animationY[i];
 
     observerY.observe(elements);
   } 

   const observerYY = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    })
},
   { threshold: 0.8
   });
//
for (let i = 0; i < the_animationYY.length; i++) {
    const elements = the_animationYY[i];
 
     observerY.observe(elements);
   } 


const observerZ = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
               
            }
        
    })
},
   { threshold: 0.5
   });
//
for (let i = 0; i < the_animationZ.length; i++) {
    const elements = the_animationZ[i];
 
     observerZ.observe(elements);
   } 


const observerL = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                
            }
        
    })
},
   { threshold: 0.5
   });
//
for (let i = 0; i < the_animationL.length; i++) {
    const elements = the_animationL[i];
 
     observerL.observe(elements);
   } 


const observerR = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
               
            }
        
    })
},
   { threshold: 0.5
   });
//
for (let i = 0; i < the_animationR.length; i++) {
    const elements = the_animationR[i];
 
     observerR.observe(elements);
   } 






//    Hover Btn Js code

document.querySelector('.hover-btn').onmousemove = (e) => {

	const x = e.pageX - e.target.offsetLeft
	const y = e.pageY - e.target.offsetTop

	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
	
}



// Mail.js code to send mail of contact us form 

const firebaseConfig = {
    apiKey: "AIzaSyBEK05H-fjpqhPGs7dRqOzQwxPR-d-jeyM",
    authDomain: "portfolio-7a01c.firebaseapp.com",
    databaseURL: "https://portfolio-7a01c-default-rtdb.firebaseio.com",
    projectId: "portfolio-7a01c",
    storageBucket: "portfolio-7a01c.appspot.com",
    messagingSenderId: "796568543069",
    appId: "1:796568543069:web:0e6854ccf55a8cb84412b4",
    measurementId: "G-QMN8E0YZD3"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var message = getElementVal("message");

  saveMessages(name, email, message);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};