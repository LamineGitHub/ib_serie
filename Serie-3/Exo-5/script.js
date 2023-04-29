/**
 * La fonction calcule le prix TTC en fonction du produit sélectionné et du prix d'entrée.
 * @returns rien (indéfini).
 */
function calculTVA() {
  const selectProduit = document.getElementById("produit")
  const inputPrix = document.getElementById("prix")
  const resultat = document.getElementById("resultat")

  let tva = 0.0
  if (selectProduit.value === "non-agricole") {
    tva = 0.19
  }

  const prixHT = parseFloat(inputPrix.value)
  const prixTTC = prixHT * (1 + tva)

  if (!isNaN(prixTTC)) {
    resultat.textContent = "Prix TTC : " + prixTTC.toFixed(2) + " €"
  }
  return
}
// récupération des éléments HTML et ajout de l'ecouteur d'evenement
document.getElementById("calculer").addEventListener("click", calculTVA)
