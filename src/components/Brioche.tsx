import Products from '../db.json';


export function Brioche(){
  const brioche = Products.filter((db: { category: string; }) => {
    return db.category === "Brioches";
  })
  return (
    <div className="Brioche">
      { 
        brioche.map( db => {
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