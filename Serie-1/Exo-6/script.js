const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = rgbColorGenerator()
})

const rgbColorGenerator = () => {
  const rgb = []

  for (let i = 0; i < 3; ++i) {
    let nbr = Math.floor(Math.random() * (255 - 0) + 1)
    rgb.push(nbr)
  }

  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}
