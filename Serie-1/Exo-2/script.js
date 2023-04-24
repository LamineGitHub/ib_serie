/**
 * La fonction prend deux nombres en entrée, les additionnes et renvoie un message d'alerte avec la
 * somme ou un message d'erreur si l'entrée n'est pas un nombre.
 *
 * @param num1 - Le premier nombre à ajouter dans la somme.
 * @param num2 - Le deuxième nombre à ajouter au premier nombre (num1) afin de calculer la somme.
 *
 * @returns un message d'alerte avec la somme des deux nombres passés en arguments, ou un message
 * d'erreur si au moins un des arguments n'est pas un nombre.
 */
function sumNumber(num1, num2) {
  const sum = num1 + num2

  if (isNaN(sum)) {
    return alert("Veuillez saisir des nombres s'il vous plait !!")
  }
  return alert(`La somme est egale à ${sum}`)
}

/**
 * La fonction invite l'utilisateur à entrer deux nombres, puis appelle une autre fonction pour
 * calculer leur somme.
 */
function askNumber() {
  let num1 = parseInt(prompt("Veuillez saisir le premier nombre :"))
  let num2 = parseInt(prompt("Veuillez saisir le deuxieme nombre :"))

  sumNumber(num1, num2)
}

askNumber()
