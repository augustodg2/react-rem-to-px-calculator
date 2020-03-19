import React from 'react'
import NumberInput from './NumberInput'

const RemInput = ({ onChange, value }) => {
  return (
    <div className="rem-field">
      <h3>REM</h3>
      <div className="field">
        <NumberInput
          onChange={onChange}
          field='rem'
          placeholder="Enter rem value..."
          value={value}
        />
        <span className="unit">rem</span>
      </div>
    </div>
  )
}

export default RemInput
