// Récupération de la référence au corps du tableau
const tableBody = document.querySelector("#table tbody")

// Boucle for pour créer les lignes et les colonnes du tableau
for (let i = 0; i <= 10; i++) {
  // Création d'une nouvelle ligne
  const row = document.createElement("tr")

  for (let j = 0; j <= 10; j++) {
    // Création d'une nouvelle cellule
    const cellule = document.createElement("td")

    if (i === 0 && j > 0) {
      // Si on est sur la première ligne, on affiche les valeurs des entiers
      cellule.textContent = j - 1
    } else if (j === 0 && i > 0) {
      // Si on est sur la première colonne, on affiche les valeurs des entiers
      cellule.textContent = i - 1
    } else if (i > 0 && j > 0) {
      // Sinon, on calcule le produit des entiers
      cellule.textContent = (i - 1) * (j - 1)
    } else {
      // La première cellule est laissée vide
      cellule.textContent = ""
    }

    // Ajout de la cellule à la ligne
    row.appendChild(cellule)
  }

  // Ajout de la ligne au corps du tableau
  tableBody.appendChild(row)
}
