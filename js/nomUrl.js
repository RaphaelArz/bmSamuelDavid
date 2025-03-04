// Fonction pour récupérer le paramètre "invite" et le formater
function getInviteName() {
  const urlParams = new URLSearchParams(window.location.search);
  let invite = urlParams.get("invite");

  if (invite) {
    // Remplace les tirets par des espaces
    return invite.replace(/-/g, " ");
  } else {
    return ""; // Valeur par défaut si aucun paramètre
  }
}

// Injecter dans le HTML
document.getElementById("nom-invite").textContent = getInviteName();
