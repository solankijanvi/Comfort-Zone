
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    if (menuBtn && navLinks && menuBtnIcon) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("open");
            const isOpen = navLinks.classList.contains("open");
            menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
        });

   
        navLinks.addEventListener("click", (e) => {
            if (e.target.tagName === "A") {
                navLinks.classList.remove("open");
                menuBtnIcon.setAttribute("class", "ri-menu-line");
            }
        });
    } else {
        console.error('Menu button, navigation links, or menu icon is missing.');
    }


    const scrollRevealOptions = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
        easing: 'ease-in-out',
    };

    if (window.ScrollReveal) {
        ScrollReveal().reveal(".header_image img", {
            ...scrollRevealOptions,
            origin: "right",
        });

        ScrollReveal().reveal(".header_content div", {
            ...scrollRevealOptions,
            duration: 1000,
            delay: 500,
        });

        ScrollReveal().reveal(".header_content h1", {
            ...scrollRevealOptions,
            delay: 1000,
        });

        ScrollReveal().reveal(".header_content p", {
            ...scrollRevealOptions,
            delay: 1500,
        });

        ScrollReveal().reveal(".about_images img", {
            ...scrollRevealOptions,
            distance: '20px',
            scale: 0.9,
            interval: 200
        });

        ScrollReveal().reveal('.pro', {
            ...scrollRevealOptions,
            origin: 'bottom',
            reset: true
        });
    } else {
        console.error('ScrollReveal is not loaded.');
    }


    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const proContainer = document.querySelector('.pro-container');

    if (leftArrow && rightArrow && proContainer) {
        leftArrow.addEventListener('click', () => {
            proContainer.scrollBy({
                left: -300, 
                behavior: 'smooth'
            });
        });

        rightArrow.addEventListener('click', () => {
            proContainer.scrollBy({
                left: 300, 
                behavior: 'smooth'
            });
        });
    } else {
        console.error('One or more elements for the product carousel are missing.');
    }

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
            }).then(response => {
                if (response.ok) {
                   
                    this.reset();
                  
                    window.location.href = "/thank_you";
                } else {
                    console.error('Form submission failed:', response.statusText);
                }
            }).catch(error => {
                console.error('Error during form submission:', error);
            });
        });
    } else {
        console.error('Form element is missing.');
    }
});
