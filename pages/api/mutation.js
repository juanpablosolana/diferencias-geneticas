import isFilter from "../../services/filter" // la función verifica las condiciones del filtro
import {mutationUpdate, noMutationsUpdate} from "../../services/updater" // la función actualiza el documento }
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
    const horizontal = isFilter(dna) // horizontal
    const leftToRight = isFilter([leftEnd.join('')]) // el resultado no llega formateado por eso el [.join(')]
    const rightToLeft = isFilter([rightEnd.join('')])
    const upToDown = isFilter([upDown.join('')])
    const result = horizontal.length + leftToRight.length + rightToLeft.length + upToDown.length
    result>1? mutation = true : null

    if (mutation) {
      mutationUpdate()
      .then(()=>{res.status(200).end()})
      .catch(error=>console.log(error))
    } else{
      noMutationsUpdate()
        .then(() => { res.status(403).end() })
        .catch(error => console.log(error))
    }
  }
  hasMutation(req.body.dna) // invocar la función principal enviando los parámetros obtenidos desde la petición
}
