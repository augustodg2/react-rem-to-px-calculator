import React from 'react'
import NumberInput from './NumberInput'

const RootFSInput = ({ onChange, value }) => {
  return (
    <div className="root-fs-field">
      <div className="field">
        <NumberInput
          onChange={onChange}
          field='root-fs'
          placeholder="Enter root font-size..."
          value={value}
        />
        <span className="unit">px</span>
      </div>
      <h4 className="title">Root font size:</h4>
    </div>
  )
}

export default RootFSInput
