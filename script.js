document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Contoh validasi sederhana, Anda dapat menggantinya dengan metode autentikasi yang sesuai
    if (username === 'admin' && password === 'admin') {
        alert('Login berhasil!');
        // Redirect setelah login berhasil
        window.location.href = 'https://xpetizeee.github.io/Cerita-Pendek-Indonesia/'; // Ganti 'dashboard.html' dengan URL halaman tujuan Anda
    } else {
        alert('Username atau password salah!');
    }
});
