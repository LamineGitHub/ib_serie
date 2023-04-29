// Fonction somRec(i) qui renvoie la somme de 1 à i
function somRec(i) {
  // Vérification que i est un entier positif
  if (!Number.isInteger(i) || i < 0) {
    return "Somme indéfinie"
  }
  // Cas de base : somme de 0 = 0
  if (i === 0) {
    return 0
  }
  // Cas récursif : somme de 1 à i = somme de 1 à i-1 + i
  return somRec(i - 1) + i
}

// Fonction somFor(i) qui renvoie la somme de 1 à i en utilisant une boucle for
function somFor(i) {
  // Vérification que i est un entier positif
  if (!Number.isInteger(i) || i < 0) {
    return "Somme indéfinie"
  }
  let somme = 0
  for (let j = 1; j <= i; j++) {
    somme += j
  }
  return somme
}

// Demande à l'utilisateur d'entrer un entier positif
let valeur = parseInt(prompt("Entrez un entier positif :", "0"))

// Calcul de la somme avec somRec() et affichage
let resultat = somRec(valeur)

if (!isNaN(resultat)) {
  const div = document.getElementById("root")

  div.textContent = `La valeur de somRec(${valeur}) est : ${resultat}`
}
