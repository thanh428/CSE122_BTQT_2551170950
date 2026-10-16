document.addEventListener("DOMContentLoaded", () => {
    const carouselElement = document.querySelector('#destinationCarousel');
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            interval: 3000,
            ride: 'carousel'
        });
    }
});