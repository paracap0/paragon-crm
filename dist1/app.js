document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(link => link.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active-section'));
            
            // Add active class to clicked link and corresponding section
            this.classList.add('active');
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active-section');
        });
    });
    
    // Settings navigation
    const settingsLinks = document.querySelectorAll('.settings-sidebar ul li a');
    const settingsPanels = document.querySelectorAll('.settings-panel');
    
    settingsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and panels
            document.querySelectorAll('.settings-sidebar ul li').forEach(li => li.classList.remove('active'));
            settingsPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked link and corresponding panel
            this.parentElement.classList.add('active');
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // Backend connection status check
    const backendUrl = 'https://paragon-crm-api.herokuapp.com/';
    const placeholders = document.querySelectorAll('.placeholder-message');
    
    // Display backend URL in placeholders
    placeholders.forEach(placeholder => {
        const urlElement = placeholder.querySelector('p:last-child');
        if (urlElement) {
            urlElement.textContent = `Backend URL: ${backendUrl}`;
        }
    });
    
    // Simulate API calls (in a real app, these would be actual fetch calls)
    function checkBackendConnection() {
        console.log(`Checking connection to backend at: ${backendUrl}`);
        // In a real app, this would be:
        // fetch(backendUrl + '/api/status')
        //   .then(response => response.json())
        //   .then(data => console.log('Backend status:', data))
        //   .catch(error => console.error('Backend connection error:', error));
    }
    
    // Check connection on page load
    checkBackendConnection();
    
    // Form submission handlers
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted:', this);
            // In a real app, this would send the form data to the backend
        });
    });
    
    // Button click handlers
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Button clicked:', this.textContent);
            // In a real app, this would perform the corresponding action
        });
    });
});
