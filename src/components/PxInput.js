import React from 'react'
import NumberInput from './NumberInput'

const PxInput = ({ onChange, value }) => {
  return (
    <div className="px-field">
      <h3>Pixels</h3>
      <div className="field">
        <NumberInput
          onChange={onChange}
          field='px'
          placeholder="Enter px value..."
          value={value}
        />
        <span className="unit">px</span>
      </div>
    </div>
  )
}

export default PxInput
