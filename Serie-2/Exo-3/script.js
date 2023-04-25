const entierInput = document.getElementById("entier")
const tableBody = document.querySelector("#table tbody")

entierInput.addEventListener("input", function () {
  const entier = parseInt(this.value)

  if(entier === '')
    console.log('lamine');

  /* Ce bloc de code vérifie si la valeur du champ d'entrée avec l'id "entier" est inférieure à 1,
   * supérieure à 10, ou n'est pas un nombre (NaN).
   * Si l'une de ces conditions est vraie, la fonction retourne et n'exécute pas le reste du code.
   * Cela garantit que seules les valeurs d'entrée valides comprises entre 1 et 10 sont utilisées
   * pour générer la table de multiplication.
   */
  if (entier < 1 || entier > 10 || isNaN(entier)) {
    return
  }

  tableBody.innerHTML = ""
  for (let i = 1; i <= 10; i++) {
    printMutliplicationTable(entier, i)
  }
})

/**
 * La fonction crée une ligne de tableau avec deux colonnes, l'une affichant une équation de
 * multiplication et l'autre affichant le résultat.
 * @param entier - Le premier paramètre "entier" est un nombre qui représente le multiplicande dans une
 * table de multiplication.
 * @param i - Le paramètre "i" est un nombre représentant l'itération ou l'indice courant d'une boucle.
 * Il est utilisé dans la fonction pour calculer le résultat de la multiplication de "entier" (un autre
 * paramètre représentant un entier) et "i", et pour afficher l'équation et le résultat dans une ligne
 * de tableau.
 */
function printMutliplicationTable(entier, i) {
  const resultat = entier * i

  /* Ces lignes de code créent de nouveaux éléments HTML à l'aide de la méthode
    `document.createElement()`. */
  const row = document.createElement("tr")
  const colonne1 = document.createElement("td")
  const colonne2 = document.createElement("td")
  /* Ajoute du text au element créer précedement */
  colonne1.textContent = `${entier} x ${i} =`
  colonne2.textContent = resultat

  /* Ajoute les colonnes à la ligne (row) comme enfant */
  row.appendChild(colonne1)
  row.appendChild(colonne2)

  /* Ajoute la ligne (row) à tableBody (le body du table) comme enfant */
  tableBody.appendChild(row)
}
