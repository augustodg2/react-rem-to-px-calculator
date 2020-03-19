import React, { useState, useEffect } from 'react';
import './App.css';
import RemInput from './components/RemInput';
import PxInput from './components/PxInput';
import RootFSInput from './components/RootFSInput';

function App() {
  const [rootFSValue, setRootFSValue] = useState(14)
  const [remValue, setRemValue] = useState(1)
  const [pxValue, setPxValue] = useState(rootFSValue)
  const [mode, setMode] = useState('remToPx')

  useEffect(() => {
    if (mode === 'remToPx') setPxValue(remValue * rootFSValue)
    else if (mode === 'pxToRem') setRemValue(pxValue / rootFSValue)
  }, [rootFSValue, remValue, pxValue, mode])

  const onRootFSChange = (e) => {
    let newValue = e.target.validity.valid ? e.target.value : rootFSValue;
    setRootFSValue(newValue)
  }

  const onRemChange = (e) => {
    let newValue = e.target.validity.valid ? e.target.value : remValue;
    setRemValue(newValue)
    setMode('remToPx')
  }

  const onPxChange = (e) => {
    let newValue = e.target.validity.valid ? e.target.value : pxValue;
    setPxValue(newValue)
    setMode('pxToRem')
  }

  return (<>
    <div className="container">
      <h1><span className="primary">REM</span> to <span className="primary">PX</span> Calculator</h1>
      <h2>Click to edit values</h2>

      <main className="conversion">
        <RemInput value={remValue} onChange={onRemChange} />
        <PxInput value={pxValue} onChange={onPxChange} />
      </main>

      <RootFSInput value={rootFSValue} onChange={onRootFSChange} />
        
    </div>
    <footer>
      <nav>
        <a href="https://github.com/augustodg2/rem-to-px-calculator"><img src="img\github.png" alt="Source code" title="Source code" /></a>
        <a href="mailto:augustodg2@gmail.com"><img src="img\mail.png" alt="Contact Me" title="Contact Me" /></a>
      </nav>
      <p>Made by Augusto Dias. <a href="#">See my work</a>.</p>
      <p className="muted">Mail icon made by <a href="https://www.flaticon.com/authors/iconixar">Iconixar</a> from www.flaticon.com</p>
    </footer>
  </>);
}

export default App;
