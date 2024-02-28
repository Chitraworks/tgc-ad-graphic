window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let scrollPosition = window.scrollY;
    let headerHeight = header.offsetHeight;

    if (scrollPosition > headerHeight) {
        header.style.backgroundColor = '#010010';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});