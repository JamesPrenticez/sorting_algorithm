import { useState, useEffect } from 'react'

function SortingVisualiser() {
  const [array, setArray] = useState([])

  useEffect = () => {
    resetArray()
  }, []

  const resetArray = () => {
    const array = []
    for (let i = 0; i < 100; i++){
      array.push(randomIntFromIntercal(5, 1000))
    }
    setArray(array)
  }

  return (
    <div className="flex flex-wrap w-full bg-gray-100">
      {array.map((value, index) => (
      <div 
        key={index}
        className="inline-block text-sm text-red-500 mx-1"
      >
        {value}
      </div>  
       ))}
    </div>
  )
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromIntercal(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default SortingVisualiser
