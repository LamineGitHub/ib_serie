const moisInput = document.getElementById("mois")
const anneeInput = document.getElementById("annee")
const errorMois = document.getElementById("errorMois")
const errorAnnee = document.getElementById("errorAnnee")
const btn = document.getElementById("btn")
const resultatDiv = document.getElementById("resultat")

/**
 * Ajout d'un écouteur d'événement au bouton avec l'ID "btn".
 * Lorsque le bouton est cliqué, la fonction "calculeNbrJour" sera exécutée.
 */
btn.addEventListener("click", calculeNbrJour)

/**
 * Cette fonction calcule le nombre de jours dans un mois et une année donnés et affiche le résultat
 * dans un élément div.
 */
function calculeNbrJour() {
  const mois = parseInt(moisInput.value)
  const annee = parseInt(anneeInput.value)

  // Réunisialisation du resultat
  resultatDiv.textContent = ""

  if (mois < 1 || mois > 12) {
    return (errorMois.textContent = `Le mois dois être entre 1 et 12`)
  }
  if (annee < 1) {
    return (errorAnnee.textContent = `l'année ne dois pas être negative !!!`)
  }

  // calcule de nombre de jours
  const nbJours = new Date(annee, mois, 0).getDate()

  let sup = ""
  if (mois === 1) sup = "er"
  else sup = "eme"

  if (!isNaN(nbJours)) {
    // Affichage de la moyenne dans la balise div avec l'ID "resultat"
    errorAnnee.textContent = ""
    errorMois.textContent = ""
    resultatDiv.textContent = `Le ${mois}${sup} mois  de l'année ${annee} a ${nbJours} jours.`
  }
  // Réunisialisation de tous les champs
  moisInput.value = ""
  anneeInput.value = ""
}
