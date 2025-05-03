import logo from './logo.png';
import './App.css';
import Header from './MyComponents/header';
import Footer from './MyComponents/footer';
import Todos from './MyComponents/todos';
function App() {
  return (
    <div classNameName="App">
      <Header title="Listify" searchbar={false}/>
      <Todos/>
      <Footer/>
    </div>
  );
}

export default App;
