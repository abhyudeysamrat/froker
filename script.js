// scripts.js

let currentPage = 0;
const pages = document.querySelectorAll('.slider-page');
const totalPages = pages.length;

function updateSlider() {
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transform = `translateX(-${currentPage * 100}%)`;
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        currentPage++;
    } else {
        currentPage = 0;
    }
    updateSlider();
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
    } else {
        currentPage = totalPages - 1;
    }
    updateSlider();
}

function readMore(button) {
    const fullText = button.nextElementSibling;
    if (fullText.style.display === 'none') {
        fullText.style.display = 'block';
        button.textContent = 'Read Less';
    } else {
        fullText.style.display = 'none';
        button.textContent = 'Read More';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateSlider();
});
