
export default function handler(req, res) {
  // validar que la petición solo se realice por el método POST
  if (req.method !== 'POST') return res.status(403).send()

  // función principal
  function hasMutation(dna) {
    // solo se puede aceptar un ADN con estas letras
    const dnaString = ['A', 'T', 'G', 'C']
    const dnaSplit = dna.map(letter => letter.toUpperCase().split(''))
    const dnaFilter = dnaSplit.map(letters => letters.filter(letter => dnaString.includes(letter) ? letter : (res.status(403).send())))
    console.log(dnaFilter)

    res.status(200).json(dnaFilter)

  }

  // invocar la función principal enviando los parámetros obtenidos desde la petición
  hasMutation(req.body.dna)

}
