const buttonMore = () => {
    const buttonMore = document.querySelector('.add-sentence-btn'),
    isHidden = document.querySelectorAll('.hidden');
    buttonMore.addEventListener('click', () => {
        isHidden.forEach(item => item.classList.toggle('in'));
        buttonMore.style.display = 'none';
    });
};

export default buttonMore;