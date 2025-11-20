// Registration form functionality
document.addEventListener('DOMContentLoaded', function() {
    const participantsSelect = document.getElementById('participants');
    const participantsCount = document.getElementById('participants-count');
    const totalPrice = document.getElementById('total-price');
    const pricePerPerson = 1500;

    function updateSummary() {
        const count = parseInt(participantsSelect.value) || 1;
        const total = count * pricePerPerson;
        
        participantsCount.textContent = count;
        totalPrice.textContent = `₽${total}`;
    }

    participantsSelect.addEventListener('change', updateSummary);
    
    // Form submission
    const form = document.querySelector('.registration-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Бронирование успешно завершено! С вами свяжутся для подтверждения.');
        // In real app, would send data to server
    });
});