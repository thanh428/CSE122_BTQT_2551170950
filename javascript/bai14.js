document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById('bannerTitle');
    banner.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#1b5e20';
    });
    banner.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#2E7D32';
    });

    const images = document.querySelectorAll('.wonder-img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            const title = this.closest('.wonder-card').querySelector('.wonder-title').innerText;
            alert(`Bạn đang xem hình ảnh chi tiết của: ${title}`);
        });
    });
});