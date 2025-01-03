document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Ambil data input dari form
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("pesan").value;

    // Periksa jika semua field sudah terisi
    if (!nama || !email || !pesan) {
        alert("Please fill in all fields!");
        return;
    }

    // Format pesan WhatsApp (gunakan \n untuk baris baru)
    var whatsappMessage = "Hello, my name is ${nama}.\nEmail: ${email}.\nMessage: ${pesan}";

    // Encode pesan agar URL valid
    var encodedMessage = encodeURIComponent(whatsappMessage);

    // Nomor WhatsApp tujuan dalam format internasional
    var contactNumber = '6285642574428'; // Ganti dengan nomor tujuan

    // Buat link WhatsApp
    var whatsappLink = "https://api.whatsapp.com/send?phone=6285642574428&text=Halo%20Admin%2C%0ASaya%20*"+ nama +"*%0AEmail%20saya%20*"+ email +"*%0A%0A%0A*"+ pesan +"*";

    // Buka link WhatsApp di tab baru
    window.open(whatsappLink, "_blank");

    // Reset form setelah sukses
    document.getElementById("contactForm").reset();

    // Tampilkan pesan sukses
    var responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = "Redirecting to WhatsApp...";
    responseMessage.style.color = "green";
});