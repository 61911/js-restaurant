// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB_DIj4uR0LatMMiGG9V-ViAxMxk-E_YW8",
    authDomain: "res-form.firebaseapp.com",
    projectId: "res-form",
    storageBucket: "res-form.appspot.com",
    messagingSenderId: "597254583189",
    appId: "1:597254583189:web:181e89925a9ed2c34f7c9c"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

// variable to access database connection

const db = firestore.collection('newData')

// Get submit form

let submitButton = document.getElementById('submit')

// Create event listner to allow form submission

submitButton.addEventListener("click", (e) => {
    // Preventing default form submission behaviour
    e.preventDefault()

    // Get form values 
    let fullname = document.getElementById('fname').value
    let email = document.getElementById('email').value
    let phoneNumber = document.getElementById('phoneNumber').value
    let Date = document.getElementById('datetimepicker4').value
    let Time = document.getElementById('datetimepicker3').value
    let selectPerson = document.getElementById('selectPerson').value
    let message = document.getElementById('message').value
    var selectedLocation;
document.getElementsByName("radios").forEach(function(elm) {
  if (elm.checked) {
    selectedLocation = elm.value;
  }
})

    // Save Form data to firebase 
    db.doc().set({
        fname : fullname,
        email : email,
        phoneNumber: phoneNumber,
        datetimepicker4: Date,
        datetimepicker3: Time,
        selectPerson: selectPerson,
        message: message,
        selectedLocation: selectedLocation
        
    }).then(()=>{
        console.log("Data Saved")
    }).catch((error)=> {
        console.log(error)
    }
    ) 



})