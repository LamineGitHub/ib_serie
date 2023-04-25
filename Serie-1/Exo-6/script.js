const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = rgbColorGenerator()
})

/**
 * La fonction génère une couleur RVB aléatoire et la renvoie sous forme de chaîne.
 * @returns La fonction `rgbColorGenerator` renvoie une chaîne au format d'une couleur RVB, avec trois
 * nombres aléatoires entre 0 et 255 (inclus) séparés par des virgules. Par exemple, la chaîne renvoyée
 * pourrait ressembler à ceci : "rgb(123, 45, 200)".
 */
const rgbColorGenerator = () => {
  const rgb = []

  for (let i = 0; i < 3; ++i) {
    let nbr = Math.floor(Math.random() * (255 - 0) + 1)
    rgb.push(nbr)
  }

  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}
