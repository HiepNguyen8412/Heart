// Lệnh chạy: node SignUp_LogIn_Form.js
// Mô tả cho tệ chạy SignUp_LogIn_Form.js
// Tạo form đăng ký và đăng nhập
// Khi click vào nút đăng ký thì hiện form đăng ký
// Khi click vào nút đăng nhập thì hiện form đăng nhập
const container = document.querySelector('.container'); // Lấy ra class container
const registerBtn = document.querySelector('.register-btn');    // Lấy ra class register-btn
const loginBtn = document.querySelector('.login-btn'); // Lấy ra class login-btn

registerBtn.addEventListener('click', () => { // Khi click vào nút đăng ký
    container.classList.add('active'); // Hiện form đăng ký
})

loginBtn.addEventListener('click', () => { // Khi click vào nút đăng nhập
    container.classList.remove('active'); // Hiện form đăng nhập
})

if (type === 'Login')
