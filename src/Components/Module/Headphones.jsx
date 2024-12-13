import React from 'react'
import { Col, Row, Card,  } from 'react-bootstrap';
import Phonenav from './Phonenav'
import { product2Datas } from '../Data/Product2';
import Sidenav from './Sidenav';
function Headphones() {
  return (
<Row>
    <Col sm={2}>
    <Sidenav/>
    </Col>
    <Col sm={10}>
    <Phonenav/>
   < div className="phone">
      {product2Datas.map((h) => (
        <Col key={h.id}>
          <Card className="card">
                        <Card.Body>
            <img src={h.image} style={{width:'200px',height:'150px'}} />
              <Card.Title>{h.Brand}</Card.Title>
                            <Card.Text>
                <strong>Frequency:</strong> {h.Frequency} <br />
                <strong>Model:</strong> {h.Model} <br />
                <strong>Connectivity:</strong> {h.Connectivity}<br/>
                <strong>Price:</strong> {h.Price}<br/>
                              </Card.Text>
                                          </Card.Body>
          </Card>
        </Col>
      ))}
      </div>
 </Col>
          </Row>
  );
}


export default Headphones
