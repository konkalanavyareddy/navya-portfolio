document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SCROLL FADE-IN ANIMATION
    const sections = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));


    // 2. MODAL LOGIC FOR PROJECTS
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalTech = document.getElementById('modal-tech');
    const modalDesc = document.getElementById('modal-desc');
    const closeBtn = document.querySelector('.close-modal');
    
    // Get all project cards
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Retrieve data from attributes
            const title = card.getAttribute('data-title');
            const tech = card.getAttribute('data-tech');
            const desc = card.getAttribute('data-desc');

            // Set content
            modalTitle.textContent = title;
            modalTech.textContent = tech;
            modalDesc.textContent = desc;

            // Show modal
            modal.style.display = 'flex';
        });
    });

    // Close Modal actions
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });


    // 3. TIMELINE EXPAND/COLLAPSE LOGIC
    window.toggleTimeline = function(btn) {
        // Find the details div immediately following the button
        const detailsDiv = btn.nextElementSibling;
        
        // Toggle the 'show' class
        detailsDiv.classList.toggle('show');
        
        // Change button text/icon
        if(detailsDiv.classList.contains('show')) {
            btn.innerHTML = 'Hide Details <i class="fas fa-chevron-up"></i>';
        } else {
            btn.innerHTML = 'View Responsibilities <i class="fas fa-chevron-down"></i>';
        }
    }
    
    // 4. SIDEBAR ACTIVE LINK
    const navLinks = document.querySelectorAll('.sidebar nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});