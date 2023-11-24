import React from 'react'
import {findAllByDisplayValue} from "@testing-library/react";

const Loader = () => {
  return (
    <div className={'loader-wrapper'}>
        <span className={'loader'}></span>
    </div>
  )
}

export default Loader
