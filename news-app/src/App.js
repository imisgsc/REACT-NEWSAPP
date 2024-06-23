import React from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewBoard'
import NewsItem from './Components/NewsItem'

const App = () => {
  return (
    <div>
      <Navbar/>
      <NewsBoard/>
      <NewsItem/>
    </div>
  )
}

export default App