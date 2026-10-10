document.getElementById('btnPrint').addEventListener('click', function() {
    // Lấy giá trị từ các ô input
    let dayVal = parseInt(document.getElementById('inputDay').value);
    let monthVal = parseInt(document.getElementById('inputMonth').value);
    let yearVal = parseInt(document.getElementById('inputYear').value);

    if (isNaN(dayVal) || isNaN(monthVal) || isNaN(yearVal)) {
        alert("Vui lòng nhập đầy đủ ngày, tháng, năm!");
        return;
    }

    let dateObj = new Date(yearVal, monthVal - 1, dayVal);

    if (dateObj.getFullYear() !== yearVal || dateObj.getMonth() !== monthVal - 1 || dateObj.getDate() !== dayVal) {
        alert("Ngày tháng năm không hợp lệ!");
        return;
    }

    document.getElementById('yearDisplay').innerText = yearVal;

    document.getElementById('monthDisplay').innerText = "Tháng " + monthVal;

    document.getElementById('dayDisplay').innerText = dayVal;

    let dayOfWeek = dateObj.getDay(); // 0 là Chủ nhật, 1 là Thứ hai, ...
    let weekdayNames = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
    document.getElementById('weekdayDisplay').innerText = weekdayNames[dayOfWeek];

    let currentHour = new Date().getHours();
    let greetingText = "";

    if (currentHour >= 4 && currentHour < 11) {
        greetingText = "Chào buổi sáng!";
    } else if (currentHour >= 11 && currentHour < 13) {
        greetingText = "Chào buổi trưa!";
    } else if (currentHour >= 13 && currentHour < 18) {
        greetingText = "Chào buổi chiều!";
    } else {
        greetingText = "Chào buổi tối!";
    }

    document.getElementById('greetingDisplay').innerText = greetingText;
});