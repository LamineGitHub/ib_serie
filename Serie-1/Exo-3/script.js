let age = parseInt(prompt("Veuillez saisi votre âge :"))

/* Cette boucle while s'assure que l'âge entré est un nombre valide compris entre 0 et 120,
 * sinon elle demande à l'utilisateur de réessayer jusqu'à ce qu'il fournisse une valeur valide.
 */
while (isNaN(age) || age < 0 || age > 120) {
  age = parseInt(
    prompt(
      "L'âge que vous avez entré est invalide. Veuillez entrer votre âge à nouveau :"
    )
  )
}

alert("Votre âge est : " + age)
