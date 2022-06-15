import './App.css'
import Header from './components/Header/Header.component'
import Footer from './components/Footer/Footer.component'
import Main from './components/Main/Main'
import { useEffect, useLayoutEffect } from 'react'

function App() {
  useLayoutEffect(() => {
    console.log(`effect layout 1`)
  }, [])
  useEffect(() => {
    console.log(`effect 1`)
  }, [])
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
