let signupButton = document.getElementById("signup-btn");
let loginButton = document.getElementById("login-btn");
let overlay = document.getElementById("overlay");
let formsigin = document.getElementById("form-login");
let formsignup = document.getElementById("form-signup");
let signupLink = document.getElementById("signup-link");
let signinLink = document.getElementById("signin-link");
let successBox = document.getElementById("popupSuccess");


signupLink.addEventListener("click", () => {
    overlay.style.display = "block";
    formsignup.style.display = "block";
    formsignup.style.animationName = "appearEffect";
    formsigin.style.display = "none";

})

signinLink.addEventListener("click", () => {
    overlay.style.display = "block";
    formsigin.style.display = "block";
    formsigin.style.animationName = "appearEffect";
    formsignup.style.display = "none";
})


signupButton.addEventListener("click", () => {
    overlay.style.display = "block";
    formsignup.style.display = "block";
    formsignup.style.animationName = "appearEffect";

})

loginButton.addEventListener("click", () => {
    overlay.style.display = "block";
    formsigin.style.display = "block";
    formsigin.style.animationName = "appearEffect";
});

function Exit(timeDisappear = 350) {
    overlay.style.display = "none";
    formsigin.style.animationName = "disappearEffect";
    formsignup.style.animationName = "disappearEffect";
    successBox.style.animationName = "disappearEffectSuccess";
    setTimeout(() => {
        formsignup.style.display = "none";
        formsigin.style.display = "none";
        successBox.style.display = "none";

        successBox.style.animationName = "";
    }, timeDisappear);
}



/* ====================MAIN CONTENT========================== */




/* ====================MAIN CONTENT========================== */

const LIST_USERS = "LIST_USERS"
let arrListUsers = [];

let outputSuccess = document.getElementById("outputSuccess");

function checkExist(arrListUsers, User) {
    for (let user of arrListUsers) {
        if (User.Email === user.Email)
            return false;
    }
    return true;
}

function checkAuthen(arrListUsers, username, password) {
    //Nếu đúng cả user lẫn password
    for (let user of arrListUsers) {
        if (user.Email === username && user.Password === password) {
            user.LoginStatus = true;
            return 1;
        }
    }

    let tempFlag = false;
    for (let user of arrListUsers) {
        if (user.Email === username) {
            tempFlag = true;
            break;
        }
    }
    // User không tồn tại
    if (tempFlag == false) {
        return 2;
    }
    // Password không hợp lệ
    else {
        return 3;
    }
}


const nameUser = document.getElementById("Name");
const emailUser = document.getElementById("Email");
const passwordUser = document.getElementById("Password");
const retypePasswordUser = document.getElementById("retypePassword");
let User = {
    Name: ' ',
    Email: ' ',
    Password: ' ',
    LoginStatus: false
}

emailUser.addEventListener('input', () => {
    emailUser.style.border = "1px solid rgb(127, 127, 127)";
    document.getElementsByClassName("messageErrorEmail")[0].innerText = ""

});

retypePasswordUser.addEventListener('input', () => {
    retypePasswordUser.style.border = "1px solid rgb(127, 127, 127)";
    document.getElementsByClassName("messageErrorPassword")[0].innerText = ""
})


formsignup.addEventListener("submit", function(event) {
    event.preventDefault();

    User = {
        Name: nameUser.value,
        Email: emailUser.value,
        Password: passwordUser.value,
        LoginStatus: false,
    }

    let UserInLocalStorage = JSON.parse(localStorage.getItem(LIST_USERS)) || [];

    //Lấy các đối tượng trong localStorage lưu vào mảng arrListUsers
    if (UserInLocalStorage) {
        arrListUsers = UserInLocalStorage;
        if (!Array.isArray(arrListUsers)) {
            arrListUsers = [arrListUsers];
        }
    }
    if (checkExist(UserInLocalStorage, User) && retypePasswordUser.value == passwordUser.value) {

        //Đây User mới nhập vào mảng arrListUsers
        arrListUsers.push(User)

        //Lưu mảng arrListUsers xuống arrListUsers
        localStorage.setItem(LIST_USERS, JSON.stringify(arrListUsers));

        // Reset form
        nameUser.value = "";
        emailUser.value = "";
        passwordUser.value = "";
        retypePasswordUser.value = "";
        // retypePasswordUser.style.border = "1px solid rgb(81, 81, 250)";

        // Đóng form và popup 1 thông báo đăng kí thành công 
        formsignup.style.display = "none";
        outputSuccess.innerText = "Đăng kí thành công!";
        successBox.style.display = "block";

    } else if (!checkExist(UserInLocalStorage, User) && retypePasswordUser.value != passwordUser.value) {
        emailUser.style.border = "1px solid red";
        document.getElementsByClassName("messageErrorEmail")[0].innerText = "*Email đã được sử dụng!"
        retypePasswordUser.style.border = "1px solid red";
        document.getElementsByClassName("messageErrorPassword")[0].innerText = "*Password nhập lại không khớp!"
    } else if (retypePasswordUser.value !== passwordUser.value) {
        retypePasswordUser.style.border = "1px solid red";
        document.getElementsByClassName("messageErrorPassword")[0].innerText = "*Password nhập lại không khớp!"
    } else {
        emailUser.style.border = "1px solid red";
        document.getElementsByClassName("messageErrorEmail")[0].innerText = "*Email đã được sử dụng!"
    }

})


