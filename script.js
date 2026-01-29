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

    // Timeline Settings
    const START_YEAR = 2022;
    const END_YEAR = 2027; 
    const TOTAL_YEARS = END_YEAR - START_YEAR; // 5
    const TOTAL_MONTHS = TOTAL_YEARS * 12; // 60

    const COLORS = ['#e91e63', '#ff9800', '#3498db'];

    function getMonthsFromStart(dateStr) {
        let date;
        if (dateStr.toLowerCase() === 'present') {
            date = new Date();
        } else {
            // dateStr is "YYYY-MM"
            const [year, month] = dateStr.split('-').map(Number);
            date = new Date(year, month - 1);
        }

        // Clamp date to timeline range
        const startEpoch = new Date(START_YEAR, 0, 1); // Jan 1 2022
        
        // Calculate month difference
        let months = (date.getFullYear() - START_YEAR) * 12 + date.getMonth();
        return months;
    }

    expItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            const startStr = item.getAttribute('data-start');
            const endStr = item.getAttribute('data-end');
            
            if (!startStr || !endStr) return;

            let startMonths = getMonthsFromStart(startStr);
            let endMonths = getMonthsFromStart(endStr);

            // Bounds checking (0 to 60)
            if (startMonths < 0) startMonths = 0;
            if (endMonths > TOTAL_MONTHS) endMonths = TOTAL_MONTHS;
            
            const duration = endMonths - startMonths;
            
            // Calculate percentages
            const topPercent = (startMonths / TOTAL_MONTHS) * 100;
            const heightPercent = (duration / TOTAL_MONTHS) * 100;

            // Pick color based on index (simulating 3n+1 etc)
            // Note: index is global across all tabs, which is fine, or reset per tab? Global is cooler.
            // But visually items are styled 3n+1. Let's try to match logic or just cycle.
            // We need to know which color CSS would apply. 
            // CSS selector is .experience-item:nth-child(3n+1). This counts within parent.
            // Let's deduce color from computed style or just hardcode cycle logic based on visible index?
            // Simple cycle:
            const color = COLORS[index % 3];

            // Apply to Highlight Bar
            timelineHighlight.style.top = `${topPercent}%`;
            timelineHighlight.style.height = `${heightPercent}%`;
            timelineHighlight.style.backgroundColor = color;
            timelineHighlight.style.boxShadow = `0 0 10px ${color}80`; // Glow

            // Highlight Dots
            // A dot is at year X. Year X is (X - START_YEAR)*12 months from start.
            // Dot Y% = ((Year - Start) / TotalYears) * 100.
            // Check if Dot Y% is within [topPercent, topPercent + heightPercent]
            
            timelineNodes.forEach(node => {
                const year = parseInt(node.getAttribute('data-year'));
                const yearMonths = (year - START_YEAR) * 12;
                const yearPercent = (yearMonths / TOTAL_MONTHS) * 100;

                // Tolerance for "highlighting the dot":
                // If the range COVERS the dot, or touches it significantly.
                // Simple overlap check:
                // Range: [topPercent, topPercent + heightPercent]
                // Dot is at yearPercent.
                // However, dot represents a specific point (Jan 1).
                // If highlight includes Jan 1 of that year, light it up.
                
                if (yearPercent >= topPercent && yearPercent <= (topPercent + heightPercent)) {
                    node.style.backgroundColor = color;
                    node.style.transform = 'translateX(-50%) scale(1.4)';
                    node.style.boxShadow = `0 0 0 4px white, 0 0 0 6px ${color}40`;
                    // Color the text label via style? Pseudo-elements are hard to style via JS inline.
                    // We can add a class.
                    node.classList.add('active-node');
                    // We need a way to pass color to the pseudo element or just color the text if it was real element.
                    // CSS solution: .timeline-node.active-node::before { color: var(--active-color) }
                    node.style.setProperty('--active-color', color);
                } else {
                    // Reset
                    node.style.backgroundColor = '#ccc';
                    node.style.transform = 'translateX(-50%) scale(1)';
                    node.style.boxShadow = 'none';
                    node.classList.remove('active-node');
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            // Reset Highlight
            timelineHighlight.style.height = '0';
            timelineHighlight.style.opacity = '0';
            
            // Reset Dots
            timelineNodes.forEach(node => {
                node.style.backgroundColor = '#ccc';
                node.style.transform = 'translateX(-50%) scale(1)';
                node.style.boxShadow = 'none';
                node.classList.remove('active-node');
            });
            
            // Allow transition to fade out
            setTimeout(() => {
                timelineHighlight.style.opacity = '1'; // Reset for next hover
            }, 300);
        });
    });

    // Add CSS keyframe for fade in if not present
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .timeline-node.active-node::before {
            color: var(--active-color) !important;
            font-weight: 800;
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