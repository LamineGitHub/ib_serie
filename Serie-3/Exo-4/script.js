/**
 * La fonction `getBrowserName()` détermine le nom et la version du navigateur de l'utilisateur en
 * fonction de la chaîne de l'agent utilisateur.
 * @returns Un tableau contenant le nom et la version du navigateur utilisé.
 */
const getBrowserName = () => {
  const userAgent = navigator.userAgent
  let browserName
  let browserVersion

  /**
   * Ce bloc de code vérifie la chaîne de l'agent utilisateur pour déterminer le nom et la version du navigateur utilisé.
   * Il utilise la méthode `indexOf()` pour rechercher des chaînes spécifiques dans la chaîne de l'agent utilisateur,
   * puis définit les variables `browserName` et `browserVersion` en conséquence.
   * Si la chaîne de l'agent utilisateur ne correspond à aucun des navigateurs spécifiés,
   * il définit `browserName` et `browserVersion` sur "Inconnu".
   */
  if (userAgent.indexOf("Firefox") !== -1) {

    browserName = "Mozilla Firefox"
    browserVersion = userAgent.substring(userAgent.indexOf("Firefox") + 8)

  } else if (userAgent.indexOf("Edg") !== -1) {

    browserName = "Microsoft Edge"
    browserVersion = userAgent.substring(userAgent.indexOf("Edg") + 4)

  } else if (userAgent.indexOf("Chrome") !== -1) {

    browserName = "Google Chrome"
    browserVersion = userAgent.substring(userAgent.indexOf("Chrome") + 7)

  } else if (userAgent.indexOf("Safari") !== -1) {

    browserName = "Apple Safari"
    browserVersion = userAgent.substring(userAgent.indexOf("Version") + 8)

  } else if (userAgent.indexOf("Opera") !== -1) {

    browserName = "Opera"
    browserVersion = userAgent.substring(userAgent.indexOf("Version") + 8)

  } else if (userAgent.indexOf("MSIE") !== -1) {

    browserName = "Microsoft Internet Explorer"
    browserVersion = userAgent.substring(userAgent.indexOf("MSIE") + 5)

  } else {
    browserName = "Unknown"
    browserVersion = "Unknown"
  }

  return [browserName, browserVersion]
}


/* Ce code ajoute un écouteur d'événement à l'objet document qui attend que le DOM soit complètement
chargé avant d'exécuter la fonction. Une fois le DOM chargé, il récupère l'élément avec l'ID
"content" et définit son innerHTML sur une chaîne qui inclut le nom et la version du navigateur
utilisé, qui sont déterminés par la fonction `getBrowserName()`. Il comprend également le titre du
document et la date de sa dernière modification. */
document.addEventListener("DOMContentLoaded", function () {
  let content = document.getElementById("content")
  const [browserName, browserVersion] = getBrowserName()

  content.innerHTML = `Nom du navigateur : ${browserName} <br />`
  content.innerHTML += `Version du navigateur :  ${browserVersion} <br />`
  content.innerHTML += `Titre du document :  ${document.title} <br />`
  content.innerHTML += `Date de dernière modification :  ${document.lastModified}`
})
