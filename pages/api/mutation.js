import isFilter from "../../services/filter" // la función verifica las condiciones del filtro
import { leftEnd, rightEnd, upDown } from "../../services/array" // las funciones de busqueda de patrones
import mutationUpdate from "../../services/updater" // actualizar las estadisticas
import isValid from "../../services/dnaLetters" // solo si tiene las letras permitidas pueden pasar a la función de mutación

export default function handler(req, res) {
  const dna = req.body.dna
  if (req.method !== 'POST') return res.status(400).send({ error: '400' }) //equivalente a app.post('/api/mutation')

  function hasMutation(dna) { // función principal
    let mutation = false // si se encuentra una mutación se cambia el estado
    /* Comienza la busqueda de mutaciones */
    const horizontal = isFilter(dna) // horizontal
    const leftToRight = isFilter([leftEnd(dna).join('')]) //oblicua izquierda a derecha
    const rightToLeft = isFilter([rightEnd(dna).join('')]) // oblicua derecha a izquierda
    const upToDown = isFilter([upDown(dna).join('')]) //vertical
    const result = horizontal.length + leftToRight.length + rightToLeft.length + upToDown.length
    result > 1 ? mutation = true : null

    if (mutation) { // actualizando las estadisticas y retornado resultados
      mutationUpdate('mutationUpdate')
        .then(() => { res.status(200).end() })
        .catch(error => res.status(500).send(error))
    } else {
      mutationUpdate('noMutationsUpdate')
        .then(() => { res.status(403).end() })
        .catch(error => res.status(500).send(error))
    }
  }


  // el arreglo debe cumplir con la cadena de letras de lo contrario retorna un error
  if (isValid && dna.length > 0) {
    hasMutation(dna) // invocar la función principal enviando los parámetros obtenidos desde la petición
  } else {
    res.status(400).send({ error: '400' })
  }
}
