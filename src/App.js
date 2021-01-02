import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Feed from './components/feed/Feed';
import Widgets from './components/widgets/Widgets';
import Login from './components/login/Login';

function App() {
  const user=null;
  return (
    <div className="app">
      {!user?(
        <Login />
      ):(
        <>
        <Header/>

      <div className='app__body'>
        <Sidebar/>
        <Feed />
        <Widgets/>
      </div>

      </>
      )}
      
    </div>
  );
}

export default App;
