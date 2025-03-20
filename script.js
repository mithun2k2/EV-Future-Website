function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}
// Fade-in animation when scrolling
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".about-content h2, .about-content p");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        observer.observe(section);
    });
});

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}
// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function prevSlide() {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
}

// Initialize the first slide
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
});
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}

// Contact Form Validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Your message has been sent successfully!");
        form.reset();
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}

// Form submission and display post
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('post-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const postTitle = document.getElementById('post-title').value;
        const postContent = document.getElementById('post-content').value;

        const postContainer = document.getElementById('posts-container');
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <h3>${postTitle}</h3>
            <p><strong>${username}</strong></p>
            <p>${postContent}</p>
        `;

        postContainer.appendChild(postElement);

        // Clear the form
        document.getElementById('post-form').reset();
    });
});
// Login Form Validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            alert("Please fill in all fields before logging in.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Login successful!");
        form.reset();
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
function redirectToLogin() {
    window.location.href = "login.html"; // Redirect to the Login Page
}

// Open the Forgot Password Modal
function openForgotPasswordModal() {
    document.getElementById('forgotPasswordModal').style.display = 'flex';
}

// Close the Forgot Password Modal
function closeForgotPasswordModal() {
    document.getElementById('forgotPasswordModal').style.display = 'none';
}

// Handle Forgot Password Form Submission
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('forgot-email').value.trim();

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert(`A password reset link has been sent to ${email}`);
    closeForgotPasswordModal();
});
// Modal functionality
function openModal() {
    document.getElementById('forgotPasswordModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('forgotPasswordModal').style.display = 'none';
}

document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('forgot-email').value;
    alert(`Password reset link sent to ${email}`);
    closeModal();
});

// Open the Create Account Modal
function openCreateAccountModal() {
    document.getElementById('createAccountModal').style.display = 'flex';
}

// Close the Create Account Modal
function closeCreateAccountModal() {
    document.getElementById('createAccountModal').style.display = 'none';
}

// Handle Create Account Form Submission
document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('create-name').value.trim();
    const email = document.getElementById('create-email').value.trim();
    const password = document.getElementById('create-password').value.trim();

    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert(`Account created successfully for ${name}!`);
    closeCreateAccountModal();
});

// Email Validation Function
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}