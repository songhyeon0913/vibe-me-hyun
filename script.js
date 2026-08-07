const modal = document.querySelector('#modal');
const contactBtn = document.querySelector('#contactbtn');
const closeBtn = document.querySelector('#closebtn');
const themeToggle = document.querySelector('#themeToggle');

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

/* 저장된 테마 또는 시스템 설정을 반영한다 */
function getPreferredTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/* 테마를 적용하고 저장한다 */
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
        themeColor.setAttribute('content', theme === 'dark' ? '#0f1524' : '#2f59c4');
    }
}

setTheme(getPreferredTheme());

/* 테마 버튼을 누르면 라이트/다크를 바꾼다 */
themeToggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
});
