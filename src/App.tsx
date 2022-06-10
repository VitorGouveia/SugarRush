import './App.css'
import Products from './db.json'
import './styles/main.scss'

import { Header } from './components/Header'
import { Slider } from './components/Slider'
import { Footer } from './components/Footer'
import { Bread } from './components/Bread'
import { Macaron } from './components/Macaron'
import { PPBrie } from './components/PPBrie'
import { Focaccia } from './components/Focaccia'
import { Cake } from './components/Cake'
import { Brioche } from './components/Brioche'
import { Breakfast } from './components/Breakfast'
import { Dessert } from './components/Dessert'
import { Triffle } from './components/Triffle'
import { PuffPastry } from './components/PuffPastry'
import { SpecialCake } from './components/SpecialCake'
import { Category } from './components/Category'

function App() {
  return (
        <div className="App">
            <main>
            <Header/>
            <Slider/>
            <Footer/>
            </main>
        </div>
        )
      }
      
      export default App
      