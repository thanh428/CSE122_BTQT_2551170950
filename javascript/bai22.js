const themeSwitch = document.getElementById('themeSwitch');
const statusText = document.getElementById('statusText');

themeSwitch.addEventListener('change', function() {
    document.body.classList.toggle('toi', this.checked);
    if (this.checked) {
        statusText.textContent = 'Đây là giao diện ở chế độ TỐI (đang bật).';
    } else {
        statusText.textContent = 'Đây là giao diện ở chế độ SÁNG (đang bật).';
    }
});