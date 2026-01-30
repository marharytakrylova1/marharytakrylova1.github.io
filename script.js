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

    // --- Global Timeline Logic (Apply to both sections) ---
    // Experience timeline: 2022-2027
    // Research timeline: 2022-2027 (Updated to cover 2022 start dates)
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
        // Clamp min date
        if (date.getFullYear() < startYear) {
             // If experience started before timeline, just show from start of timeline
             // return negative months which will be clamped to 0 later
        }
        let months = (date.getFullYear() - startYear) * 12 + date.getMonth();
        return months;
    }

    const allExpItems = document.querySelectorAll('.experience-item');

    allExpItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            const startStr = item.getAttribute('data-start');
            const endStr = item.getAttribute('data-end');
            const tag = item.querySelector('.exp-tag');
            
            if (!startStr || !endStr) return;

            // Find the LOCAL timeline container for this section
            const container = item.closest('.experience-layout');
            const highlight = container.querySelector('.timeline-highlight');
            const nodes = container.querySelectorAll('.timeline-node');

            // Determine context (Research or Experience)
            const isResearch = container.classList.contains('research-timeline') || container.querySelector('.research-timeline') || item.closest('#research');
            // Actually check if the container ITSELF has the marker or is inside #research
            // In HTML: <div class="global-timeline-container research-timeline">
            // But item.closest('.experience-layout') finds the wrapper. 
            // The wrapper contains the timeline container.
            
            const timelineContainer = container.querySelector('.global-timeline-container');
            const isResearchTimeline = timelineContainer.classList.contains('research-timeline') || item.closest('#research-projects-view');

            const startYear = isResearchTimeline ? RES_START_YEAR : EXP_START_YEAR;
            const totalMonths = (END_YEAR - startYear) * 12;

            let startMonths = getMonthsFromStart(startStr, startYear);
            let endMonths = getMonthsFromStart(endStr, startYear);

            if (startMonths < 0) startMonths = 0;
            if (endMonths > totalMonths) endMonths = totalMonths;
            // If completely out of range (e.g. ended before startYear), it stays 0 height.
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

                // Tolerance for hitting the node
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
