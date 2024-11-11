document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
    const spinner = document.createElement("div");
    spinner.classList.add("spinner");

    // Add debugging log to ensure the script is loaded and initialized
    console.log("EmailJS Initialized:", emailjs);

    // Initialize the form submission listener
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Show spinner while sending the form data
        formMessage.textContent = "Sending your message...";
        formMessage.style.color = "black";
        contactForm.appendChild(spinner);

        // EmailJS Service and Template IDs
        const serviceID = 'j9fp31r';  // Replace with your actual service ID
        const templateID = 'b3cku8h';  // Replace with your actual template ID

        // Add more logging for debugging
        console.log("Service ID:", serviceID);
        console.log("Template ID:", templateID);

        // Send the form data using EmailJS
        emailjs.sendForm(serviceID, templateID, contactForm)
        .then((response) => {
            console.log('EmailJS Success:', response);
            formMessage.textContent = "Thank you! Your message has been sent.";
            formMessage.style.color = "green";
            contactForm.reset();
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            formMessage.textContent = "Oops! Something went wrong. Please try again.";
            formMessage.style.color = "red";
        })
        .finally(() => {
            // Remove spinner after submission attempt (successful or not)
            contactForm.removeChild(spinner);
        });
    });
});
