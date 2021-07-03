import React, { useState } from 'react'
import Navbar from '../../components/topbar/topbar'
import './home.css'
const initialCount = 10
const fruits = [
  {
    id: 1,
    name: 'Apple',
    color: 'red',
  },
  {
    id: 2,
    name: 'Orange',
    color: 'orange',
  },
  { id: 3, name: 'Grapes', color: 'purple' },
]
var stack = []
export default function Home() {
  const [apple, setApple] = useState(initialCount)
  const [orange, setOrange] = useState(initialCount)
  const [grapes, setGrapes] = useState(initialCount)
  const handleCounter = (a) => {
    if (a === 1) {
      setApple((prevCount) => prevCount - 1)
      stack.push(fruits[0])
    }
    if (a === -1) {
      setApple((prevCount) => prevCount + 1)
      stack.pop(fruits[0])
    }
    if (a === 2) {
      setOrange((prevCount) => prevCount - 1)
      stack.push(fruits[1])
    }
    if (a === -2) {
      setOrange((prevCount) => prevCount + 1)
      stack.pop(fruits[1])
    }
    if (a === 3) {
      setGrapes((prevCount) => prevCount - 1)
      stack.push(fruits[2])
    }
    if (a === -3) {
      setGrapes((prevCount) => prevCount + 1)
      stack.pop(fruits[2])
    }
  }
  return (
    <>
      <Navbar />
      <div className='fruit-title'>
        <h1>All Items</h1>
      </div>
      <div className='fruit-counter'>
        <div className='fruit-item' style={{ background: 'red' }}>
          <div className='fruit-name'>
            <h3>Apple</h3>
          </div>
          <div className='fruit-count'>
            <button
              onClick={() => {
                var a = 1
                handleCounter(a)
              }}
            >
              +
            </button>
            <h4>{apple}</h4>
            <button
              onClick={() => {
                var a = -1
                handleCounter(a)
              }}
            >
              -
            </button>
          </div>
        </div>
        <div className='fruit-item' style={{ background: 'orange' }}>
          <div className='fruit-name'>
            <h3>Orange</h3>
          </div>
          <div className='fruit-count'>
            <button
              onClick={() => {
                var a = 2
                handleCounter(a)
              }}
            >
              +
            </button>
            <h4>{orange}</h4>
            <button
              onClick={() => {
                var a = -2
                handleCounter(a)
              }}
            >
              -
            </button>
          </div>
        </div>
        <div className='fruit-item' style={{ background: 'purple' }}>
          <div className='fruit-name'>
            <h3>Grapes</h3>
          </div>
          <div className='fruit-count'>
            <button
              onClick={() => {
                var a = 3
                handleCounter(a)
              }}
            >
              +
            </button>
            <h4>{grapes}</h4>
            <button
              onClick={() => {
                var a = -3
                handleCounter(a)
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div className='divider'>
        <br />
        <br />
      </div>
      <div className='stack'>
        <h1>Basket </h1>
        <div className='box'>
          {stack.map((stack) => {
            return (
              <div
                key={stack.id}
                className='box-item'
                style={{ background: stack.color }}
              >
                {stack.name}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
