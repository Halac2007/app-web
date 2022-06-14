import './App.css'
import Header from './components/Header/Header.component'
import Footers from './components/Footer/Footer.component'
import Mains from './components/Main/Main'

function App() {
  return (
    <>
      <Header />
      <Mains />
      <footer>
        <Footers />
      </footer>
    </>
  )
}

export default App
