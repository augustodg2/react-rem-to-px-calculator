import React, { useState, useRef, useEffect } from 'react'

const NumberInput = ({ onChange, field, placeholder, value }) => {
  const txt = useRef(null)
  const hide = useRef(null)
  
  useEffect(() => {
    hide.current.textContent = value
    txt.current.style.width = (hide.current.offsetWidth + 8) + "px";
    // set width to placeholder offset if has no value
  }, [value])

  return (<>
    <span className="hide" ref={hide}></span>
    <input
      ref={txt}
      type="text"
      pattern="([0-9]+([.][0-9]*)?|[.][0-9]+)"
      name={field}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      data-testid={`${field}-input`}
    />
  </>)
}

export default NumberInput
