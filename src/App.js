import './App.css'
import Footer from './components/Footer/Footer.component'
import Header from './components/Header/Header.component'
import Main from './components/Main/Main'

function App() {
  console.log(`Render App`)

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
