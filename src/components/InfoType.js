import React, { Component } from 'react'
import Typical from 'react-typical'
import styled from 'styled-components'
import { HeroH1 } from './HeroSection/HeroElements'


class InfoType extends React.Component {
    render () {
      return (
        // <TypeBox>
                  <Typical
          steps={['I design and create responsive web apps ', 2000, "I bring Ideas to life", 10000]}
          loop={1}
          wrapper="p"
        />


        // </TypeBox>

      )
    }
  }

  export default InfoType