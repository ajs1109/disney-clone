import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'
import  GenreMoviesList  from "./Components/GenreMoviesList";
function App() {


  return (
    <div className='h-full' >
       <Header />
       <Slider/> 
       <ProductionHouse />
       <GenreMoviesList/>
    </div>
  )
}

export default App
