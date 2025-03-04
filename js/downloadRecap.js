function downloadImage() {
  const imageUrl = "img/recapSachaEva.png"; // Chemin vers ton image
  fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "recapSachaEva.png"; // Nom du fichier
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch(error => console.error("Erreur de téléchargement:", error));
}
