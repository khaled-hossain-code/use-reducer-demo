import React, { useReducer } from "react"
import { Button, ButtonGroup } from "react-bootstrap"

import "./counter.scss"

const counterReducer = (state, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case "increment":
      newState.counter++
      newState.btnPressed++
      return newState
    case "decrement":
      newState.counter--
      newState.btnPressed++
      return newState
    case "reset":
      newState.counter = 0
      newState.btnPressed = 0
      return newState
    default:
      throw new Error("Type not implemented")
  }
}

function Counter() {
  const initialState = {
    counter: 0,
    btnPressed: 0,
  }
  const [state, dispatch] = useReducer(counterReducer, initialState)
  const { counter, btnPressed } = state

  const increase = () => {
    dispatch({ type: "increment" })
  }

  const decrease = () => {
    dispatch({ type: "decrement" })
  }

  const reset = () => {
    dispatch({ type: "reset" })
  }

  return (
    <div className="counter">
      <h1>Counter: {counter}</h1>
      <h1>Button Pressed: {btnPressed}</h1>
      <div className="counter__buttons">
        <ButtonGroup size="lg" className="mb-2">
          <Button onClick={increase}>+</Button>
          <Button onClick={decrease}>-</Button>
          <Button onClick={reset}>Reset</Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default Counter
