import { upDown } from '../../services/array'

test('search mutations top left to right end', () => {// se crea un nuevo arreglo de arriba a abajo
  const arr = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'];
  const result = upDown(arr);
  expect(result).toEqual(["A", "C", "T", "A", "C", "T"])
})