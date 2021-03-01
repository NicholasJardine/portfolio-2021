import React, { Component } from 'react'
import Typical from 'react-typical'
 
class InfoType extends React.Component {
    render () {
      return (
        <Typical
          steps={['Hi, Im Nicholas', 3000, 'I design and build responsive websites and web apps ', 500]}
          loop={Infinity}
          wrapper="p"
        />
      )
    }
  }

  export default InfoType