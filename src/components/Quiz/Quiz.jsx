import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>1. Question?</h2>
      <ul>
        <li>Answer 1</li>
        <li>Answer 2</li>
        <li>Answer 3</li>
        <li>answer 4</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 10 questions</div>
    </div>
  )
}

export default Quiz