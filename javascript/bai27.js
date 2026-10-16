const detailModal = document.getElementById('detailModal');
if (detailModal) {
    detailModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const title = button.getAttribute('data-title');
        const desc = button.getAttribute('data-desc');

        const modalTitle = detailModal.querySelector('.modal-title');
        const modalBodyDesc = detailModal.querySelector('#modalDescription');

        modalTitle.textContent = title;
        modalBodyDesc.textContent = desc;
    });
}