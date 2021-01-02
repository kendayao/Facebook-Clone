import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Feed from './components/feed/Feed';
import Widgets from './components/widgets/Widgets'

function App() {
  return (
    <div className="app">
      <Header/>

      <div className='app__body'>
        <Sidebar/>
        <Feed />
        <Widgets/>
      </div>
    </div>
  );
}

export default App;
