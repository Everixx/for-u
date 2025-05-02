document.addEventListener('click', function() {
  const audio = document.getElementById('bgMusic');
  
  if(audio.paused) {
    audio.play()
      .then(() => console.log("Musik mulai"))
      .catch(err => {
        console.error("Gagal memutar:", err);
        audio.controls = true; // Tampilkan controls jika error
      });
  }
  
  // Hapus event listener setelah klik pertama
  this.removeEventListener('click', arguments.callee);
}, { once: true });

document.addEventListener('DOMContentLoaded', () => {
  const surpriseContainer = document.querySelector('.surprise-container');
  const audio = document.getElementById('bgMusic');
  const body = document.body;

  // Handle klik untuk memulai
  surpriseContainer.addEventListener('click', () => {
      // Mulai animasi transisi
      surpriseContainer.classList.add('hidden');
      body.classList.remove('not-loaded');
      body.classList.add('loaded');
      
      // Coba memutar musik
      audio.play().catch(error => {
          console.log('Autoplay diblokir, perlu interaksi pengguna');
          // Tambahkan tombol play manual jika diperlukan
      });
  });

  // Fallback timeout
  setTimeout(() => {
      if(body.classList.contains('not-loaded')) {
          surpriseContainer.style.display = 'none';
          body.classList.remove('not-loaded');
          body.classList.add('loaded');
      }
  }, 5000);
});

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
