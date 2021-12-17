import isFilter from "../../services/filter" // la función verifica las condiciones del filtro
export default function handler(req, res) {

  if (req.method !== 'POST') return res.status(403).send() //equivalente a app.post('/api/mutation')
  function hasMutation(dna) { // función principal
    let mutation = false // si se encuentra una mutación se cambia el estado

    const leftEnd = dna.map((letter,index )=> {
      return letter[index] //oblicua izquierda a derecha
    })
    const rightEnd = dna.map((letter,index )=> {
      return letter[letter.length - index - 1] // oblicua derecha a izquierda
    })
    const upDown = dna.map((letter )=> {
      return letter[0] //vertical
    })
    const horizontal = isFilter(dna) // solo si encuentra la cadena de mutacion horizontal
    const leftToRight = isFilter([leftEnd.join('')])
    const rightToLeft = isFilter([rightEnd.join('')])
    const upToDown = isFilter([upDown.join('')])
    const result = horizontal.length + leftToRight.length + rightToLeft.length + upToDown.length

    result>1? mutation = true : null
    mutation ? res.status(200).end() : res.status(403).end()
  }
  hasMutation(req.body.dna) // invocar la función principal enviando los parámetros obtenidos desde la petición
}
