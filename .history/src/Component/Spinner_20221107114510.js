import React from 'react'
import {s} from 'react-bootstrap'

const Spinner = () => {
    return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
}

export default Spinner