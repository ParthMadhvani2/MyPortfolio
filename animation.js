const the_animationX = document.querySelectorAll('.animationX')
const the_animationY = document.querySelectorAll('.animationY')
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