function leftEnd(dna) {
  return leftEnd=dna.map((letter, index) => {
    return letter[index] // solo si encuentra la cadena de mutacion dirección oblicua izquierda a derecha
  })
}
function rightEnd(dna) {
  dna.map((letter, index) => {
    return letter[letter.length - index - 1] // solo si encuentra la cadena de mutacion dirección oblicua derecha a izquierda
  })
}
function upDown(dna) {

  dna.map((letter) => {
    return letter[0] // solo si encuentra la cadena de mutacion dirección vertical
  })
}
export {leftEnd, rightEnd, upDown}