document.getElementById('rsvp-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire traditionnel

  // Création de l'élément de message "Envoi en cours"
  var sendingMessage = document.createElement('div');
  sendingMessage.textContent = '📨 Envoi en cours...';
  sendingMessage.style.position = 'fixed';
  sendingMessage.style.top = '50%';
  sendingMessage.style.left = '50%';
  sendingMessage.style.transform = 'translate(-50%, -50%)';
  sendingMessage.style.backgroundColor = '#0d1b5a';
  sendingMessage.style.color = '#ffffff';
  sendingMessage.style.padding = '30px'; // Plus grand
  sendingMessage.style.fontSize = '24px'; // Texte plus grand
  sendingMessage.style.fontWeight = 'bold';
  sendingMessage.style.borderRadius = '10px';
  sendingMessage.style.zIndex = '9999';
  sendingMessage.style.border = '4px solid #ffffff';
  sendingMessage.style.textAlign = 'center';
  document.body.appendChild(sendingMessage);

  var form = event.target;
  var formData = new FormData(form);
  var data = {};
  formData.forEach((value, key) => data[key] = value);

  fetch('', { // Remplacez par l'URL de déploiement du script Google Apps
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(data)
  })
    .then(response => {
      sendingMessage.textContent = '✅ Envoyé avec succès !';
      sendingMessage.style.backgroundColor = '#0d1b5a';
      sendingMessage.style.border = '4px solid #ffffff';

      // Désactiver tous les champs du formulaire
      var inputs = form.querySelectorAll("input, textarea, button");
      inputs.forEach(input => input.disabled = true);

      setTimeout(function() {
        sendingMessage.remove(); // Supprimer le message après 5 secondes
      }, 5000);
    })
    .catch(error => {
      console.error('Erreur:', error);
      sendingMessage.textContent = '❌ Erreur lors de l\'envoi du formulaire.';
      sendingMessage.style.backgroundColor = '##0d1b5a';
      sendingMessage.style.border = '4px solid #ffffff';

      setTimeout(function() {
        sendingMessage.remove(); // Supprimer le message après 5 secondes
      }, 5000);
    });
});
