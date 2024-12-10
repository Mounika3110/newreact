import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header'
import Sidenav from './Sidenav';

function Dashboard() {
  return (
    <div>
            <Header/>
    <Row>
      <Col sm={2}>
      <div><Sidenav/></div>
      </Col>
      <Col sm={10}>
<h2 className='title'>TV</h2>
<Row className='dash'>
 
</Row>
      </Col>
    </Row>
    </div>
  );
}

export default Dashboard;
