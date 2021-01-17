import {useEffect} from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Feed from './components/feed/Feed';
import SidebarRight from './components/sidebar-right/sidebarRight';
import Login from './components/login/Login';
import {useStateValue} from './contextAPI/StateProvider'
import {auth} from './firebase/firebase';
import {actionTypes} from './contextAPI/reducer'

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{

      if(authUser){
        // user has logged in
        dispatch({
            type: actionTypes.SET_USER,
            user: authUser
        })
      }else{
        // user has logged out
        dispatch({
            type: actionTypes.SET_USER,
            user: null
        })
      }
    })
    return()=>{
      unsubscribe();
    }
  },[])


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
        <SidebarRight/>
      </div>

      </>
      )}
      
    </div>
  );
}

export default App;
