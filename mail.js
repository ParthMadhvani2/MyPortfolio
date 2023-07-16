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