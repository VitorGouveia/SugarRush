import './App.css'
import Products from './db.json'

function App() {
  return (
    <div className="App">
      {
        Products.map( db => {
          return(
            <div className="category-box">
             <h1>{ db.category }</h1>
             <img className="category-image"src={db.img}></img>
              {db.products.map( db => {
               return(
                <div>
                <h3>{db.name}</h3>
                <p>{db.description}</p>
                <p>R${db.price}</p>
                <img src={db.image}></img>
                </div>
               )
             })}
            </div>
          )
        })
        }
    </div>
  )
}

export default App
