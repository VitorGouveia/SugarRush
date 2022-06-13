import { useState } from 'react';
import Products from '../db.json';




export function Category({parentToChild}: any){
  
  const Category = Products.filter((db: { category: string | null ;}) => {
    

      return db.category === parentToChild
    
  })
  return (
    <section className="product-section">
      { 
        Category.map( db => {
          return(
            <>
              {db.products.map( product => {
                return(
                  <div className="card-container">
                  <div className="card-content">
                       <h1 className="card-title">{product.name}</h1>
                       <p className="card-description">{product.description}</p>
                       <h2 className="card-price">R$ {product.price}</h2>
                  </div>
                  <img src={product.image} alt={product.name} className="card-image" />
              </div>
                  )
                })}
            </>
          )})
        }
    </section>
    )
  }