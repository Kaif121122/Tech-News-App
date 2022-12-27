import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useGlobalContext } from '../context/context';

const Pagination = () => {
  const { page, nbPages, goPrev, goNext } = useGlobalContext()
  return (
    <Container>
      <div className='d-flex justify-content-center'>
        <Button onClick={() => { goPrev() }} variant="dark">PREV</Button>
        <p className='my-auto px-1'><span>{page + 1}</span>  of  <span>{nbPages}</span></p>
        <Button onClick={() => { goNext() }} variant="dark">NEXT</Button>
      </div>
    </Container>
  )
}

export default Pagination