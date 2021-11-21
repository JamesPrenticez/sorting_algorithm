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

  return (
    <>
    {/*Tool Bar*/}
    <div className="w-full h-16 flex space-x-4 pl-4 bg-blue-700 text-white">
      <button>Merge Sort</button>
      <button>Bubble Sort</button>
      <button>Merge Sort</button>
      <button>Quick Sort</button>
      <button 
        onClick={() => resetArray()}
        className=" !mr-4 px-4 !m-auto h-10 border border-white hover:bg-blue-500  rounded-lg"
      >
        Generate New Array
      </button>
    </div>

    {/*Display Visualiser*/}
    <div className="w-screen h-screenNav flex justify-center items-center bg-gray-50">
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
