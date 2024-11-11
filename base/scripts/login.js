export function Themes(){
    document.addEventListener('DOMContentLoaded', () => {
        const checkBox = document.getElementById('darkmode-toggle');
        const wrapper = document.querySelector('.wrapper');
        const loginBox = document.querySelector('.login');
        const textContent = document.querySelector('.LoginTextContent');
        const button = document.querySelector('.button a');

        let LightMode = true;
    
        if (checkBox.checked) {
            LightMode = false;
            applyDarkMode();
        } else {
            applyLightMode();
        }
    
        checkBox.addEventListener('change', () => {
            if (checkBox.checked) {
                LightMode = false;
                applyDarkMode();
            } else {
                LightMode = true;
                applyLightMode();
            }
        });
    
        function applyLightMode() {
            wrapper.classList.remove('wrapperDark');
            wrapper.classList.add('wrapperLight');
            loginBox.style.backgroundColor = 'var(--login-box-light)';
            textContent.style.color = 'var(--text-color-light)';
            button.style.backgroundColor = 'var(--button-bg-light)';
        }
    
        function applyDarkMode() {
            wrapper.classList.remove('wrapperLight');
            wrapper.classList.add('wrapperDark');
            loginBox.style.backgroundColor = 'var(--login-box-dark)';
            textContent.style.color = 'var(--text-color-dark)';
            button.style.backgroundColor = 'var(--button-bg-dark)';
        }
    });
    
}

