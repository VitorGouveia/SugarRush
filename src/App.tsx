import './App.css'
import Products from './db.json'
import {Button} from './Components/Button.style'

function App() {
  return (
    <div className="App">
      {
        Products.map( db => {
          return(
            <div className="products-box">
             <h1>{ db.category }</h1>
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
