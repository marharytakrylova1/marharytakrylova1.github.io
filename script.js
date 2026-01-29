document.addEventListener('DOMContentLoaded', () => {
    
    // --- Research Section Filtering ---
    const researchFilterBtns = document.querySelectorAll('#research .filter-btn');
    const researchItems = document.querySelectorAll('.research-item');

    researchFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            researchFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            researchItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'none';
                    item.offsetHeight; 
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
            expFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-filter');
            expLists.forEach(list => {
                if (list.id === targetId) {
                    list.style.display = 'flex'; 
                    list.style.animation = 'none';
                    list.offsetHeight; 
                    list.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    list.style.display = 'none';
                }
            });
        });
    });

    // --- Global Timeline Logic ---
    const timelineHighlight = document.querySelector('.timeline-highlight');
    const timelineNodes = document.querySelectorAll('.timeline-node');
    const expItems = document.querySelectorAll('.experience-item');

    const START_YEAR = 2022;
    const END_YEAR = 2027; 
    const TOTAL_MONTHS = (END_YEAR - START_YEAR) * 12; // 60

    const COLORS = ['#e91e63', '#ff9800', '#3498db'];

    function getMonthsFromStart(dateStr) {
        let date;
        if (dateStr.toLowerCase() === 'present') {
            date = new Date();
        } else {
            const [year, month] = dateStr.split('-').map(Number);
            date = new Date(year, month - 1);
        }
        let months = (date.getFullYear() - START_YEAR) * 12 + date.getMonth();
        return months;
    }

    expItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            const startStr = item.getAttribute('data-start');
            const endStr = item.getAttribute('data-end');
            const tag = item.querySelector('.exp-tag');
            
            if (!startStr || !endStr) return;

            let startMonths = getMonthsFromStart(startStr);
            let endMonths = getMonthsFromStart(endStr);

            if (startMonths < 0) startMonths = 0;
            if (endMonths > TOTAL_MONTHS) endMonths = TOTAL_MONTHS;
            
            // Reversed Logic (2022 bottom, 2027 top)
            const startPosPercent = 100 - (startMonths / TOTAL_MONTHS) * 100;
            const endPosPercent = 100 - (endMonths / TOTAL_MONTHS) * 100;

            const top = endPosPercent;
            const height = startPosPercent - endPosPercent;

            const color = COLORS[index % 3];

            // Apply to Highlight Bar
            timelineHighlight.style.top = `${top}%`;
            timelineHighlight.style.height = `${height}%`;
            timelineHighlight.style.backgroundColor = color;
            timelineHighlight.style.opacity = '1';

            // Light up the tag text
            if (tag) tag.style.color = color;

            // Highlight Dots
            timelineNodes.forEach(node => {
                const year = parseInt(node.getAttribute('data-year'));
                const yearMonths = (year - START_YEAR) * 12;
                const nodePosPercent = 100 - (yearMonths / TOTAL_MONTHS) * 100;

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
            const tag = item.querySelector('.exp-tag');
            timelineHighlight.style.height = '0';
            timelineHighlight.style.opacity = '0';
            if (tag) tag.style.color = ''; // Reset
            
            timelineNodes.forEach(node => {
                node.style.backgroundColor = '#ddd';
                node.classList.remove('active-node');
            });
        });
    });

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .timeline-node.active-node::before {
            color: var(--active-color) !important;
            opacity: 1 !important;
        }
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
});
