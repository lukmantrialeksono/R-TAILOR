document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Ambil data input dari form
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("pesan").value;

    // Format pesan WhatsApp (gunakan \n untuk baris baru)
    var whatsappMessage = 'Hello, my name is ${nama}.\nEmail: ${email}.\nMessage: ${pesan}';

    // Encode pesan agar URL valid
    var encodedMessage = encodeURIComponent(whatsappMessage);

    // Nomor WhatsApp tujuan dalam format internasional
    var contactNumber = '6285729854116'; // Ganti dengan nomor tujuan

    // Buat link WhatsApp
    var whatsappLink = 'https://api.whatsapp.com/send?phone=6285729854116'

    // Buka link WhatsApp di tab baru
    window.open(whatsappLink, "_blank");
});