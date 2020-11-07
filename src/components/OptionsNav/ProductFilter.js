import React from 'react';

export const ProductFilter = props => {

  return (
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2 bg-light" type="search" placeholder="Filter" aria-label="Filter" />
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Filter</button>
    </form>
  )
}