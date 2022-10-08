import './App.css';
import { Menu } from './components/Menu';
import Container from 'react-bootstrap/Container';
import { ItemListContainer } from './components/ItemListContainer';

function App() {

  const greet = " Bienvenido a Elegant";
  const greetP = "Nuestra pagina web se encuentra en construcción."

  return (
    <div>
      <header className='header'>
        <Menu />
      </header>
        <ItemListContainer greeting={greet} greetP={greetP} />      
    </div>
  );
}

export default App;
