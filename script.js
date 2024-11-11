document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
    const spinner = document.createElement("div");
    spinner.classList.add("spinner");

    // EmailJS Service and Template IDs
    const serviceID = 'j9fp31r';
    const templateID = 'b3cku8h';

    // Event listener for form submission
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Show spinner and update the form message
        showSpinner();
        formMessage.textContent = "Sending your message...";
        formMessage.style.color = "black";

        // Send form data using EmailJS
        emailjs.sendForm(serviceID, templateID, contactForm)
            .then(handleSuccess, handleError)
            .finally(hideSpinner);
    });

    // Function to show the spinner
    function showSpinner() {
        contactForm.appendChild(spinner);
    }

    // Function to hide the spinner after the process is complete
    function hideSpinner() {
        contactForm.removeChild(spinner);
    }

    // Success handler: Update message and reset form
    function handleSuccess(response) {
        console.log('Message sent successfully:', response);
        formMessage.textContent = "Thank you! Your message has been sent.";
        formMessage.style.color = "green";
        contactForm.reset(); // Reset the form fields after successful submission
    }

    // Error handler: Display error message
    function handleError(error) {
        console.error('Error sending message:', error);
        formMessage.textContent = "Oops! Something went wrong. Please try again later.";
        formMessage.style.color = "red";
    }
});
