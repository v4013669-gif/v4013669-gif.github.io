// Schedule page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Simple calendar implementation
    function generateCalendar() {
        const calendarGrid = document.querySelector('.calendar-grid');
        const daysInMonth = 31;
        const startDay = 3; // Wednesday for December 2024
        
        calendarGrid.innerHTML = '';
        
        // Add empty days for start of month
        for (let i = 0; i < startDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day other-month';
            calendarGrid.appendChild(emptyDay);
        }
        
        // Add days of month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;
            
            // Mark days with excursions
            if ([15, 16, 17, 18, 22, 25, 28].includes(day)) {
                dayElement.classList.add('active');
            }
            
            calendarGrid.appendChild(dayElement);
        }
    }
    
    // Filter excursions
    const tourFilter = document.getElementById('tour-filter');
    const excursionCards = document.querySelectorAll('.excursion-card');
    
    tourFilter.addEventListener('change', function() {
        const filterValue = this.value;
        
        excursionCards.forEach(card => {
            if (filterValue === 'all' || card.dataset.tour === filterValue) {
                card.style.display = 'grid';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    generateCalendar();
});