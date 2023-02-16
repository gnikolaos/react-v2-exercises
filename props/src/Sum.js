function Sum({ numbers }) {
  const calculateSum = numbers.reduce((total, current) => {
    return total + current
  }, 0)

  return <h1>{calculateSum}</h1>
}

export default Sum
