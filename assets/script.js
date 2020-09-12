// Mobile mode

const mobile = document.querySelector('.mobile');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

mobile.addEventListener("click", function () {
    navLinks.classList.toggle('open')
    links.forEach(function (link) {
        link.classList.toggle('fade');
    })
});

let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let slide of slides) {
        slide.style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add('fade');
    setTimeout(showSlides, 10000); //10s
}

showSlides();


// Kritik dan saran
const ulasan = document.getElementById('form-ulasan');
ulasan.addEventListener("submit", function () {
    // e.preventDefault();
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;

    komentar.nama = nama;
    komentar.email = email;
    komentar.pesan = pesan;

    // objek yang akan dikirimkan sebagai argumen fungsi putHistory()
    putHistory(komentar);
});

const komentar = {
    nama: null,
    email: null,
    pesan: null
}

renderUlasan();

// page-scroll
const scrolls = document.querySelectorAll("nav a");

for (let scroll of scrolls){
    scroll.addEventListener('click', clickHandler)
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    scrollTo({
        top: offsetTop - 70,
        behavior: "smooth",
        duration: 3000
    });
}