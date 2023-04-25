/**
 * La fonction vérifie si tous les champs obligatoires sont remplis correctement et permet à
 * l'utilisateur de soumettre le formulaire si tout est correct.
 * @param event - Le paramètre d'événement est un objet qui représente l'événement qui a déclenché la
 * fonction. Dans ce cas, il s'agit de l'événement de soumission de formulaire.
 */
function verify(event) {
  event.preventDefault() // Empêcher la soumission du formulaire

  const nomPrenom = document.getElementById("nomEtPrenom")
  const cin = document.getElementById("CIN")
  const email = document.getElementById("email")
  const formations = document.querySelectorAll("#formation option:checked")

  if (nomPrenom.value === "" || cin.value === "" || email.value === "") {
    alert("Veuillez remplir tous les champs obligatoires marqués par *")
  } else if (!/^\d{8}$/.test(cin.value)) {
    alert("Le champ CIN doit contenir exactement 8 chiffres")
  } else if (email.value.indexOf("@") === -1) {
    alert("Le champ Adresse e-mail doit comporter le caractère @")
  } else if (formations.length === 0 || formations.length > 2) {
    alert("Veuillez choisir un ou deux modules de formation")
  } else {
    alert("Inscription achevée !!")
    form.reset()
  }
}

const form = document.querySelector("form")
form.addEventListener("submit", verify)
