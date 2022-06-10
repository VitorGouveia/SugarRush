import Products from '../db.json';




export function Category(){
    var filter: string | null
  const Category = Products.filter((db: { category: string | null ;}) => {
    return db.category === filter;
  })
  return (
    <div className="Category">
      { 
        Category.map( db => {
          return(
            <div>
              <h1></h1>
              {db.products.map( product => {
                return(
                  <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>R${product.price}</p>
                  <img src={product.image}></img>
                  </div>
                  )
                })}
            </div>
          )})
        }
    </div>
    )
  }