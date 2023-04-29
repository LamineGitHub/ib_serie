const dayOfWeek = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
]

/* `const div = document.getElementById("root")` sélectionne l'élément HTML avec l'ID "root" et
l'assigne à la variable constante `div`. Cela nous permet de manipuler le contenu de cet élément à
l'aide de JavaScript. */
const div = document.getElementById("root")

/* `div.innerHTML = `${dayOfWeek.join("; ")}`` définit le code HTML interne de l'élément avec l'ID
"root" sur une chaîne créée en joignant tous les éléments du tableau `dayOfWeek` avec un séparateur
point-virgule. */
div.innerHTML = `${dayOfWeek.join("; ")}`
div.innerHTML += "<br /><br />"

/* Ce code utilise une boucle `for` pour itérer sur le tableau `dayOfWeek` et imprimer chaque élément
avec son index dans le document HTML. */
for (let i = 0; i < dayOfWeek.length; i++) {
  const element = dayOfWeek[i]

  div.innerHTML += `Jour ${i} : ${element} <br />`
}
