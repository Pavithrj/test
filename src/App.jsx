import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Test from './components/test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col gap-4'>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <Test />
    </div>
  )
}

export default App
