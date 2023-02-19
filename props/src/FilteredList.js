import { useMemo } from 'react'

function FilteredList({ objectList }) {
  function filterAdults(objectList) {
    const adults = []
    Object.keys(objectList).forEach((key) => {
      if (objectList[key].age > 18) {
        adults.push(objectList[key])
      }
    })
    return adults
  }

  const adults = useMemo(() => filterAdults(objectList), [objectList])

  return (
    <div>
      <h3>Filtered List</h3>
      <ul>
        {adults &&
          adults.map((adult, index) => {
            return (
              <li key={index + adult.id}>
                id: {adult.id}
                &nbsp; name: {adult.name}
                &nbsp; age: {adult.age}
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default FilteredList
