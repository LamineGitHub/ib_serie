// récupération des éléments HTML
const selectParagraph = document.getElementById("select-paragraph")
const par1 = document.getElementById("par1")
const par2 = document.getElementById("par2")
const par3 = document.getElementById("par3")

/**
 * La fonction affiche un paragraphe sélectionné et
 * masque les autres en fonction de la valeur d'un menu déroulant.
 */
function afficher() {
  const selectValue = selectParagraph.value

  // On cache tous les paragraphes
  par1.style.display = "none"
  par2.style.display = "none"
  par3.style.display = "none"

  // On affiche le paragraphe sélectionné
  switch (selectValue) {
    case "1":
      par1.style.display = "block"
      break

    case "2":
      par2.style.display = "block"
      break

    case "3":
      par3.style.display = "block"
      break
  }
}

// On écoute les changements de sélection dans la liste déroulante
selectParagraph.addEventListener("change", afficher)
