import React from 'react'
import HOC from '../../layout/HOC'
import {Row , Col} from 'react-bootstrap'

const ProductDetail = () => {
  return (
<>
<Row>
    <Col md={6}>
        <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80' className='img-large' />
    </Col>
</Row>
</>
  )
}

export default HOC(ProductDetail)