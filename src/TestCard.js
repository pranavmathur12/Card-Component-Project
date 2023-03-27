import React from 'react'
import './TestCard.css'

function TestCard(props) {
  return (
    <div className='movie'>
            <div>
              <p>{props.Id}</p>
            </div>
            <div>
              <img src = "https://via.placeholder.com/400" alt = {props.Title}>
                </img>
            </div>
            <div>
              <span>{props.Info}</span>
              <h3>{props.Body}</h3>

            </div>

          </div>
  )
}

export default TestCard