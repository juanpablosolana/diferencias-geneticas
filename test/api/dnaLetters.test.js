import isValid from '../../services/dnaLetters';

test('Only DNA letters', () => { // la función regresa false si encuentra una letra invalida para la secuencia de ADN
  const arr = ['A', 'T', 'C', 'G'];
  const result = isValid(arr);
  expect(result).toBe(true)
});