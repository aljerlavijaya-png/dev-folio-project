// Get the contact form
const form = document.getElementById("contactForm");


// Listen for form submission
form.addEventListener("submit", function (event) {

    // Stop the browser from submitting/reloading the page
    event.preventDefault();


    // Get values entered by the user

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // Get error message elements

    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const messageError =
        document.getElementById("messageError");

    const successMessage =
        document.getElementById("successMessage");


    // Clear previous error messages

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";


    // Assume the form is valid

    let isValid = true;


    // ================= NAME VALIDATION =================

    if (name === "") {

        nameError.textContent =
            "Name is required.";

        isValid = false;
    }


    // ================= EMAIL VALIDATION =================

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        emailError.textContent =
            "Email is required.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;
    }


    // ================= MESSAGE VALIDATION =================

    if (message.length < 10) {

        messageError.textContent =
            "Message must be at least 10 characters long.";

        isValid = false;
    }


    // ================= SUCCESS =================

    if (isValid) {

        console.log(
            "Form submitted successfully!"
        );

        successMessage.textContent =
            "Form submitted successfully!";

        // Clear the form
        form.reset();
    }

});