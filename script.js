<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Yashraj</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
    <script>
        emailjs.init("r3qjDdbisA7S5ZEst"); <!-- Replace with your EmailJS User ID -->
    </script>
    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar">
        <div class="logo">Yashraj's Portfolio</div>
        <ul class="nav-links">
            <li><a href="#home" aria-label="Home Section">Home</a></li>
            <li><a href="#about" aria-label="About Me Section">About</a></li>
            <li><a href="#projects" aria-label="Projects Section">Projects</a></li>
            <li><a href="#contact" aria-label="Contact Section">Contact</a></li>
        </ul>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm Yashraj, an aspiring AI & DS engineer with a passion for coding, competitive programming, and innovative projects.</p>
        <a href="#projects" class="cta-btn" aria-label="View My Projects">View My Work</a>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <h2>About Me</h2>
        <p>I am a student specializing in Artificial Intelligence and Data Science. With strong skills in C, C++, Python, and a focus on projects like face recognition, safety systems, and real-time tracking solutions, I aim to create impactful tech solutions.</p>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
        <h2>Projects</h2>
        <div class="project-card">
            <h3>Smart India Hackathon</h3>
            <p>Developed a face recognition system for the police department to enhance operational efficiency.</p>
        </div>
        <div class="project-card">
            <h3>College Bus Tracking System</h3>
            <p>Created an app using React and SQL for students to track college buses in real-time.</p>
        </div>
        <div class="project-card">
            <h3>Offline Music Player</h3>
            <p>Built an offline music player in Python, optimizing it for Fedora OS.</p>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <h2>Contact Me</h2>
        <form id="contactForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required aria-label="Your Name">

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please enter a valid email address." aria-label="Your Email">

            <label for="message">Message:</label>
            <textarea id="message" name="message" required aria-label="Your Message"></textarea>

            <button type="submit" aria-label="Submit Message">Send Message</button>
        </form>
        <p id="formMessage"></p>
        <!-- Spinner for form submission -->
        <div id="spinner" class="spinner" style="display:none;"></div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Yashraj's Portfolio. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
