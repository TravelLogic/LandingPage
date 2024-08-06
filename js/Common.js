
// Common.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav');
    const faqItems = document.querySelectorAll('.faq-item');

    // Toggle the active class on the hamburger and nav menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Set the 'active' class on the current page's link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add 'active' class to the clicked link
            this.classList.add('active');

            // Close the menu when a link is clicked
            navMenu.classList.remove('active');
        });
    });

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Check if the item is already active
            const isActive = item.classList.contains('active');

            // Remove 'active' class from all items
            faqItems.forEach(faq => faq.classList.remove('active'));

            // Toggle 'active' class for the clicked item if it was not active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });


});