import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';
import { useGlobalContext } from '../context/context';

const Stories = () => {

  const { hits, removeNews, isLoading } = useGlobalContext()
  console.log(hits)
  if (isLoading) {
    return (
      <Card bg="dark" text="light" className="mb-2">
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={3} />
          </Placeholder>
          <div className='d-flex justify-content-between'>
            <Placeholder.Button variant="info" xs={2} />
            <Placeholder.Button variant="danger" xs={2} />
          </div>
        </Card.Body>
      </Card>
    )
  }
  return (<>
    {hits.map((hit) => {

      const { author, objectID, title, url, num_comments } = hit
      return <Card bg="dark" text="light" key={objectID} className="mb-2">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {author} | {num_comments} comments...
          </Card.Text>
          <div className='d-flex justify-content-between'>
            <Button href={url} target="_blank" variant="info">Read More</Button>
            <Button onClick={() => { removeNews(objectID) }} variant="danger">Remove</Button>
          </div>
        </Card.Body>
      </Card>
    })
    }
  </>)
}

export default Stories