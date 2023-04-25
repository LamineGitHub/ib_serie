const operationInput = document.getElementById("operation")
const equalButton = document.getElementById("equal")
const resultatInput = document.getElementById("resultat")
const errorText = document.getElementById("error")

/**
 * La fonction prend une entrée utilisateur d'une opération mathématique, vérifie si elle est valide à
 * l'aide d'une expression régulière et évalue l'opération si elle est valide, en affichant le résultat
 * dans un champ de sortie.
 */
function calculOperation() {
  resultatInput.value = ""
  // Récupérer la valeur de l'entrée utilisateur
  const operation = operationInput.value

  // La regex /^[0-9+\-*/().\s]+$/ permet de vérifier si la chaîne de caractères passée en paramètre
  // ne contient que des chiffres, des opérateurs mathématiques (+,-,*,/), des parenthèses,
  // des espaces et des points.
  // Cette expression régulière est utilisée pour s'assurer que la saisie utilisateur est valide
  // avant de procéder à l'évaluation de l'opération mathématique.
  const regex = /^[0-9+\-*/().\s]+$/gi

  if (regex.test(operation)) {
    resultatInput.value = eval(operation)
    errorText.textContent = ""
  } else {
    errorText.textContent = "Erreur : Entrée invalide"
  }
}

// Ajouter un gestionnaire d'événement au bouton '='
equalButton.addEventListener("click", calculOperation)

/* Supprime le contenu du champ quand il est focus */
operationInput.addEventListener("focus", (e) => {
  e.target.value = ""
})
