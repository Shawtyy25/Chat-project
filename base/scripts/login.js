export function Themes(){
    document.addEventListener('DOMContentLoaded', () => {
        const checkBox = document.getElementById('darkmode-toggle');
        const wrapper = document.querySelector('.wrapper');
        const loginBox = document.querySelector('.login');
        const textContent = document.querySelector('.LoginTextContent');
        const button = document.querySelector('.button a');
        const body = document.querySelector('body')

        const progressFill = document.querySelector(".progress-fill");
        const loadingText = document.querySelector(".loading-text");
        const Loadingwrapper = document.querySelector('.loadingScreenWrapper')
  
        const input = document.querySelector('#user')
    

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
            body.style.backgroundColor = '#fff'
        
            Loadingwrapper.classList.remove('dark');
            Loadingwrapper.classList.add('light');
        }
        
        function applyDarkMode() {
            wrapper.classList.remove('wrapperLight');
            wrapper.classList.add('wrapperDark');
            loginBox.style.backgroundColor = 'var(--login-box-dark)';
            textContent.style.color = 'var(--text-color-dark)';
            button.style.backgroundColor = 'var(--button-bg-dark)';
            body.style.backgroundColor = '#1C1C1C'
            
            Loadingwrapper.classList.remove('light');
            Loadingwrapper.classList.add('dark');

        }
    });
    
}

