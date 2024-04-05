import { React } from 'react'
import style from './App.module.css'
import { AppHeader } from './components/AppHeader'

function App() {

  return (
    <div className={style.container}>
      <AppHeader title='マイページ'/>
      <main />
      <footer />
    </div>
  )
}

export default App
