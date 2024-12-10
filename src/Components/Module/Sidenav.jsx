import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='side'>
    <ul>
      <Link to={'/tv'}>TV</Link><br/>
      <Link to={'/speaker'}>Speaker</Link><br/>
      <Link to={'/headphones'}>Headphones</Link><br/>
    </ul>
  </div>
  )
}

export default Sidenav



