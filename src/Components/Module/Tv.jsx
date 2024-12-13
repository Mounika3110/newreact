import React from 'react';
import { Col, Row, Card,  } from 'react-bootstrap';
import {productDatas} from '../Data/Product1'
import Headernav from './Headnav';
import Sidenav from './Sidenav';
import { Link } from 'react-router-dom';
function Tv() {
  return (
    <Row>
      <Col sm={2}>
          <Sidenav/>
      </Col>
        <Col sm={10}>
          <Headernav/>
         <div className='tv' >
         {productDatas.map((e) => (
           <Col >    <Link to={`/tvdetails/${e.id}`} className="text-decoration-none">
          <Card className="card"  >
            <Card.Body>
            <img src={e.image} style={{width:'200px', height:'150px',}}  className="text-decoration-none"/>
              <Card.Title>{e.brand}</Card.Title>
              <Card.Text>
                <strong>Display:</strong> {e.Display} <br />
                <strong>Screen Size:</strong> {e.screensize} inches <br />
                <strong>Dimensions:</strong> {e.Dimensions}
              </Card.Text>
            </Card.Body>
          </Card>
            </Link>
        </Col>
      ))}
            </div>
                </Col>
          </Row>
  );
}

export default Tv;