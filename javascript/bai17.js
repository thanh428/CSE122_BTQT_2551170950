function kiemTraForm() {
            let txtName = document.getElementById("txtName");
            let txtEmail = document.getElementById("txtEmail");
            let txtPassword = document.getElementById("txtPassword");
            let txtConfirmPassword = document.getElementById("txtConfirmPassword");

            let nameError = document.getElementById("nameError");
            let nameSuccess = document.getElementById("nameSuccess");

            let emailError = document.getElementById("emailError");
            let emailSuccess = document.getElementById("emailSuccess");

            let passError = document.getElementById("passError");

            let confirmError = document.getElementById("confirmError");
            let confirmSuccess = document.getElementById("confirmSuccess");

            let isValid = true;

            let nameVal = txtName.value.trim();
            if (nameVal === "") {
                txtName.classList.add("input-error");
                txtName.classList.remove("input-success");
                nameError.innerText = "✗ Họ và tên không được để trống";
                nameError.style.display = "block";
                nameSuccess.style.display = "none";
                isValid = false;
            } else {
                txtName.classList.remove("input-error");
                txtName.classList.add("input-success");
                nameError.style.display = "none";
                nameSuccess.style.display = "block";
            }

            let emailVal = txtEmail.value.trim();
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailVal === "") {
                txtEmail.classList.add("input-error");
                txtEmail.classList.remove("input-success");
                emailError.innerText = "✗ Email không được để trống";
                emailError.style.display = "block";
                emailSuccess.style.display = "none";
                isValid = false;
            } else if (!emailPattern.test(emailVal)) {
                txtEmail.classList.add("input-error");
                txtEmail.classList.remove("input-success");
                
                if (!emailVal.includes("@")) {
                    emailError.innerText = "✗ Email không hợp lệ (thiếu ký tự @)";
                } else {
                    emailError.innerText = "✗ Email không hợp lệ (thiếu tên miền)";
                }
                emailError.style.display = "block";
                emailSuccess.style.display = "none";
                isValid = false;
            } else {
                txtEmail.classList.remove("input-error");
                txtEmail.classList.add("input-success");
                emailError.style.display = "none";
                emailSuccess.style.display = "block";
            }

            let passVal = txtPassword.value;
            if (passVal.length < 6) {
                txtPassword.classList.add("input-error");
                txtPassword.classList.remove("input-success");
                passError.innerText = "✗ Mật khẩu phải có ít nhất 6 ký tự";
                passError.style.display = "block";
                isValid = false;
            } else {
                txtPassword.classList.remove("input-error");
                txtPassword.classList.add("input-success");
                passError.style.display = "none";
            }

            let confirmVal = txtConfirmPassword.value;
            if (confirmVal === "") {
                txtConfirmPassword.classList.add("input-error");
                txtConfirmPassword.classList.remove("input-success");
                confirmError.innerText = "✗ Xác nhận mật khẩu không được để trống";
                confirmError.style.display = "block";
                confirmSuccess.style.display = "none";
                isValid = false;
            } else if (confirmVal !== passVal) {
                txtConfirmPassword.classList.add("input-error");
                txtConfirmPassword.classList.remove("input-success");
                confirmError.innerText = "✗ Xác nhận mật khẩu không khớp";
                confirmError.style.display = "block";
                confirmSuccess.style.display = "none";
                isValid = false;
            } else {
                txtConfirmPassword.classList.remove("input-error");
                txtConfirmPassword.classList.add("input-success");
                confirmError.style.display = "none";
                confirmSuccess.style.display = "block";
            }

            return isValid;
        }