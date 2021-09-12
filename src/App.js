import Item from './components';
import Card from './components/Card';
const App = () => {

  return(
    <>
    <h1>  Minha primeira aplicação com React </h1>
    <p>Eu sou um parágrafo</p>
    <ul>
     <Item>
      Item 1
     </Item>
     <Item>
      Item 2   
     </Item>  
     <Item>
      Item 3
     </Item>
    </ul>
    <Card/>
    </>
  )
}

export default App;

