import {leftEnd} from '../../services/array'

test('search mutations top left to right end', () => {// se crea un nuevo arreglo de forma oblicua de izquierda a derecha
  const arr= ['ATGCGA','CAGTGC','TTATGT','AGAAGG','CCCCTA','TCACTG'];
  const result = leftEnd(arr);
  expect(result).toEqual(["A", "A", "A", "A", "T", "G"])
})