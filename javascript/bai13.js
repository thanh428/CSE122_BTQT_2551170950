function capNhatDongHo() {
    var bayGioc = new Date();
    var gio = bayGioc.getHours();
    var phut = bayGioc.getMinutes();
    var giay = bayGioc.getSeconds();

    var chuoiGio = gio < 10 ? "0" + gio : "" + gio;
    var chuoiPhut = phut < 10 ? "0" + phut : "" + phut;
    var chuoiGiay = giay < 10 ? "0" + giay : "" + giay;

    var arrAnh = [
        "images/00.gif",
        "images/01.gif",
        "images/02.gif",
        "images/03.gif",
        "images/04.gif",
        "images/05.gif",
        "images/06.gif",
        "images/07.gif",
        "images/08.gif",
        "images/09.gif"
    ];

    document.getElementById("h1").src = arrAnh[parseInt(chuoiGio.charAt(0))];
    document.getElementById("h2").src = arrAnh[parseInt(chuoiGio.charAt(1))];
    document.getElementById("m1").src = arrAnh[parseInt(chuoiPhut.charAt(0))];
    document.getElementById("m2").src = arrAnh[parseInt(chuoiPhut.charAt(1))];
    document.getElementById("s1").src = arrAnh[parseInt(chuoiGiay.charAt(0))];
    document.getElementById("s2").src = arrAnh[parseInt(chuoiGiay.charAt(1))];

    var loiChao = "";
    if (gio >= 4 && gio < 11) {
        loiChao = "Chào buổi sáng";
    } else if (gio >= 11 && gio < 13) {
        loiChao = "Chào buổi trưa";
    } else if (gio >= 13 && gio < 18) {
        loiChao = "Chào buổi chiều";
    } else {
        loiChao = "Chào buổi tối";
    }

    document.getElementById("loiChao").innerText = loiChao;
}

setInterval(capNhatDongHo, 1000);
capNhatDongHo();