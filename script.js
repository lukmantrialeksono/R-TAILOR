document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Ambil nilai dari input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Tampilkan pesan sukses
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = 'Terima kasih', '${name}! Pesan Anda telah kami terima';
    
    // Kosongkan form
    this.reset();
});