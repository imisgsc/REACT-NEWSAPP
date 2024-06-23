import React from 'react'
import Navbar from './Components/Navbar'
import NewsItem from './Components/NewsItem'
import NewsBoard from './Components/Newsboard'

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