import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React, {useState, useEffect} from 'react'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons';
import ReactTimeago from 'react-timeago';
import {useStateValue} from '../../contextAPI/StateProvider';
import db from '../../firebase/firebase';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  }));

function Post({profilePic, postId, image, username, timestamp, message}) {
        const [{user}, dispatch] = useStateValue();
        const [showComments, setShowComments]=useState(false)
        const [comment, setComment]=useState('')
        const [comments, setComments]=useState([])
         const classes = useStyles();

         useEffect(()=>{
            let unsubscribe;
            if(postId){
                unsubscribe=db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot)=>(
                    setComments(snapshot.docs.map((doc)=>doc.data()))
                ))
            }
            return()=>{
                unsubscribe();
            }
        },[postId])

        const postComment=(event)=>{
            event.preventDefault();
            db.collection("posts").doc(postId).collection("comments").add({
                text: comment,
                username: user.displayName,
                profilePic: user.photoURL,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            setComment('')
        }

        const handleChange=(event)=>{
                setComment(event.target.value)
        }

        
    return (
        <div className='post'>
            <div className='post__top'>
            {profilePic?<Avatar className='post__avatar' src={profilePic} />: <Avatar className='post__avatar' src="/static/images/avatar/1.jpg" alt={username} />}
                <div className='post__topInfo'>
                    <h3>{username}</h3>
                    <p><ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()}/></p>
                </div>
            </div>
            <div className='post__bottom'>
                <p>{message}</p>
            </div>
            <div className='post__image'>
                <img src={image} alt=""/>
            </div>
            <div className='post__likes'>
                <div className='post__likesLeft'>
                <ThumbUpIcon className='post__likesIcon' style={{ fontSize: 14 }}></ThumbUpIcon> 
                <p>55</p>
                </div>
                <p onClick={showComments?()=>setShowComments(false):()=>setShowComments(true)}>View all comments</p>
            </div>
            <div className='post__options'>
                <div className='post__option'>
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className='post__option' onClick={()=>setShowComments(true)}>
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className='post__option'>
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className='post__option'>
                    <AccountCircleIcon />
                    <ExpandMoreOutlined/>
                </div>
            </div>
            <div className={showComments? 'post__comments post__comments--show' : 'post__comments post__comments--hide'}>
                <div className='post__commentsInput'>   
                    <Avatar src={user.photoURL} className={classes.small}/>
                    <input type='text' onChange={handleChange} value={comment} placeholder='Write a comment...'></input>
                    <button onClick={postComment}>Post comment</button>
                </div>
                {comments.map(commentItem=>(
                    <div className='post__commentsDisplay'> 
                   
                    <Avatar src={commentItem.profilePic} className={`post__commentsDisplayAvatar ${classes.large}`} />
                    <div className='post__commentsDisplayBody'>
                        <p>{commentItem.username}</p>
                        <p>{commentItem.text}</p>
                    </div>
        
            </div>
                ))}
                
            </div>
        </div>
    )
}

export default Post
