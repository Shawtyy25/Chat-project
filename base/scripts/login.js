export function addClass(event) {
    event.preventDefault();
    const themeSelectorButton = document.querySelector('.theme-selector a');
    const themeSelectorText = document.querySelector('.theme-selector a h5');
    const wrapper = document.querySelector('.wrapper')
    if (themeSelectorText.innerHTML === 'Dark') {
        themeSelectorText.innerHTML = 'White';
        wrapper.classList.remove('wrapperDark')
        wrapper.classList.add('wrapperLight')
        themeSelectorButton.classList.remove('animationForward');
        themeSelectorButton.classList.add('animationBackward');
    } else {
        themeSelectorText.innerHTML = 'Dark';
        wrapper.classList.remove('wrapperLight')
        wrapper.classList.add('wrapperDark')
        themeSelectorButton.classList.remove('animationBackward');
        themeSelectorButton.classList.add('animationForward');
    }
}
