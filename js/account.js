// Account page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation between sections
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Show corresponding content section
            const target = this.getAttribute('href').substring(1);
            document.getElementById(`${target}-content`).classList.add('active');
        });
    });
    
    // Booking filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    const bookingCards = document.querySelectorAll('.booking-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.textContent.toLowerCase();
            
            bookingCards.forEach(card => {
                const status = card.querySelector('.booking-status span').textContent.toLowerCase();
                
                if (filter === 'все' || 
                    (filter === 'предстоящие' && (status === 'подтверждено' || status === 'ожидание')) ||
                    (filter === 'завершенные' && status === 'завершено')) {
                    card.style.display = 'grid';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Profile form submission
    const profileForm = document.querySelector('.profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Изменения профиля сохранены!');
        });
    }
});