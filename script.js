// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Increase text size functionality
    const increaseFontBtn = document.createElement('button');
    increaseFontBtn.innerHTML = 'A+';
    increaseFontBtn.className = 'font-size-btn increase';
    increaseFontBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 18px;
        z-index: 1000;
    `;
    document.body.appendChild(increaseFontBtn);

    const decreaseFontBtn = document.createElement('button');
    decreaseFontBtn.innerHTML = 'A-';
    decreaseFontBtn.className = 'font-size-btn decrease';
    decreaseFontBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 80px;
        padding: 10px 15px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 18px;
        z-index: 1000;
    `;
    document.body.appendChild(decreaseFontBtn);

    let currentFontSize = 18;
    
    increaseFontBtn.addEventListener('click', () => {
        if (currentFontSize < 24) {
            currentFontSize += 2;
            document.body.style.fontSize = currentFontSize + 'px';
        }
    });

    decreaseFontBtn.addEventListener('click', () => {
        if (currentFontSize > 16) {
            currentFontSize -= 2;
            document.body.style.fontSize = currentFontSize + 'px';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Login button functionality
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            // Simple login modal
            const modal = document.createElement('div');
            modal.className = 'login-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <h2>Login to Mitrayug</h2>
                    <form id="loginForm">
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" id="password" required>
                        </div>
                        <button type="submit">Login</button>
                        <button type="button" class="close-modal">Cancel</button>
                    </form>
                </div>
            `;
            
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1001;
            `;
            
            document.body.appendChild(modal);

            // Close modal functionality
            modal.querySelector('.close-modal').addEventListener('click', () => {
                modal.remove();
            });

            // Login form submission
            modal.querySelector('#loginForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const email = modal.querySelector('#email').value;
                const password = modal.querySelector('#password').value;
                
                // Here you would typically handle the login logic
                console.log('Login attempted with:', email);
                alert('Login functionality will be implemented soon!');
                modal.remove();
            });
        });
    }

    // Add hover effect to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}); 