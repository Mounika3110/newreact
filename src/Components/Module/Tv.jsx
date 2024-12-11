import React from 'react';
import { Col, Row, Card,Button  } from 'react-bootstrap';
import {productDatas} from '../Data/Product1'
import { Link } from 'react-router-dom';

function Tv() {
  return (
    
    <Row className="main">
                  <Link to='/dashboard'><p>back</p></Link> 

      {productDatas.map((e) => (
        <Col key={e.id}>
          <Card className="card">
            <Card.Body>
            <img src={e.image} style={{width:'200px'}} />
              <Card.Title>{e.brand}</Card.Title>
              <Card.Text>
                <strong>Display:</strong> {e.Display} <br />
                <strong>Screen Size:</strong> {e.screensize} inches <br />
                <strong>Dimensions:</strong> {e.Dimensions}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
 
          </Row>
  );
}

export default Tv;