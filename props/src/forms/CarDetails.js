import { useRef } from 'react'

function CarDetails({model= 'Mazda RX-7', color= 'White', year= '1991'}) {
  const modelRef = useRef(null)
  const colorRef = useRef(null)
  const yearRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    modelRef.current.value = model
    colorRef.current.value = color
    yearRef.current.value = year
  }

  return (
    <div>
      <hr />
      <h3>Car Details</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='model' name='model'>
          Model:
          <input ref={modelRef} name='model' defaultValue={model} />
        </label>
        &nbsp;
        <label htmlFor='color' name='color'>
          Color:
          <input ref={colorRef} name='color' defaultValue={color} />
        </label>
        &nbsp;
        <label htmlFor='year' name='year'>
          Year:
          <input ref={yearRef} name='year' defaultValue={year} />
        </label>
        &nbsp;
        <button type='submit'>Submit</button>
      </form>
      <hr />
    </div>
  )
}

export default CarDetails
