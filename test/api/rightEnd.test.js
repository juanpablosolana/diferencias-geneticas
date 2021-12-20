import { rightEnd } from '../../services/array'

test('search mutations end right to first left', () => {// se crea un nuevo arreglo de forma oblicua de derecha a izquierda
  const arr = [
  'ATGCGA',
  'CAGTGC',
  'TTATGT',
  'AGAAGG',
  'CCCCTA',
  'TCACTG'];
  const result = rightEnd(arr);
  expect(result).toEqual(["A", "G", "T", "A", "C", "T"])
})