function checkAuthen(arrListUsers, username, password) {
    //Nếu đúng cả user lẫn password
    for (let user of arrListUsers) {
        if (user.Email === username && user.Password === password) {
            document.getElementById("usernameProfile").innerText = user.Name;
            user.LoginStatus = true;
            localStorage.setItem(LIST_USERS, JSON.stringify(arrListUsers));
            return 1;
        }
    }

    let tempFlag = false;
    let index = -1;
    for (let i = 0; i < arrListUsers.length; i++) {
        if (arrListUsers[i].Email === username) {
            tempFlag = true;
            index = i;
            break;
        }
    }
    // User không tồn tại
    if (tempFlag == false) {
        return 2;
    }
    // Password không hợp lệ
    else {
        return 3;
    }
}


const userLogin = document.getElementById("loginUser");
const passwordLogin = document.getElementById("loginPassword");

userLogin.addEventListener('input', () => {
    userLogin.style.border = "1px solid rgb(127, 127, 127)";
    document.getElementsByClassName("messageErrorEmailLogin")[0].innerText = ""

});

passwordLogin.addEventListener('input', () => {
    passwordLogin.style.border = "1px solid rgb(127, 127, 127)";
    document.getElementsByClassName("messageErrorPasswordLogin")[0].innerText = ""
})

formsigin.addEventListener("submit", function(event) {
    event.preventDefault();

    UserInLocalStorage = JSON.parse(localStorage.getItem(LIST_USERS)) || [];

    //Lấy các đối tượng trong localStorage lưu vào mảng arrListUsers
    if (UserInLocalStorage) {
        arrListUsers = UserInLocalStorage;
        if (!Array.isArray(arrListUsers)) {
            arrListUsers = [arrListUsers];
        }
    }
    // Exit(0);
    if (checkAuthen(UserInLocalStorage, userLogin.value, passwordLogin.value) == 1) {

        HeaderSigined();
        Exit(0);

    } else if ((checkAuthen(UserInLocalStorage, userLogin.value, passwordLogin.value) == 2)) {
        userLogin.style.border = "1px solid red";
        document.getElementsByClassName("messageErrorEmailLogin")[0].innerText = "*Email này chưa được đăng ký!"
    } else {
        passwordLogin.style.border = "1px solid red";
        document.getElementsByClassName("messageErrorPasswordLogin")[0].innerText = "*Password không hợp lệ!"
    }

});


// Cách mà Header thay đổi khi đã đăng nhập
function HeaderSigined() {
    document.getElementsByClassName("myOrder")[0].style.display = "block";
    document.getElementsByClassName("myProfile")[0].style.display = "block";
    signupButton.style.display = "none";
    loginButton.style.display = "none";
}

function HeaderLogouted() {
    document.getElementsByClassName("myOrder")[0].style.display = "none";
    document.getElementsByClassName("myProfile")[0].style.display = "none";
    signupButton.style.display = "block";
    loginButton.style.display = "block";

    let UserInLocalStorage = JSON.parse(localStorage.getItem(LIST_USERS));
    let arrListUsers = UserInLocalStorage;
    if (!Array.isArray(arrListUsers)) {
        arrListUsers = [arrListUsers];
    }
    for (let i = 0; i < arrListUsers.length; i++) {
        if (arrListUsers[i].LoginStatus == true) {
            arrListUsers[i].LoginStatus = false;
            localStorage.setItem(LIST_USERS, JSON.stringify(arrListUsers));
            return;
        }
    }
}

// Hàm để khi reload nó vẫn giữ trạng thái đã đăng nhập
function LoginStatus() {
    UserInLocalStorage = JSON.parse(localStorage.getItem(LIST_USERS)) || [];
    if (UserInLocalStorage) {
        arrListUsers = UserInLocalStorage;
        if (!Array.isArray(arrListUsers)) {
            arrListUsers = [arrListUsers];
        }
    } else {
        return;
    }
    for (let i = 0; i < arrListUsers.length; i++) {
        if (arrListUsers[i].LoginStatus == true) {
            document.getElementById("usernameProfile").innerText = arrListUsers[i].Name;
            HeaderSigined();
        }
    }
}
//Gọi hàm
LoginStatus();

let myProfile = document.getElementsByClassName("myProfile")[0];
let logoutBtn = document.getElementsByClassName("logoutBtn")[0];

myProfile.addEventListener("click", (e) => {
    e.stopPropagation();
    if (logoutBtn.style.display == "block")
        logoutBtn.style.display = "none"
    else
        logoutBtn.style.display = "block"
})

window.addEventListener("click", () => {

    logoutBtn.style.display = "none";
})

logoutBtn.addEventListener("click", () => {
    HeaderLogouted();

})