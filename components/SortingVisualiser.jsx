import { useState, useEffect } from 'react'
import { getMergeSortAnimations } from "../algorithms/mergeSort"

function SortingVisualiser() {
  const [array, setArray] = useState([])
  const ANIMATION_SPEED_MS = 1
  const NUMBER_OF_ARRAY_BARS = 228
  const PRIMARY_COLOR = "#3B82F6"
  const SECONDARY_COLOR = "red"
  
  const resetArray = () => {
    const array = []
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++){
      array.push(randomIntFromIntercal(10, 800))
    }
    setArray(array)
  }

  const mergeSort = () => {
      const animations = getMergeSortAnimations(array);
      for(let i = 0; i < animations.length; i++){
        const arrayBars = document.getElementsByClassName("arrayBar")
        const isColorChange = i % 3 !== 2
        if(isColorChange){
          const [barOneIndex, barTwoIndex] = animations[i]
          const barOneStyle = arrayBars[barOneIndex].style
          const barTwoStyle = arrayBars[barTwoIndex].style
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color
          barTwoStyle.backgroundColor = color
        }, i * ANIMATION_SPEED_MS)
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i]
          const barOneStyle = arrayBars[barOneIdx].style
          barOneStyle.height = `${newHeight}px`
        }, i * ANIMATION_SPEED_MS)
      }
    }
  }

  useEffect(() => {
    resetArray()
  }, [])

  return (
    <>
    {/*Tool Bar*/}
    <div className="w-full h-16 flex space-x-4 pl-4 bg-blue-700 text-white">
      <button onClick={() => mergeSort()}>Merge Sort</button>
      <button>Bubble Sort</button>
      <button>Heap Sort</button>
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
            className="arrayBar inline-block text-xs text-white w-[5px] mx-[1px]"
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}
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