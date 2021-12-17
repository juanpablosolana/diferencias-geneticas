import isFilter from "../../services/filter"
export default function handler(req, res) {

  if (req.method !== 'POST') return res.status(403).send()
  // validar que la petición solo se realice por el método POST equivalente a app.post('/api/mutation')
  function hasMutation(dna) {
    // función principal

    let mutation = false
    const horizontal = isFilter(dna)
    const leftEnd = dna.map((letter,index )=> {
      return letter[index]
    })
    const rightEnd = dna.map((letter,index )=> {
      return letter[letter.length - index - 1]
    })
    console.log(horizontal, isFilter([leftEnd.join('')]),[rightEnd.join('')])

    horizontal.length >1? mutation = true : null
    mutation ? res.status(200).send() : res.status(403).send()
  }
  hasMutation(req.body.dna)
  // invocar la función principal enviando los parámetros obtenidos desde la petición

}
