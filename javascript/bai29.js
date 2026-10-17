const studentData = {
    1: [
        { id: 1, code: "2251060001", name: "Nguyễn Văn An", class: "67CNTT1", score: "8.5", status: "Đạt" },
        { id: 2, code: "2251060002", name: "Trần Thị Bình", class: "67CNTT1", score: "7.0", status: "Đạt" },
        { id: 3, code: "2251060003", name: "Lê Minh Cường", class: "67CNTT2", score: "5.5", status: "Thi lại" },
        { id: 4, code: "2251060004", name: "Phạm Thu Dung", class: "67KTPM1", score: "9.0", status: "Đạt" },
        { id: 5, code: "2251060005", name: "Hoàng Gia Hân", class: "67KTPM1", score: "6.5", status: "Đạt" }
    ],
    2: [
        { id: 6, code: "2251060006", name: "Vũ Hoàng Long", class: "67CNTT2", score: "4.0", status: "Thi lại" },
        { id: 7, code: "2251060007", name: "Đặng Mỹ Linh", class: "67KTPM2", score: "8.2", status: "Đạt" },
        { id: 8, code: "2251060008", name: "Bùi Văn Nam", class: "67CNTT1", score: "7.8", status: "Đạt" },
        { id: 9, code: "2251060009", name: "Đỗ Thị Quỳnh", class: "67KTPM1", score: "3.5", status: "Thi lại" },
        { id: 10, code: "2251060010", name: "Ngoại Văn Phú", class: "67CNTT2", score: "9.5", status: "Đạt" }
    ],
    3: [
        { id: 11, code: "2251060011", name: "Ngô Tấn Tài", class: "67KTPM2", score: "6.0", status: "Đạt" },
        { id: 12, code: "2251060012", name: "Dương Khánh Vân", class: "67CNTT1", score: "8.8", status: "Đạt" },
        { id: 13, code: "2251060013", name: "Lý Triệu Vũ", class: "67KTPM1", score: "4.8", status: "Thi lại" },
        { id: 14, code: "2251060014", name: "Nguyễn Hải Yến", class: "67CNTT2", score: "7.5", status: "Đạt" },
        { id: 15, code: "2251060015", name: "Trịnh Xuân Sơn", class: "67KTPM2", score: "8.0", status: "Đạt" }
    ]
};

let currentPage = 1;
const totalPages = 3;

function renderTable(page) {
    const tbody = document.getElementById('studentTableBody');
    tbody.innerHTML = '';

    const list = studentData[page] || [];
    list.forEach(sv => {
        const tr = document.createElement('tr');
        const badgeClass = sv.status === 'Đạt' ? 'badge-dat' : 'badge-thi-lai';

        tr.innerHTML = `
            <th scope="row" class="fw-normal">${sv.id}</th>
            <td>${sv.code}</td>
            <td class="fw-medium">${sv.name}</td>
            <td>${sv.class}</td>
            <td class="text-center-col">${sv.score}</td>
            <td><span class="badge ${badgeClass}">${sv.status}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

function renderPagination() {
    const paginationEl = document.getElementById('pagination');
    paginationEl.innerHTML = '';

    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
    prevLi.innerHTML = `<a class="page-link" href="#" aria-label="Previous">&laquo;</a>`;
    prevLi.onclick = (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            updateView();
        }
    };
    paginationEl.appendChild(prevLi);

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        li.onclick = (e) => {
            e.preventDefault();
            currentPage = i;
            updateView();
        };
        paginationEl.appendChild(li);
    }

    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
    nextLi.innerHTML = `<a class="page-link" href="#" aria-label="Next">&raquo;</a>`;
    nextLi.onclick = (e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            updateView();
        }
    };
    paginationEl.appendChild(nextLi);
}

function updateView() {
    renderTable(currentPage);
    renderPagination();
}

document.addEventListener('DOMContentLoaded', updateView);