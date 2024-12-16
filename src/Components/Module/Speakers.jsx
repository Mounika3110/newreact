import React from 'react'
import { Col, Row, Card,  } from 'react-bootstrap';
import { product3Datas } from '../Data/Product3';
import Sidenav from './Sidenav';
import Speakersnav from './Speakersnav'
function Speakers() {
  return (
    <Row>
    <Col sm={2}>
    <Sidenav/>
    </Col>
    <Col sm={10}>
    <Speakersnav/>
   < div className="speaker">
      {product3Datas.map((s) => (
        <Col key={s.id}>
          <Card className="card">
                        <Card.Body>
            <img src={s.image} style={{width:'200px',height:'150px'}} />
              <Card.Title>{s.Brand}</Card.Title>
                            <Card.Text>
                <strong>Battery:</strong> {s.battery} <br />
                <strong>Weight:</strong> {s.weight} <br />
                <strong>Model:</strong> {s.Model} <br />
                <strong>Price:</strong> {s.Price}<br/>
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


export default Speakers
