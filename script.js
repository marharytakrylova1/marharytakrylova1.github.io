document.addEventListener('DOMContentLoaded', () => {
    
    // --- Research Section Filtering ---
    const researchFilterBtns = document.querySelectorAll('#research .filter-btn');
    const projectsView = document.getElementById('research-projects-view');
    const othersView = document.getElementById('research-others-view');
    const currentProjectsList = document.getElementById('current-projects-list');
    const pastProjectsList = document.getElementById('past-projects-list');
    const otherItems = document.querySelectorAll('#research-others-view .research-item');

    researchFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            researchFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');

            if (filterValue === 'current-projects' || filterValue === 'past-projects') {
                projectsView.style.display = 'grid';
                othersView.style.display = 'none';
                
                if (filterValue === 'current-projects') {
                    currentProjectsList.style.display = 'flex';
                    pastProjectsList.style.display = 'none';
                } else {
                    currentProjectsList.style.display = 'none';
                    pastProjectsList.style.display = 'flex';
                }
            } else {
                projectsView.style.display = 'none';
                othersView.style.display = 'grid';
                
                otherItems.forEach(item => {
                    if (item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    });

    // --- Experience Section Filtering ---
    const expFilterBtns = document.querySelectorAll('#experience .filter-btn');
    const expLists = document.querySelectorAll('.experience-content .experience-list');

    expFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            expFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-filter');
            expLists.forEach(list => {
                list.style.display = (list.id === targetId) ? 'flex' : 'none';
            });
        });
    });

    // --- Global Timeline Logic (Desktop Only mostly) ---
    const EXP_START_YEAR = 2022;
    const RES_START_YEAR = 2022;
    const END_YEAR = 2027; 
    
    const COLORS = ['#e91e63', '#ff9800', '#3498db'];

    function getMonthsFromStart(dateStr, startYear) {
        let date;
        if (dateStr.toLowerCase() === 'present') {
            date = new Date();
        } else {
            const [year, month] = dateStr.split('-').map(Number);
            date = new Date(year, month - 1);
        }
        if (date.getFullYear() < startYear) {
             // clamp logic if needed
        }
        let months = (date.getFullYear() - startYear) * 12 + date.getMonth();
        return months;
    }

    const allExpItems = document.querySelectorAll('.experience-item');

    allExpItems.forEach((item, index) => {
        // Desktop Hover
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth <= 768) return; // Skip on mobile

            const startStr = item.getAttribute('data-start');
            const endStr = item.getAttribute('data-end');
            const tag = item.querySelector('.exp-tag');
            
            if (!startStr || !endStr) return;

            const container = item.closest('.experience-layout');
            const highlight = container.querySelector('.timeline-highlight');
            const nodes = container.querySelectorAll('.timeline-node');

            const timelineContainer = container.querySelector('.global-timeline-container');
            const isResearchTimeline = timelineContainer.classList.contains('research-timeline') || item.closest('#research-projects-view');

            const startYear = isResearchTimeline ? RES_START_YEAR : EXP_START_YEAR;
            const totalMonths = (END_YEAR - startYear) * 12;

            let startMonths = getMonthsFromStart(startStr, startYear);
            let endMonths = getMonthsFromStart(endStr, startYear);

            if (startMonths < 0) startMonths = 0;
            if (endMonths > totalMonths) endMonths = totalMonths;
            if (endMonths < 0) endMonths = 0;

            const startPosPercent = 100 - (startMonths / totalMonths) * 100;
            const endPosPercent = 100 - (endMonths / totalMonths) * 100;

            const top = endPosPercent;
            const height = startPosPercent - endPosPercent;
            const color = COLORS[index % 3];

            highlight.style.top = `${top}%`;
            highlight.style.height = `${height}%`;
            highlight.style.backgroundColor = color;
            highlight.style.opacity = '1';

            if (tag) tag.style.color = color;

            nodes.forEach(node => {
                const year = parseInt(node.getAttribute('data-year'));
                const yearMonths = (year - startYear) * 12;
                const nodePosPercent = 100 - (yearMonths / totalMonths) * 100;

                if (nodePosPercent >= endPosPercent - 1 && nodePosPercent <= startPosPercent + 1) {
                    node.style.backgroundColor = color;
                    node.classList.add('active-node');
                    node.style.setProperty('--active-color', color);
                } else {
                    node.style.backgroundColor = '#ddd';
                    node.classList.remove('active-node');
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            if (window.innerWidth <= 768) return;

            const container = item.closest('.experience-layout');
            const highlight = container.querySelector('.timeline-highlight');
            const nodes = container.querySelectorAll('.timeline-node');
            const tag = item.querySelector('.exp-tag');

            highlight.style.height = '0';
            highlight.style.opacity = '0';
            if (tag) tag.style.color = '';
            
            nodes.forEach(node => {
                node.style.backgroundColor = '#ddd';
                node.classList.remove('active-node');
            });
        });
    });

    // --- Mobile Scroll Highlighting ---
    if (window.innerWidth <= 768) {
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // Active only in the middle 20% of screen
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const item = entry.target;
                const tag = item.querySelector('.exp-tag');
                
                // Determine index for color cycling
                // Need global index or relative to list? 
                // Let's use the same global calculation if possible or just index in parent
                const parent = item.parentElement;
                const index = Array.from(parent.children).indexOf(item);
                const color = COLORS[index % 3];

                if (entry.isIntersecting) {
                    item.classList.add('mobile-active');
                    item.style.borderColor = color;
                    if (tag) tag.style.color = color;
                } else {
                    item.classList.remove('mobile-active');
                    item.style.borderColor = '#eee'; // Reset to default gray
                    if (tag) tag.style.color = ''; // Reset text
                }
            });
        }, observerOptions);

        const mobileItems = document.querySelectorAll('.experience-item, #research-others-view .research-item');
        mobileItems.forEach(item => observer.observe(item));
    }


    // CSS for JS interactions
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .timeline-node.active-node::before { color: var(--active-color) !important; opacity: 1 !important; }
    `;
    document.head.appendChild(style);

    // --- Mobile Menu Toggle ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
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

    // Close mobile menu when a link is clicked - moved outside to ensure binding
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                if (mobileBtn) {
                    const spans = mobileBtn.querySelectorAll('span');
                    spans.forEach(span => span.style.transform = 'none');
                    spans[1].style.opacity = '1';
                }
            }
        });
    });
});