const letters = ['A', 'T', 'C', 'G']

const isValid = (dna)=>{
  return dna.every(item => item.split('').every(letter => letters.includes(letter)))
}

export default isValid