export default function handler(req, res) {

  if (req.method !== 'POST') return res.status(403).send()
  // validar que la petición solo se realice por el método POST equivalente a app.post('/api/mutation')
  function hasMutation(dna) {
    // función principal

    let mutation = false

    const horizontal = dna.filter(letter => {
      return (
        letter.includes('AAAA') ||
        letter.includes('TTTT') ||
        letter.includes('CCCC') ||
        letter.includes('GGGG')
      )
    })
    console.log(horizontal.length <= 1)

    mutation ? res.status(200).send() : res.status(403).send()
  }
  hasMutation(req.body.dna)
  // invocar la función principal enviando los parámetros obtenidos desde la petición

}
