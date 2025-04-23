// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Course enrollment functionality
document.querySelectorAll('.enroll-btn').forEach(button => {
    button.addEventListener('click', function() {
        const isLoggedIn = false; // This should be replaced with actual login check
        
        if (!isLoggedIn) {
            alert('Please log in to enroll in this course');
        } else {
            const courseName = this.parentElement.querySelector('h3').textContent;
            alert(`Successfully enrolled in ${courseName}!`);
        }
    });
});

// Login button functionality
document.querySelector('.login-btn').addEventListener('click', function() {
    // Add modal or redirect to login page
    alert('Login functionality to be implemented');
});

// Add animation to features on scroll
const features = document.querySelectorAll('.feature');
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

features.forEach(feature => {
    feature.style.opacity = 0;
    feature.style.transform = 'translateY(20px)';
    feature.style.transition = 'all 0.5s ease-in-out';
    observer.observe(feature);
});

// Newsletter subscription functionality
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        if (validateEmail(email)) {
            alert('Thank you for subscribing to our newsletter!');
            this.querySelector('input[type="email"]').value = '';
        } else {
            alert('Please enter a valid email address');
        }
    });
}

// Email validation helper function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Contact button functionality
const contactBtn = document.querySelector('.contact-btn');
if (contactBtn) {
    contactBtn.addEventListener('click', function() {
        alert('Contact form will be implemented soon!');
    });
}

// Add scroll to top button
const scrollButton = document.createElement('button');
scrollButton.innerHTML = '↑';
scrollButton.className = 'scroll-top';
document.body.appendChild(scrollButton);

scrollButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide scroll button based on scroll position
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

// Add hover effects to course cards
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = 1;
    });
    img.style.opacity = 0;
    img.style.transition = 'opacity 0.5s ease';
});

// Handle mobile menu
const hamburger = document.createElement('div');
hamburger.className = 'hamburger';
hamburger.innerHTML = '☰';
document.querySelector('nav').appendChild(hamburger);

hamburger.addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('nav')) {
        document.querySelector('nav ul').classList.remove('show');
    }
});

// Add active state to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Start Learning Now button functionality
document.querySelector('.cta-btn').addEventListener('click', function() {
    document.querySelector('#courses').scrollIntoView({
        behavior: 'smooth'
    });
});