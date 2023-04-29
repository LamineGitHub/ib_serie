// récupération des éléments HTML
const inputs = document.querySelectorAll('input[type="number"]')
const button = document.getElementById("btn")

// fonction pour vérifier les résultats
function verifierResultats() {
  let nbCorrect = 0

  // vérification de chaque réponse
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i]

    // récupération du résultat attendu à partir du texte précédent le champ input en supprimant les : et espaces
    const resultatAttendu = eval(
      input.previousElementSibling.textContent.replace(":", "").trim()
    )

    // récupération du résultat obtenu à partir de la valeur du champ input
    const resultatObtenu = parseInt(input.value, 10)

    if (resultatObtenu === resultatAttendu) {
      nbCorrect++
    }
  }

  // affichage du nombre de réponses correctes dans une boîte de dialogue
  if (inputs.length !== nbCorrect) {
    return alert(`Nombre de réponses correctes : ${nbCorrect}`)
  }

  return alert("Bravo toutes vos réponses sont correctes !!!")
}

// ajout de l'événement au bouton
button.addEventListener("click", verifierResultats)
