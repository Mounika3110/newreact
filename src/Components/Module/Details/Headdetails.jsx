import React, { createContext, useState } from 'react'
import Sidenav from '../Sidenav'
import Topbar from './Topbar'
import {product2Datas} from '../../Data/Product2'
import { useParams } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'

export const useContext= createContext()
function Tvdetails() {
    const [cart, setCart] = useState(0)
    let {id} = useParams()
    let product = product2Datas.find((h)=>h.id==id)
  return (
    <div>
      <Row>
        <Col sm={2}>
        <Sidenav/>
        </Col>
        <Col sm={10}>
        <Topbar/>
        <div className='container d-flex justify-content-around align-items-center py-4 '>
                        <div className='data'>
                            <p>{cart}</p>
                            <p>{product.id}</p>
                            <p>Brand:{product.Brand}</p>
                            <p>Battery:{product.battery}</p>
                            <p>Model:{product.Model}</p>
                            <p>Weight:{product.weight}</p>
                            <p>Price:{product.Price}</p>
                            <button className='btn btn-outline-primary' onClick={() => setCart(cart + 1)}>add to cart</button>
                        </div>
                        <div className='product'>
                            <img src={product.image} style={{ width: "300px" }} alt="" />
                        </div>

                    </div>
                            </Col>
        </Row>
        </div>
        )
    }

export default Tvdetails
