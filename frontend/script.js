import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHC3WvxmirAKF0E81rciXaHtj32x5qEQ8",
    authDomain: "log-in-3be51.firebaseapp.com",
    projectId: "log-in-3be51",
    storageBucket: "log-in-3be51.appspot.com",
    messagingSenderId: "1033589168810",
    appId: "1:1033589168810:web:317c35e7bdd297c8f00ed3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Toggle between signup & login forms
window.toggleForms = function () {
    document.getElementById("signup-container").style.display =
        document.getElementById("signup-container").style.display === "none" ? "block" : "none";
    document.getElementById("login-container").style.display =
        document.getElementById("login-container").style.display === "none" ? "block" : "none";
};

// Sign Up
window.signUp = function () {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const role = document.getElementById("signup-role").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Account created successfully!");
            redirectToDashboard(role);
        })
        .catch((error) => alert(error.message));
};

// Login
window.login = function () {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const role = document.getElementById("login-role").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login successful!");
            redirectToDashboard(role);
        })
        .catch((error) => alert(error.message));
};


// Logout Function
window.logout = function () {
    signOut(auth).then(() => {
        alert("Logged out successfully!");
        window.location.href = "login.html"; // Redirect to login page after logout
    }).catch((error) => alert("Error logging out: " + error.message));

};
// Redirect based on role
function redirectToDashboard(role) {
    if (role === "student") {
        window.location.href = "student.html";
    } else if (role === "teacher") {
        window.location.href = "teacher.html";
    }
}


