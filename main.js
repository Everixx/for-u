document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.surprise-container');
    const audio = document.getElementById('bgMusic');
    
    // Inisialisasi audio
    audio.volume = 0.3;
    
    // Handle klik
    container.addEventListener('click', () => {
      audio.play()
        .then(() => {
          container.style.display = 'none';
          document.body.classList.remove('not-loaded');
        })
        .catch(error => {
          container.innerHTML = `<h1 style="color:#ff0000">Klik lagi untuk memulai</h1>`;
        });
    }, { once: true });
  });

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
