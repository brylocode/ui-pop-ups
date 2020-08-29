const cookieDemoBtn = document.querySelector('.cookie-demo-js');
const logOutDemoBtn = document.querySelector('.log-out-demo-js');
const cookieModal = document.querySelector('.cookie-modal-js');
const logOutModal = document.querySelector('.log-out-modal-js');
const closeBtns = document.querySelectorAll('.pop-up__close');

const openCookieModal = () => {
    cookieModal.classList.add('pop-up--active')

}
const openLogOutModal = () => {
    logOutModal.classList.add('pop-up--active')
}

const closeModal = (btn) => {
    btn.parentElement.classList.remove('pop-up--active');
}

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn))
})


cookieDemoBtn.addEventListener('click', openCookieModal)
logOutDemoBtn.addEventListener('click', openLogOutModal)