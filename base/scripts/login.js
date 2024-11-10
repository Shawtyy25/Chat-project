export function Login(){
    document.addEventListener('DOMContentLoaded', () => {
        const checkBox = document.getElementById('darkmode-toggle');
        const wrapper = document.querySelector('.wrapper');
        const loginBox = document.querySelector('.login');
        const textContent = document.querySelector('.textContent');
        const button = document.querySelector('.button a');
    
        // Initial mode (light mode)
        let LightMode = true;
    
        // Check the current theme based on checkbox state
        if (checkBox.checked) {
            LightMode = false;
            applyDarkMode();
        } else {
            applyLightMode();
        }
    
        // Add event listener for checkbox change
        checkBox.addEventListener('change', () => {
            if (checkBox.checked) {
                LightMode = false;
                applyDarkMode();
            } else {
                LightMode = true;
                applyLightMode();
            }
        });
    
        // Function to apply light mode styles
        function applyLightMode() {
            wrapper.classList.remove('wrapperDark');
            wrapper.classList.add('wrapperLight');
            loginBox.style.backgroundColor = 'var(--login-box-light)';
            textContent.style.color = 'var(--text-color-light)';
            button.style.backgroundColor = 'var(--button-bg-light)';
        }
    
        // Function to apply dark mode styles
        function applyDarkMode() {
            wrapper.classList.remove('wrapperLight');
            wrapper.classList.add('wrapperDark');
            loginBox.style.backgroundColor = 'var(--login-box-dark)';
            textContent.style.color = 'var(--text-color-dark)';
            button.style.backgroundColor = 'var(--button-bg-dark)';
        }
    });
    
}
