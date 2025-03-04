// Sélectionner toutes les images avec la classe 'fade-in-image'
const images = document.querySelectorAll('.fade-in-image');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Arrête d'observer l'image après qu'elle soit apparue
    }
  });
}, { threshold: 0.05 }); // Seuil de visibilité de 50%

images.forEach(image => {
  observer.observe(image); // Observer chaque image
});
