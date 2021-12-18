const leftEnd = (dna) => {
  return dna.map((letter, index) => {
    return letter[index] //oblicua izquierda a derecha
  })
}

const rightEnd = (dna) => {
  return dna.map((letter, index) => {
    return letter[letter.length - index - 1] // oblicua derecha a izquierda
  })
}

const upDown = (dna) => {
  return dna.map((letter) => {
    return letter[0] //vertical
  })
}
export { leftEnd, rightEnd, upDown }