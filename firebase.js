
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  import { getAnalytics} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBDAA9Jt6dr0qBO_JEsH1YTmTGH7qi88F8",
    authDomain: "tentamen-5edb8.firebaseapp.com",
    projectId: "tentamen-5edb8",
    storageBucket: "tentamen-5edb8.appspot.com",
    messagingSenderId: "66820902066",
    appId: "1:66820902066:web:40dad67e2f9ec43bf6cdab",
    measurementId: "G-0PXMJM0R0D"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();


  let loginemail = document.getElementById("loginemail")
let loginpassword = document.getElementById("loginpassword")
let signupnemail = document.getElementById("signupemail")
let signuppassword = document.getElementById("signuppassword")


window.signUP= function(e){
e.preventDefault();

var obj = { 

    email: signupnemail.value,
    password: signuppassword.value
};
creatUserWithEmailAndPassword(auth, obj.email, obj.password)
.then(function(success){
    alert("you have created the acount")
})

.catch(function(err){
    alert("err signing up")
})
}

window.logIN= function(e){
    e.preventDefault();
    
    var obj = { 
    
        email: loginemail.value,
        password: loginpassword.value
    };
   signInWithEmailAndPassword   (auth, obj.email, obj.password)
    .then(function(success){
        alert("you are signed up")
        window.location.replace("3.html")
    })
    
    .catch(function(err){
        alert("err signing up")
    })
    }