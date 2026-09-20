// lert("Login successful!")
// console.log("Login successful!");
// console.log("User Name: Admin User");
// document.body.style.backgroundColor = "#dc5a5a";
// let loginForm = adocument.getElementById("loginForm");
// if (loginForm) {
//   loginForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     let email = document.getElementById("email").value.trim();
//     let password = document.getElementById("password").value.trim();
//     button.disabled = true;
//     if (email === "admin@example.com" && password === "password") {
//       alert("Login successful!");
//       console.log("Login successful!");
//       console.log("User Name: Admin User");
//       document.body.style.backgroundColor = "#dc5a5a";
//     } else {
//       alert("Invalid email or password.");
//       button.disabled = false;
      
//     }
//   });
// }
// Get the form
// const form = document.querySelector("form");

// // Login form submit event
// form.addEventListener("submit", function (event) {
//     // Stop page from refreshing
//     event.preventDefault();

//     // Get input values
//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value.trim();

//     // Check email and password
//     if (email === "" || password === "") {
//         alert("Please enter email and password.");
//         return;
//     }

//     // Basic email validation
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailPattern.test(email)) {
//         alert("Please enter a valid email address.");
//         return;
//     }

//     // Password validation
//     if (password.length < 6) {
//         alert("Password must be at least 6 characters.");
//         return;
//     }

//     // Successful login
//     alert("Login successful! Welcome to Smart City.");
// window.location.href = "home.html";
// });

// =========================================
// SMARTCITY COMPLAINT - LOGIN JAVASCRIPT
// =========================================


// Get elements
const publicBtn = document.getElementById("publicBtn");
const departmentBtn = document.getElementById("departmentBtn");

const publicLoginForm = document.getElementById("publicLoginForm");
const departmentLoginForm = document.getElementById("departmentLoginForm");

const loginMessage = document.getElementById("loginMessage");


// =========================================
// SWITCH TO PUBLIC / CITIZEN LOGIN
// =========================================

publicBtn.addEventListener("click", function () {

    // Show public form
    publicLoginForm.style.display = "block";

    // Hide department form
    departmentLoginForm.style.display = "none";

    // Active button
    publicBtn.classList.add("active");
    departmentBtn.classList.remove("active");

    // Clear message
    loginMessage.textContent = "";

});


// =========================================
// SWITCH TO DEPARTMENT LOGIN
// =========================================

departmentBtn.addEventListener("click", function () {

    // Show department form
    departmentLoginForm.style.display = "block";

    // Hide public form
    publicLoginForm.style.display = "none";

    // Active button
    departmentBtn.classList.add("active");
    publicBtn.classList.remove("active");

    // Clear message
    loginMessage.textContent = "";

});


// =========================================
// PUBLIC / CITIZEN LOGIN
// =========================================

publicLoginForm.addEventListener("submit", function (event) {

    // Stop page refresh
    event.preventDefault();


    // Get input values
    const email = document.getElementById("publicEmail").value.trim();
    const password = document.getElementById("publicPassword").value.trim();


    // Validation
    if (email === "" || password === "") {

        showMessage(
            "Please enter email and password.",
            "error"
        );

        return;
    }


    // Basic email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        showMessage(
            "Please enter a valid email address.",
            "error"
        );

        return;
    }


    // Demo login
    // Later this can be connected to a backend/database

    const citizenUser = {
        email: email,
        role: "citizen"
    };


    // Save login information
    localStorage.setItem(
        "loggedInUser",
        email
    );

    localStorage.setItem(
        "userRole",
        "citizen"
    );

    localStorage.setItem(
        "citizenUser",
        JSON.stringify(citizenUser)
    );


    // Success message
    showMessage(
        "Login successful! Redirecting...",
        "success"
    );


    // Redirect
    setTimeout(function () {

        window.location.href = "home.html";

    }, 1000);

});


// =========================================
// DEPARTMENT LOGIN
// =========================================

departmentLoginForm.addEventListener(
    "submit",
    function (event) {

        // Stop page refresh
        event.preventDefault();


        // Get values
        const department =
            document.getElementById("department").value;

        const employeeId =
            document.getElementById("employeeId").value.trim();

        const password =
            document.getElementById("departmentPassword").value.trim();


        // Validation
        if (
            department === "" ||
            employeeId === "" ||
            password === ""
        ) {

            showMessage(
                "Please fill in all department login fields.",
                "error"
            );

            return;
        }


        // Demo department login

        const departmentUser = {

            department: department,
            employeeId: employeeId,
            role: "department"

        };


        // Save department login
        localStorage.setItem(
            "loggedInUser",
            employeeId
        );

        localStorage.setItem(
            "userRole",
            "department"
        );

        localStorage.setItem(
            "departmentUser",
            JSON.stringify(departmentUser)
        );


        // Success message
        showMessage(
            "Department login successful! Redirecting...",
            "success"
        );


        // Redirect
        setTimeout(function () {

            window.location.href =
                "department-dashboard.html";

        }, 1000);

    }
);


// =========================================
// MESSAGE FUNCTION
// =========================================

function showMessage(message, type) {

    loginMessage.textContent = message;


    if (type === "success") {

        loginMessage.style.color = "green";

    } else {

        loginMessage.style.color = "red";

    }

}


// =========================================
// LOGOUT FUNCTION
// =========================================

function logout() {

    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userRole");
    localStorage.removeItem("citizenUser");
    localStorage.removeItem("departmentUser");


    // Go to login page
    window.location.href = "home.html";
}


// =========================================
// CHECK LOGIN
// =========================================

function checkLogin(requiredRole) {

    const loggedInUser =
        localStorage.getItem("loggedInUser");

    const userRole =
        localStorage.getItem("userRole");


    // User is not logged in
    if (!loggedInUser) {

        window.location.href = "home.html";

        return false;
    }


    // Wrong user type
    if (requiredRole && userRole !== requiredRole) {

        window.location.href = "index.html";

        return false;
    }


    return true;
  window.location.href = "home.html";
  window.location.href = "submit.html";
  window.location.href = "deptdashboard.html";
}


















