import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'

function App() {
  return (
    <div className="app">
      <Header/>

      <div className='app__body'>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
