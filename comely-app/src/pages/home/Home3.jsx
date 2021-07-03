import React, { useReducer } from 'react'
import Navbar from '../../components/topbar/topbar'
import './home.css'
// const initialCount = 10
const fruits = [
  {
    id: 1,
    name: 'Apple',
    size: 10,
    color: 'red',
  },
  {
    id: 2,
    name: 'Orange',
    size: 10,
    color: 'orange',
  },
  { id: 3, name: 'Grapes', size: 10, color: 'purple' },
]
var stack = []
const initialState = { red: 10, orange: 10, purple: 10 }
export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState)
  function reducer(state, action) {
    switch (action.type) {
      case 'addApple':
        return { red: state.red - 1, stack: stack.push(fruits[0]) }
      case 'remApple':
        return { red: state.red + 1, stack: stack.pop(fruits[0]) }
      case 'addOrange':
        return { orange: state.orange - 1, stack: stack.push(fruits[1]) }
      case 'remOrange':
        return { orange: state.orange + 1, stack: stack.pop(fruits[1]) }
      case 'addGrape':
        return { purple: state.purple - 1, stack: stack.push(fruits[2]) }
      case 'remGrape':
        return { purple: state.purple + 1, stack: stack.pop(fruits[2]) }
      default:
        throw new Error()
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
            <button onClick={() => dispatch({ type: 'addApple' })}>+</button>
            <h4>{state.red}</h4>
            <button onClick={() => dispatch({ type: 'remApple' })}>-</button>
          </div>
        </div>
        <div className='fruit-item' style={{ background: 'orange' }}>
          <div className='fruit-name'>
            <h3>Orange</h3>
          </div>
          <div className='fruit-count'>
            <button onClick={() => dispatch({ type: 'addOrange' })}>+</button>
            <h4>{state.orange}</h4>
            <button onClick={() => dispatch({ type: 'remOrange' })}>-</button>
          </div>
        </div>
        <div className='fruit-item' style={{ background: 'purple' }}>
          <div className='fruit-name'>
            <h3>Grapes</h3>
          </div>
          <div className='fruit-count'>
            <button onClick={() => dispatch({ type: 'addGrape' })}>+</button>
            <h4>{state.purple}</h4>
            <button onClick={() => dispatch({ type: 'remGrape' })}>-</button>
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
