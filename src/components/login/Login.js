import React, {useState} from 'react'
import './Login.css'
import {auth, provider} from '../../firebase/firebase'
import {useStateValue} from '../../contextAPI/StateProvider'
import {actionTypes} from '../../contextAPI/reducer'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 350,
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #dbdbdb',
      borderRadius: '3px',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: "none"
    },
  }));
  
function Login() {
    const [state,dispatch]=useStateValue();
    const classes=useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [email, setEmail]=useState('')
    const [name, setName]=useState('')
    const [password, setPassword]=useState('')
    const [openModal, setOpenModal]=useState(false)

    const signInWithGoogle =()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log('login success')
        }).catch(error=>alert(error.message))
    }

    const signUp =(event)=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser=>(
            authUser.user.updateProfile({
                displayName: name,
            }).then(()=>(
                dispatch({
                    type: actionTypes.SET_NAME,
                    username:  authUser.user.displayName
                })
            ))
        ))
        .catch((error)=>alert(error.message))
        setName('')
        setEmail('')
        setPassword('')
        setOpenModal(false)
    }

    const signIn=(event)=>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error=>alert(error.message))
        setEmail('')
        setPassword('')
    }

    return (
        <div className='login'>

            <Modal
            open={openModal}
            // on close listens to clicks outside the modal. materialize built that for us
            onClose={()=>setOpenModal(false)}
            >
            <div style={modalStyle} className={classes.paper}>
                <div className="login__modalSignup">
                    <div className="login__modalTop">
                        <h1>Sign Up</h1>
                        <p>It's quick and easy.</p>
                    </div>
                    <div className="login__modalBottom">
                        <form>
                            <input type='text' placeholder='Name' value={name} onChange={(event)=>setName(event.target.value)} required></input>
                            <input type='email' placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)} required></input>
                            <input type='password' placeholder='Password' value={password} onChange={(event)=>setPassword(event.target.value)}></input>
                            <input className='login__modalSignupButton' value='Sign Up' onClick={signUp}/>
                        </form>
                    </div>

                </div>
            </div>
            </Modal>

            <div className='login__logo'>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt='facebook logo'
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt="facebook logo"
                />
            </div>
            <div className='login__formContainer'>
                <form className='login__form'>
                    <input className='login__input' type='email' value={email} onChange={(event)=>setEmail(event.target.value)}  placeholder="Email"  />
                    <input className='login__input' type='password' value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Password"  />
                    <Button className='login__button' onClick={signIn}>Log In</Button>
                    <p>or</p>
                    <Button className='login__button-google' onClick={signInWithGoogle}><img className='login__image' alt='google logo' src='https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png'></img>Sign In With Google</Button>
                </form>
                <div className='login__form-bottom'>
                    <Button className='login__button-create-account' onClick={()=>setOpenModal(true)}>Create New Account</Button>
                </div>
 
            </div>
        </div>
    )
}

export default Login
