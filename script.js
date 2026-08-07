const modal = document.querySelector('#modal');
const contactBtn = document.querySelector('#contactbtn');
const closeBtn = document.querySelector('#closebtn');

/* 모달을 연다 */
function openModal() {
    modal.classList.add('is-open');
}

/* 모달을 닫는다 */
function closeModal() {
    modal.classList.remove('is-open');
}

contactBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

/* 배경(오버레이)을 클릭하면 모달을 닫는다 */
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

/* Esc 키를 누르면 모달을 닫는다 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
    }
});
