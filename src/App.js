import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' //importamos el css

import Header from './Header'
import Card from './Card'
import Footer from './Footer'

function App() {
  return (
  <div>
    <Header title='Galería de imágenes con React'></Header>
    <Card 
    imgurl="https://images.pexels.com/photos/4994765/pexels-photo-4994765.png?auto=compress&cs=tinysrgb&w=1600"
    title='Andrómeda'
    descr='El objeto visible más lejano a la tierra'
    ></Card>
    <Card 
    imgurl="https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg?auto=compress&cs=tinysrgb&w=1600"
    title='Cyngus-A'
    descr='Considerada una radio-galaxia'
    ></Card>

    <Footer></Footer>
   
   
    
  </div>
  );
}

export default App;
