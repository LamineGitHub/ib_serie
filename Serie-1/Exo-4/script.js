const ulElement = document.getElementById("prime-list")

/* Le code génère une liste de nombres premiers de 0 à 100 et les ajoute en tant qu'éléments de liste à
 * un élément de liste HTML non ordonné avec l'ID "prime-list".
 * Pour ce faire, il parcourt chaque nombre de 0 à 100 à l'aide d'une boucle for et vérifie si chaque nombre est   * premier à l'aide de la fonction "isPrime". Si un nombre est premier,
 * il est ajouté à la liste HTML à l'aide de la propriété`innerHTML`.
 */
for (let i = 0; i <= 100; ++i) {
  if (isPrime(i)) {
    ulElement.innerHTML += `<li>${i}</li>`
  }
}
document.body.appendChild(ulElement)

/**
 * La fonction vérifie si un nombre donné est premier ou non.
 * @param nbr - Le nombre d'entrée dont nous voulons vérifier s'il s'agit d'un nombre premier ou non.
 * @returns La fonction `isPrime` renvoie une valeur booléenne (`true` ou `false`) selon que le nombre
 * d'entrée `n` est un nombre premier ou non.
 */
function isPrime(nbr) {
  if (nbr <= 1) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(nbr); i++) {
    if (nbr % i === 0) {
      return false
    }
  }

  return true
}
