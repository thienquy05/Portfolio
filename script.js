
document.addEventListener('DOMContentLoaded', () => {

    //Hamburger Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('#left-sidebar');
    const sidebarLinks = document.querySelectorAll('#left-sidebar a');
    const mainContent = document.querySelector('#main-content');
    const scrollUpBtn = document.getElementById('scroll-up-btn');
    
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

        //Scroll Up Button in Mobile
        const isMobile = window.innerWidth <= 768;

        if (isMobile && mainContent.scrollTop > 200) {
            scrollUpBtn.classList.add("visible");
        }
        else {
            scrollUpBtn.classList.remove("visible");
        }
    };
    // Attach the listener: Run the scrollActive function every time a scroll happens
    mainContent.addEventListener('scroll', scrollActive);
    // Run the function once on load to highlight the correct link initially
    scrollActive();

    //Dowload Resume Button
    document.getElementById("dowload-btn").addEventListener('click', function () {
        const link = document.createElement("a");
        link.href = "file-link/Thien_Quy_Pham_Resume (2).pdf";
        link.download = "ThienQuyPham_Resume";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    //Data for Skill Details modal
    const skillDetails = {
        python: {
                title: 'Python Programming',
                description: 'Proficient in Python for automation tasks, including working with CSV files and developing games using Pygame (e.g., Snake Game, Flappy Bird).',
                link: 'https://github.com/thienquy05/Small_Project_Python'
        },
        cpp: {
                title: 'C++ Programming',
                description: 'Experienced in using C++ for algorithmic problem-solving, including dynamic programming, linear data structures, trees, and Huffman coding. Strong understanding of memory management and performance optimization.',
                link: 'https://github.com/thienquy05/Cpp_Project'
            },
        java: {
                title: 'Java Development',
                description: 'Skilled in object-oriented programming with Java. Worked with non-linear data structures such as linked lists, stacks, and queues, as well as array sorting algorithms. Experienced in development environments like Eclipse.',
                link: 'https://github.com/thienquy05/Banks/tree/main/BankProgramming/src'
        },
        htmlcss: {
                title: 'HTML & CSS',
                description: 'Capable of crafting responsive and accessible web layouts using semantic HTML and modern CSS techniques, including Flexbox and Grid. Proficient in creating clean, structured designs.',
                link: 'https://thienquy05.github.io/QRCodeGenerator/'
        },
        js: {
                title: 'JavaScript',
                description: 'Experienced in JavaScript for interactive front-end development, and creating dynamic UI behavior in web applications.'
        },
        git: {
                title: 'Git Version Control',
                description: 'Experienced with Git for managing codebases in individual and collaborative environments. Proficient in common Git workflows, branching strategies, and troubleshooting merge conflicts.'
        },
        json: {
                title: 'JSON',
                description: 'Adept at using JSON for structured data exchange between front-end and back-end systems. Skilled in parsing, manipulating, and integrating JSON data in web and scripting contexts.',
                link: 'https://github.com/thienquy05/BeveragesMenu/blob/main/beverage_menu.py'
        },
        github: {
                title: 'GitHub',
                description: 'Experienced in using GitHub for version control, collaboration, and project management. Proficient in creating repositories, managing branches, pull requests, and using GitHub Issues and Actions for workflow automation.'
        },
        msoffice: {
                title: 'Microsoft Office Suite',
                description: 'Proficient in Microsoft Office tools including Word, Excel, and PowerPoint. Skilled in creating professional documents, analyzing data with formulas and charts in Excel, and delivering impactful presentations.'
        },
        it: {
            title: 'IT Automation with Python',
            description: `
                    <strong>Core Technical Skills:</strong>
                    <br>
                    <ul>
                        <li>Python Scripting: Automating tasks, managing system operations, and handling data with custom scripts.</li>
                        <li>Operating System Interaction: Performing file and directory operations using os and shutil; executing system commands with subprocess.</li>
                        <li>Text & Data Processing: Advanced pattern matching with Regular Expressions (Regex); working with data formats like JSON, CSV, and YAML.</li>
                        <li>Web Services & APIs: Interacting with RESTful APIs using the requests library; parsing HTML content with BeautifulSoup.</li>
                        <li>Version Control: Proficient in Git for version tracking and workflow management; experienced with GitHub collaboration tools.</li>
                        <li>Troubleshooting & Debugging: Analyzing logs, implementing error handling, and writing maintainable, debuggable code.</li>
                    </ul>
                    `
        }
    };

    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');

    window.openModal = (skillKey) => {
        if (!skillDetails[skillKey]) {
            console.error('Skill key not found: ', skillKey);
            return;
        }

        const details = skillDetails[skillKey];
        //Reset contents
        modalContent.innerHTML = `<span class="close" onclick ="closeModal()">&times;</span>`;

        const tittleElement = document.createElement('h3');
        tittleElement.textContent = details.title;
        tittleElement.style.marginBottom = `1rem`;
        tittleElement.style.color = 'var(--primary-color)';
        
        const descriptionElement = document.createElement('p');
        descriptionElement.innerHTML = details.description;
        descriptionElement.style.lineHeight = '1.6';
        
        modalContent.appendChild(tittleElement);
        modalContent.appendChild(descriptionElement);
        if (details.link) {
            const linkElement = document.createElement('a');
            linkElement.href = details.link;
            linkElement.target = '_blank';
            linkElement.textContent = 'View Source'

            //Style link as the button
            linkElement.style.display = 'inline-block';
            linkElement.style.marginTop = '1rem';
            linkElement.style.marginBottom = '1rem';
            linkElement.style.padding = '10px 15px';
            linkElement.style.backgroundColor = 'var(--primary-color)';
            linkElement.style.color = 'white';
            linkElement.style.textDecoration = 'none';
            linkElement.style.borderRadius = '5px';
            linkElement.style.transition = 'background-color 0.3s';
            linkElement.onmouseover = () => linkElement.style.backgroundColor = '#004080';
            linkElement.onmouseout = () => linkElement.style.backgroundColor = 'var(--primary-color)';

            //Alert for directing to another page
            linkElement.onclick = () => {
                alert('This link would go to different page!');
            }

            modalContent.appendChild(linkElement);
        }
        
        modal.classList.add('visible');
    }

    window.closeModal = () => {
        modal.classList.remove('visible');
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    //Add the visible class to timeline items when they scroll into the view
    const timelineItems = document.querySelectorAll('.timeline-item');

    //This function checks if an element is in the viewport
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && rect.bottom >= 0
        );
    };

    //This function loops through items and adds the class if they are visible
    const callbackFunc = () => {
        for (let i = 0; i < timelineItems.length; i++ ) {
            if (isElementInViewport(timelineItems[i])) {
                timelineItems[i].classList.add('visible');
            }
        }
    };

    //Listen for scroll events to trigger the function
    const scrollContainer = document.getElementById('main-content') || window;
    scrollContainer.addEventListener('scroll', callbackFunc);

    //Also run the function on page load for any items already in view
    window.addEventListener('load', callbackFunc);
});

