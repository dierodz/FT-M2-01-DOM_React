import React from 'react'
import Header from 'components/Header'
import CreatedBy from 'components/CreatedBy'
import Container from 'components/Container'

function App() {
  return (
    <div className="App">
      <Header />
      <h1>To-Do App</h1>
      <CreatedBy />
      <Container />
    </div>
  )
}

export default App
