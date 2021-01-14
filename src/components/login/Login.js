import React, {useState} from 'react'
import './Login.css'
import {auth, provider} from '../../firebase/firebase'
import {useStateValue} from '../../contextAPI/StateProvider'
import {actionTypes} from '../../contextAPI/reducer'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

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
      width: 280,
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
                    <CloseIcon onClick={()=>setOpenModal(false)} fontSize='small' className='login__modalCloseIcon'/>
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
        <div className='login__container'>
            <div className='login__logo'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/1024px-Facebook_New_Logo_%282015%29.svg.png"
                    alt="facebook logo"
                />
            </div>
            <div className='login__form'>
                <input type='email' placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)}></input>
                <input type='password' placeholder='Password' value={password} onChange={(event)=>setPassword(event.target.value)}></input>
                <button className='login__buttonLogIn' onClick={signIn}>Log In</button>
                <button className='login__buttonSignInGoogle' onClick={signInWithGoogle}>Log In With Google</button>
                <p className='login__text'>*You may use the following credentials to login or click on signup to create your own*</p>
                <p className='login__text'>email: cool_coder@email.com password: 12341234</p>
                <p onClick={()=>setOpenModal(true)} className='login__signUpText'>Sign Up for Facebook</p>
            </div>
        </div>
           
        </div>
    )
}

export default Login
