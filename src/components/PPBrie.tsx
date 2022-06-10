import Products from '../db.json';


export function PPBrie(){
  const pPBrie = Products.filter((db: { category: string; }) => {
    return db.category === "Brie Folhado";
  })
  return (
    <div className="PPBrie">
      { 
        pPBrie.map( db => {
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