import './App.css'
import Products from './db.json'
import './styles/main.scss'

import { Header } from './components/Header'
import { Slider } from './components/Slider'
import { Footer } from './components/Footer'

function App() {
  return (
        <div className="App">
          {/* {
          Products.map( db => {
            return(
              <div className="products-box">
              <h1>{ db.category }</h1>
              <img src={db.img}></img>
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
            } */}
            <main>
              <Header/>
              <Slider/>
              <Footer/>
            </main>
        </div>
        )
      }
      
      export default App
      