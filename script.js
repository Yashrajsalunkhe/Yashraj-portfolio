document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Show spinner while sending the form data
        formMessage.textContent = "Sending your message...";
        formMessage.style.color = "black";
        contactForm.appendChild(spinner);

        // Replace with your actual EmailJS service and template IDs
        const serviceID = 'service_j9fp31r';
        const templateID = 'template_b3cku8h';

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
        })
        .finally(() => {
            // Remove spinner after the message is sent or failed
            contactForm.removeChild(spinner);
        });
    });
});
