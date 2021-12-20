import filter from '../../services/filter';

test ('Only mutations strings', () => { // la función regresa un arreglo si contiene la cadena de mutación
  const arr= ['AAAASF'];
  const result = filter(arr);
  expect(result).toEqual(arr)
})