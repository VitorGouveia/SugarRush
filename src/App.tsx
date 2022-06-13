import './App.css'
import './styles/main.scss'

import { Header } from './components/Header'
import { Slider } from './components/Slider'
import { Footer } from './components/Footer'
import { Category } from './components/Category'
import { SetStateAction, useState } from 'react'

function App() {
  const [filter, setFilter] = useState('Café da Manhã');
  const childToParent = (childfilter: SetStateAction<string>) => {
    setFilter(childfilter)
  }
  

  return (
    
        <div className="App">
            <main>
              <Header/>
              <Slider childToParent = {childToParent} />
              <Category parentToChild ={filter}/>
              <Footer/>
            </main>
        </div>
        )
      }
      
      export default App
      