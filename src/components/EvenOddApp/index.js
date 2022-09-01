import {Component} from 'react'
import './index.css'

export default class EvenOddApp extends Component {
  state = {
    currentNumber: 0,
    isEven: true,
  }

  onIncrement = () => {
    this.setState(previousNumberState => {
      const {currentNumber} = previousNumberState
      const randomNumber = Math.ceil(Math.random() * 100)
      const newNumber = currentNumber + randomNumber

      const isNewNumberEven = newNumber % 2 === 0

      return {
        currentNumber: newNumber,
        isEven: isNewNumberEven,
      }
    })
  }

  render() {
    const {currentNumber, isEven} = this.state

    return (
      <div className="even-odd-bg-container">
        <div className="content-container">
          <h1 className="even-odd-header">Count {currentNumber}</h1>
          <p className="even-odd-result">Count is {isEven ? 'Even' : 'Odd'}</p>
          <button
            type="button"
            className="increment-button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="increment-button-description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
