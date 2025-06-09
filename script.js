
document.addEventListener('DOMContentLoaded', () => {
    //Hamburger Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('#left-sidebar');
    const sidebarLinks = document.querySelectorAll('#left-sidebar a');
    const mainContent = document.querySelector('#main-content');
    
    //Set the side bar to visible on Click
    const toggleMenu = () => {
        sidebar.classList.toggle('visible');
    }
    //Close menu on Click 
    const closeMenu = () => {
        if (sidebar.classList.contains('visible')) {
            toggleMenu();
        }
    };

    //Show the sidebar on click
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
        menuToggle.style.display = 'none';
    });

    //Close the sidebar after click on each link 
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (sidebar.classList.contains('visible')) {
                sidebar.classList.remove('visible');
                menuToggle.style.display = 'block';
            }
        });
    });

    //Close the sidebar when the link is clicked or when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('visible')) {
            sidebar.classList.remove('visible');
            menuToggle.style.display = 'block';
        }
    });


    //Dragable Student ID Card
    const cardWrapper = document.querySelector('.id-card-wrapper');
    const dragContainer = document.querySelector('#home');

    let isDragging = false;
    let offsetX, offsetY;

    //Function to start dragging
    const startDrag = (clientX, clientY) => {
        isDragging = true;
        cardWrapper.classList.add('dragging');

        //This block runs only on the very first drag to prevent initial jump
        if (window.getComputedStyle(cardWrapper).transform !== 'none') {
            //Get the current visual positions using getBoundingClientRect
            const cardRect = cardWrapper.getBoundingClientRect();
            const containerRect = dragContainer.getBoundingClientRect();

            //Calculate the exact pixel position of the card relative to the container
            const initialLeft = cardRect.left - containerRect.left;
            const initialTop = cardRect.top - containerRect.top;

            //Apply this exact pixel position
            cardWrapper.style.left = `${initialLeft}px`;
            cardWrapper.style.top = `${initialTop}px`;

            //Remove the transform. The card will not jump
            cardWrapper.style.transform = 'none';
        }

        const finalCardRect = cardWrapper.getBoundingClientRect();
        offsetX = clientX - finalCardRect.left;
        offsetY = clientY - finalCardRect.top;
    };

    //Function to perform dragging
    const drag = (clientX, clientY) => {
        if (!isDragging) return;

        
        //Get container boundaries
        const containerRect = dragContainer.getBoundingClientRect();
        const cardRect = cardWrapper.getBoundingClientRect();

        //Calculate the new position of the card
        let newX = clientX - containerRect.left - offsetX;
        let newY = clientY - containerRect.top - offsetY;


        //Constrain the card within the container
        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;
        if (newX + cardRect.width > containerRect.width) {
            newX = containerRect.width - cardRect.width;
        }
        if (newY + cardRect.height > containerRect.height) {
            newY = containerRect.height - cardRect.height;
        }

        cardWrapper.style.left = `${newX}px`;
        cardWrapper.style.top = `${newY}px`;

    };

    //Function to stop dragging
    const stopDrag = () => {
        isDragging = false;
        cardWrapper.classList.remove('dragging');
    };

    //Mouse events 
    cardWrapper.addEventListener('mousedown', (e) => {
        e.preventDefault(); //Prevent default browser drag behavior
        startDrag(e.clientX, e.clientY);
    });

    document.addEventListener('mousemove', (e) => {
        drag(e.clientX, e.clientY);
    });

    document.addEventListener('mouseup', () => {
        stopDrag();
    });

    //Touch events for Mobile
    cardWrapper.addEventListener('touchstart', (e) => {
        e.preventDefault(); //Prevent scrolling while dragging
        const touch = e.touches[0];
        startDrag(touch.clientX, touch.clientY);
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            drag(touch.clientX, touch.clientY);
        }
    });

    document.addEventListener('touchend', () => {
        stopDrag();
    });

    //Active menu on Click and Scroll
    const sections = document.querySelectorAll('#main-content section[id]');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            //Instantly set active class on click
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            closeMenu();
        })
        
    })

// This is the function that runs every time you scroll
    const scrollActive = () => {
        let current = 'home'; // Default to 'home' if no other section is matched

        // Loop through each section to see which one is at the top of the view
        sections.forEach(section => {
        // Get the distance from the top of the main content area to the top of the section
        const sectionTop = section.offsetTop;

        // Check if the amount you've scrolled is past the top of the current section
        // The '- 60' makes the link activate a little before the section hits the very top
        if (mainContent.scrollTop >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
        });

        // Loop through all the sidebar links
        sidebarLinks.forEach(link => {
            // Remove the 'active' class from all links first
            link.classList.remove('active');

            // If a link's href matches the current section's ID, add the 'active' class
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };
    // Attach the listener: Run the scrollActive function every time a scroll happens
    mainContent.addEventListener('scroll', scrollActive);
    // Run the function once on load to highlight the correct link initially
    scrollActive();
});

