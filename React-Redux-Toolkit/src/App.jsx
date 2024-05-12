import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import CounterDisplay from './components/CounterDisplay'
import CounterBtn from './components/CounterBtn'
import EndBtn from './components/EndBtn'
import { useSelector } from 'react-redux'


function App() {
  const newData=useSelector(store=> store.toggle);
  console.log(newData);
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">

          <Header></Header>
          {newData ? <div className="col-lg-6 mx-auto">
            <CounterDisplay></CounterDisplay>
            <CounterBtn></CounterBtn>
          </div>: <EndBtn></EndBtn>}
    </div>
    </>
  )
}

export default App

