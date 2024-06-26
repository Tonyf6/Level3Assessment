import { useState } from "react"

const CounterExam = () => {

  const [count, setCount] = useState(0)


const handleIncrease = () => {
  setCount(prevCount => prevCount + 1)
}
const handleDecrease = () => {
  setCount(prevCount => prevCount - 1)
}

  return (
    <>
    <h1 className="text-center">Counter</h1>
    <p>{count}</p>
    <button onClick={handleIncrease}>Increase</button>
    <button onClick={handleDecrease}>Decrease</button>
    </>
  )
}

export default CounterExam