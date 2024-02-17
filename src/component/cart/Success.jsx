import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Success() {
  return (
   <>
   <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="text-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-success" style={{ fontSize: '100px' }} />
            <h1 className="mt-4 text-success">Order Successfully Placed!</h1>
            <p className="lead">Thank you for your purchase. Your order has been successfully placed.</p>
            <button className="btn btn-primary" onClick={() => window.location.href = '/'}>Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Success