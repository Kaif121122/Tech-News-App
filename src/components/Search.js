import React from 'react'
import Form from 'react-bootstrap/Form';
import { useGlobalContext } from '../context/context';

const Search = () => {
  const { query,searchPost } = useGlobalContext()
  return (
    <Form className='text-center w-75 m-auto' >
      <Form.Group>
        <Form.Label className="mb-3" as="h2">Search Your Favourite Tech News</Form.Label>
        <Form.Control value={query} onChange={(e) => {  searchPost(e.target.value) }} type="text" placeholder="Enter here..." />
      </Form.Group>
    </Form>
  )
}

export default Search