export default function isFilter(array) {
  return array.filter(letter => {
    return (
      letter.includes('AAAA') ||
      letter.includes('TTTT') ||
      letter.includes('CCCC') ||
      letter.includes('GGGG')
    )
  })
}