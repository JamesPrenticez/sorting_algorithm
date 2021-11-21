import { useState, useEffect } from 'react'

function SortingVisualiser() {
  const [array, setArray] = useState([])

  const resetArray = () => {
    const array = []
    const w = Math.floor((screen.width * 0.8333) / 7)
    console.log(w)
    for (let i = 0; i < w; i++){
      array.push(randomIntFromIntercal(10, 800))
    }
    setArray(array)
  }

  useEffect(() => {
    resetArray()
  }, [])

  // {console.log(screen.width)}
  return (
    <>
    <div className="w-screen h-screen flex justify-center items-center bg-gray-50">
      
      <div className="w-5/6 h-[800px]  flex items-end bg-gray-200">
        {array.map((value, index) => (
          <div 
          key={index}
          className="inline-block text-xs text-white bg-blue-500 w-[5px] mx-[1px]"
          style={{height: value}}
          >
        </div>  
        ))}
        </div>
      </div>
    </>
  )
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromIntercal(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default SortingVisualiser
