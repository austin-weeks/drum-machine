import './App.css'
import DrumMachine from './Components/DrumMachine'
import reactlogo from "./assets/react.svg"

function App() {

  return (
    <>
    <div className='heading'>
      <h1>Drum Machine</h1>
      <h3>Made with React <img className='react-logo' src={reactlogo} /></h3>
    </div>
    <DrumMachine />
    <div style={{fontSize: "0.8rem"}}>
      made by <a href="http://austin-weeks.github.io" target="_blank">austin weeks</a>
    </div>
    <div className='footer-atr'>
      <a href="https://www.flaticon.com/" target='_blank' >Cymbal, Bass, and Snare icons from Flaticon.com</a>
    </div>
    </>
  )
}

export default App
