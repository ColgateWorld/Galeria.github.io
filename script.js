const passwordForm = document.getElementById('password-form');
const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');
const images = document.querySelectorAll('#gallery img');
const modal = document.createElement('div');
modal.classList.add('modal');

images.forEach(image => {
  image.addEventListener('click', () => {
    const modalImg = document.createElement('img');
    modalImg.src = image.dataset.src;
    modal.appendChild(modalImg);
    document.body.appendChild(modal);
    modal.addEventListener('click', () => {
      modal.removeChild(modalImg);
      document.body.removeChild(modal);
    });
  });
});

passwordForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const passwordInput = document.getElementById('password-input');
  if (passwordInput.value === 'Danaelamordemivida') {
    passwordInput.value = '';
    overlay.style.display = 'none';
    gallery.classList.remove('hidden');
    
    // Carga las imágenes
    images.forEach(function(image) {
      image.setAttribute('src', image.getAttribute('data-src'));
      
      // Agrega un evento mouseover para hacer más grande la imagen
      image.addEventListener('mouseover', function() {
        image.style.transform = 'scale(1.1)';
      });
      
      // Agrega un evento mouseout para volver a su tamaño original
      image.addEventListener('mouseout', function() {
        image.style.transform = 'scale(1)';
      });
    });
  } else {
    alert('Contraseña incorrecta. Intenta de nuevo.');
  }
});
