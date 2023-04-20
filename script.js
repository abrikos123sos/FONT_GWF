function slideShow() {
    setTimeout(slideShow, 5000);
    let i;
    const img = document.querySelectorAll('.picture_sliders');
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