document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Replace these placeholders with your actual EmailJS service and template IDs
        const serviceID = 'service_j9fp31r';
        const templateID = 'template_b3cku8h_ID';

        // Send the form data to EmailJS
        emailjs.sendForm(serviceID, templateID, contactForm)
        .then((response) => {
            console.log('Success:', response);
            formMessage.textContent = "Thank you! Your message has been sent.";
            formMessage.style.color = "green";
            contactForm.reset();
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            formMessage.textContent = "Oops! Something went wrong. Please try again.";
            formMessage.style.color = "red";
        });
    });
});
