import React from 'react'
import Search from './components/Search'
import Pagination from './components/Pagination'
import Stories from './components/Stories'
import Container from 'react-bootstrap/Container';

const App = () => {
  return (<Container>
    <div className="sticky-top mb-2">
      <Search />
      <Pagination />
    </div>
    <Stories />
  </Container>

  )
}

export default App