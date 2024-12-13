import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import Header from '../Header';
import { productDatas } from '../Data/Product1';
import { product2Datas } from '../Data/Product2';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
function Dashboard() {
  const display=productDatas.slice(0,3)
  const hphone=product2Datas.slice(0,4)
  const hphones=product2Datas.slice(5,9)
  return (
    <div>
      <Header />
      <Row>
        <Col sm={12}>
        <Carousel/>
         <div className='dash'>
            {
              display.map((e)=>{
                return(
                  <div className=" xyz">
            <img src={e.image} style={{width:'250px'}} /><br/>
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
            <Row>
              <Col sm={4}>
                <h4>Min.25% off</h4>
              <div className='head'>
                {
                  hphone.map((h)=>{
                    return(
                      <div className="qwe">
                        <img src={h.image} style={{width:'150px' }} /><br/>
                        <strong>Brand:</strong>{h.Brand}<br/>
                        <strong>Price:</strong> {h.Price}<br/>
                        </div>
                    )
                  })
                }
              </div>
              
              </Col>
              <Col sm={4}>
              <h4>Min.20% off</h4>
              <div className='head'>
                {
                  hphones.map((h)=>{
                    return(
                      <div className="qwe">
                        <img src={h.image} style={{width:'150px' }} /><br/>
                        <strong>Brand:</strong>{h.Brand}<br/>
                        <strong>Price:</strong> {h.Price}<br/>
                        </div>
                    )
                  })
                }
              </div>
              </Col>
              <Col sm={4}>
              <h4>Min.10% off</h4>
              <div className='head'>
                {
                  hphone.map((h)=>{
                    return(
                      <div className="qwe">
                        <img src={h.image} style={{width:'150px' }} /><br/>
                        <strong>Brand:</strong>{h.Brand}<br/>
                        <strong>Price:</strong> {h.Price}<br/>
                        </div>
                    )
                  })
                }
              </div>
              </Col>
            </Row>
            <Link to='/headphone'>View More</Link>
        </Col>
      </Row>
    </div>
  )
}
export default Dashboard;