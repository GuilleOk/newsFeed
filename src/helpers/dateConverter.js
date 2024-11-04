export const dateConverter = ({ date }) => {
  const index = date.indexOf('T')
  return date.substring(0, index)
}