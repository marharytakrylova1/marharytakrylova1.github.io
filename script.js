document.addEventListener('DOMContentLoaded', () => {
    
    // --- Research Section Filtering ---
    const researchFilterBtns = document.querySelectorAll('#research .filter-btn');
    const researchItems = document.querySelectorAll('.research-item');

    researchFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons in research
            researchFilterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            researchItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    // Reset animation
                    item.style.animation = 'none';
                    item.offsetHeight; /* trigger reflow */
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // --- Experience Section Filtering ---
    const expFilterBtns = document.querySelectorAll('#experience .filter-btn');
    const expLists = document.querySelectorAll('.experience-list');

    expFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons in experience
            expFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const targetId = btn.getAttribute('data-filter');

            expLists.forEach(list => {
                if (list.id === targetId) {
                    list.style.display = 'flex'; // Restore flex display
                    list.style.animation = 'none';
                    list.offsetHeight; 
                    list.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    list.style.display = 'none';
                }
            });
        });
    });

    // Add CSS keyframe for fade in if not present
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);


    // --- Mobile Menu Toggle ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = mobileBtn.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans.forEach(span => span.style.transform = 'none');
                spans[1].style.opacity = '1';
            }
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                // Reset hamburger icon
                const spans = mobileBtn.querySelectorAll('span');
                spans.forEach(span => span.style.transform = 'none');
                spans[1].style.opacity = '1';
            }
        });
    });
});
