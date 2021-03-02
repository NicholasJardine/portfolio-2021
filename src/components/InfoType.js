import React, { Component } from 'react'
import Typical from 'react-typical'
import styled from 'styled-components'
import { HeroH1 } from './HeroSection/HeroElements'


class InfoType extends React.Component {
    render () {
      return (
        // <TypeBox>
                  <Typical
          steps={['I design and build responsive websites and web apps ', 5000]}
          loop={Infinity}
          wrapper="p"
        />


        // </TypeBox>

      )
    }
  }

  export default InfoType