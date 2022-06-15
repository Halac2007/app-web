import { useEffect, useLayoutEffect } from 'react'
import './App.css'
import Footer from './components/Footer/Footer.component'
import Header from './components/Header/Header.component'
import Main from './components/Main/Main'

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
