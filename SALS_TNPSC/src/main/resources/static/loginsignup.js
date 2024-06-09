document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const signinPopup = document.getElementById('signin-popup');
    const closeBtn = document.querySelector('.close');
    const signinForm = document.querySelector('#signin-form-group form');
    const coursesLink = document.querySelector('a[href="courses.html"]');
    const isLoggedIn = localStorage.getItem('loggedIn');

    const redirectToCourses = () => {
        window.location.href = 'courses.html';
    };
    if (isLoggedIn) {
        content.style.display = 'block';
    } else {
        signinPopup.style.display = 'block';
    }

    // Close the signin popup
    closeBtn.addEventListener('click', () => {
        signinPopup.style.display = 'none';
    });

    // Handle form submission
    signinForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username && password) {
            localStorage.setItem('loggedIn', 'true');
            content.style.display = 'block';
            signinPopup.style.display = 'none';
            redirectToCourses(); // Redirect after successful login
        } else {
            alert('Please enter username and password.');
        }
    });

    // When the user clicks anywhere outside of the signin popup, close it
    window.addEventListener('click', (event) => {
        if (event.target === signinPopup) {
            signinPopup.style.display = 'none';
        }
    });

    // Open courses page
    coursesLink.addEventListener('click', (event) => {
        if (!isLoggedIn) {
            event.preventDefault();
            signinPopup.style.display = 'block';
        }
    });
});
