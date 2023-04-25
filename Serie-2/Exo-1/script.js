const note1Input = document.getElementById("note1")
const note2Input = document.getElementById("note2")
const note3Input = document.getElementById("note3")
const resultat = document.getElementById("resultat")
const btnMoyenne = document.getElementById("btn")

/**
 * Ajout d'un écouteur d'événement au bouton avec l'ID "btnMoyenne".
 * Lorsque le bouton est cliqué, la fonction "calculerMoyenne" sera exécutée.
 */
btnMoyenne.addEventListener("click", calculerMoyenne)

/**
 * Cette fonction calcule la moyenne de trois nombres saisis et l'affiche sur la page.
 */
function calculerMoyenne() {
  // Conversion des notes en nombres
  const note1 = parseFloat(note1Input.value)
  const note2 = parseFloat(note2Input.value)
  const note3 = parseFloat(note3Input.value)

  // Calcul de la moyenne
  const moyenne = (note1 + note2 + note3) / 3

  if (!isNaN(moyenne)) {
    // Affichage de la moyenne dans la balise div avec l'ID "resultat"
    resultat.textContent = "La moyenne est : " + moyenne
  }
  // Réunisialisation des champs de tous les notes
  note1Input.value = ""
  note2Input.value = ""
  note3Input.value = ""
}
