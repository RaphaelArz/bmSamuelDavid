document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll(".rsvp-radio");

  radios.forEach((radio) => {
    radio.addEventListener("change", function () {
      const parentDiv = this.closest(".rsvp-event");
      const inputNumber = parentDiv.querySelector(".rsvp-number");

      if (this.value === "oui") {
        inputNumber.disabled = false;
        inputNumber.required = true;
        inputNumber.focus(); // Met le focus sur le champ activé
      } else {
        inputNumber.disabled = true;
        inputNumber.required = false;
        inputNumber.value = "";
      }
    });
  });
});

document.getElementById("rsvp-form").addEventListener("submit", function (event) {
  let valid = true;

  document.querySelectorAll(".rsvp-event").forEach(eventBlock => {
    const radios = eventBlock.querySelectorAll("input[type='radio']");
    if (![...radios].some(radio => radio.checked)) {
      valid = false;
    }
  });

  if (!valid) {
    event.preventDefault(); // Bloque l'envoi si une question n'est pas remplie
  }
});
