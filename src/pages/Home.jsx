import About from '../components/About'
import React from 'react';  
import { Card, Col, Row } from 'react-bootstrap';  

const Home = ({ students }) => {  
    return (  
      <Row className="g-4">  
        {students.map(student => (  
          <Col key={student.id} md={3}>  
            <Card>  
              <Card.Img variant="top" src={student.image} />  
              <Card.Body>  
                <Card.Title>{student.name}</Card.Title>  
                <Card.Text>  
                  Age: {student.age}<br />  
                  Course: {student.course}  
                </Card.Text>  
              </Card.Body>  
            </Card>  
          </Col>  
        ))}  
      </Row>  
    );  
  };  
  
  export default Home;  