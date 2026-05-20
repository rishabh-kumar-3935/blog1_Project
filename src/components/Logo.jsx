import React from 'react'
import logo from '../assets/logo.png'

function Logo({width = '40px', height = 'auto'}) {
  return (
    <img
      src={logo}
      style={{ width, height, display: 'block' }}
      alt='MegaBlog logo'
    />
  )
}

export default Logo