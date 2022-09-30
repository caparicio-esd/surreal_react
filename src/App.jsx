import React from 'react'
import Header from './components/header/Header'
import {app} from './App.module.sass'

const App = () => {
  return (
    <div className={app}>
      <Header />
    </div>
  )
}

export default App