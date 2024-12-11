import React from 'react';
import { Row, Col,Card ,Button } from 'react-bootstrap';
import Header from '../Header';
import Sidenav from './Sidenav';
import { productDatas } from '../Data/Product1';
import { Link } from 'react-router-dom';
function Dashboard() {
  const display=productDatas.slice(0,3)
  return (
    <div>
      <Header />
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
         <div className='dash'>
            {
              display.map((e)=>{
                return(
                  <div className=" xyz">
            <img src={e.image} style={{width:'200px'}} /><br/>
              <strong>Brand:</strong>{e.brand}<br/>
                <strong>Display:</strong> {e.Display} <br />
                <strong>Screen Size:</strong> {e.screensize} inches <br />
                <strong>Dimensions:</strong> {e.Dimensions}
          </div>
                )
              })
            }
            </div>
        <Col className="text-center mt-1">
              <Link to='/tv' className='small'>View More
              </Link>
            </Col>
        </Col>
      </Row>
    </div>
  )
}
export default Dashboard;