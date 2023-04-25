const entierInput = document.getElementById("entier")
const btnCarre = document.getElementById("btnCarre")
const error = document.getElementById("error")
const resultatDiv = document.getElementById("resultat")

/**
 * Ajout d'un écouteur d'événement au bouton avec l'ID "btnCarre".
 * Lorsque le bouton est cliqué, la fonction "calculeCarreNbr" sera exécutée.
 */
btnCarre.addEventListener("click", calculeCarreNbr)

/**
 * Cette fonction calcule le carré d'un nombre et affiche le résultat
 * dans un élément div.
 */
function calculeCarreNbr() {
  const entier = parseInt(entierInput.value)

  // Réunisialisation du resultat
  resultatDiv.textContent = ""

  if (entier < 1) {
    return (error.textContent = `le nombre saisi ne dois pas être negative !!!`)
  }

  if (!isNaN(entier)) {
    // Affichage de la moyenne dans la balise div avec l'ID "resultat"
    error.textContent = ""

    const carreNbr = entier * entier
    resultatDiv.textContent = `Le carré de ${entier} est ${carreNbr}.`
  }

  // Réunisialisation de tous les champs
  entierInput.value = ""
}
