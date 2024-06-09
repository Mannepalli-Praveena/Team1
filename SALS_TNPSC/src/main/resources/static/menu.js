document.addEventListener('DOMContentLoaded', (event) => {
    const menuBtn = document.getElementById('menu-btn');
    const menuClose = document.getElementById('menu-close');
    const navMenu = document.querySelector('nav .navigation ul');

    // Function to open the menu
    const openMenu = () => {
        navMenu.classList.add('active');
    };

    // Function to close the menu
    const closeMenu = () => {
        navMenu.classList.remove('active');
    };

    // Event listeners for menu button and close button
    menuBtn.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);

    // Optional: Close the menu when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            closeMenu();
        }
    });
});
