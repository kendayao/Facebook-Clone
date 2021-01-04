import React from 'react'
import './Login.css'
import Button from '@material-ui/core/Button'
import {auth, provider} from '../../firebase/firebase'
import {useStateValue} from '../../contextAPI/StateProvider'
import {actionTypes} from '../../contextAPI/reducer'

function Login() {
    const [state,dispatch]=useStateValue();

    const signIn =()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type: actionTypes.SET_USER,
                user:result.user
            })
        }).catch(error=>alert(error.message))
    }
    return (
        <div className='login'>
            <div className='login-logo'>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt='facebook logo'
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt="facebook logo"
                />
            </div>
            <Button type='submit' onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
