//Скролл top
const scrollBtn = document.querySelector('.isShowBtn');
window.onscroll = () => {
    if (window.scrollY > 700) {
        document.querySelector('.isShowBtn').classList.remove('isShowBtn_hide');
    } else if (window.scrollY > 100) {
        document.querySelector('.isShowBtn').classList.add('isShowBtn_hide');
    };
    scrollBtn.onclick = () => {
        window.scrollTo(0, 0);
    }
};

// Автоматический слайдер
let changePhoto = 0;

function slideShow() {
    setTimeout(slideShow, 1000);
    const img = document.querySelectorAll('.icons-1');
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    changePhoto++;
    if (changePhoto > img.length) {
        changePhoto = 1;
    }
    img[changePhoto - 1].style.display = "block";
}
slideShow();