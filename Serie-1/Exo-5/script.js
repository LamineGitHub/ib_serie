const table = document.getElementById("multiplication-table")

for (let i = 1; i <= 9; ++i) {
  for (let j = 0; j <= 10; ++j) {
    table.innerHTML += `${i} * ${j} = ${i * j}`
    table.innerHTML += "<br />"
}
table.innerHTML += "<br />"

}
document.body.appendChild(table)
