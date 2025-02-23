
document.getElementById('forgot-password-form').addEventListener('submit', function(event) { // Khi submit form quên mật khẩu
    event.preventDefault(); // Ngăn chặn form gửi đi

    const email = document.getElementById('email').value; // Lấy giá trị email từ form
    const messageElement = document.getElementById('message'); // Lấy ra thẻ hiển thị thông báo

    // Giả lập gửi yêu cầu đến server
    if (validateEmail(email)) {     
        // Gửi yêu cầu đến server (sử dụng fetch hoặc XMLHttpRequest)
        // Đây là nơi bạn sẽ gọi API để xử lý yêu cầu quên mật khẩu
        messageElement.textContent = 'Yêu cầu đặt lại mật khẩu đã được gửi đến email của bạn.'; // Hiển thị thông báo
        messageElement.style.color = 'green'; // Đổi màu thông báo
    } else {   // Nếu email không hợp lệ
        messageElement.textContent = 'Địa chỉ email không hợp lệ.'; // Hiển thị thông báo
        messageElement.style.color = 'red'; // Đổi màu thông báo
    }
});

const express = require('express'); // Import thư viện express
const nodemailer = require('nodemailer');   // Import thư viện nodemailer
const app = express(); // Khởi tạo ứng dụng express
const bodyParser = require('body-parser'); // Import thư viện body-parser

app.use(bodyParser.json()); // Sử dụng body-parser cho các request có dạng JSON
app.use(bodyParser.urlencoded({ extended: true })); // Sử dụng body-parser cho các request có dạng form

app.post('/forgot-password', (req, res) => { // Định nghĩa route POST /forgot-password
    const email = req.body.email; // Lấy email từ request

    // Kiểm tra email trong cơ sở dữ liệu
    // Nếu email hợp lệ, gửi email đặt lại mật khẩu
    // Sử dụng nodemailer để gửi email

    res.json({ message: 'Yêu cầu đặt lại mật khẩu đã được gửi đến email của bạn.' }); // Trả về thông báo
});

app.listen(3000, () => { 
    console.log('Server is running on port 3000'); // Khởi động server tại cổng 3000
});
