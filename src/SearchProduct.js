import Header from './Header'
import { useState } from 'react'
function SearchProduct() {
  
  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Search Product</h1>
        <br />
        <input type="text" className="form-control" placeholder="Search Product" />
      </div>
    </div>
  )
}

export default SearchProduct