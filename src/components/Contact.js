import React from 'react'

import {Link,Outlet} from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <Link to={'insta'}><h4>Contact via Instagram</h4></Link>
      <Link to={'Mail'}><h4>Contact via Mail</h4></Link>
      <Outlet/>
    </div>
  )
}

export default Contact
