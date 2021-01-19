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
        const [likes, setLikes]=useState([])
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
                    setComments(snapshot.docs.map((doc)=>({id:doc.id ,data:doc.data()})))
                ))
            }
            if(postId){
                unsubscribe=db
                .collection("posts")
                .doc(postId)
                .collection("likes")
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot)=>(
                    setLikes(snapshot.docs.map((doc)=>doc.data()))
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

        const handleLike=()=>{
            db.collection('posts').doc(postId).collection('likes').add({
                likeUser: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
        }

        const handleUnlike=()=>{
            db.collection("posts").doc(postId).collection("likes").where("likeUser", "==", user.displayName)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                doc.ref.delete();
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
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
                    <ThumbUpIcon className='post__likesIcon' style={{ fontSize: 14 }}  />
                    <p>{likes.length}</p>
                </div>
                <p className={comments.length===0? 'post__commentsText--hide': 'post__commentsText--show'} onClick={showComments?()=>setShowComments(false):()=>setShowComments(true)}>{comments.length>1?comments.length+' comments': comments.length+' comment'} </p>
            </div>
            <div className='post__options'>
                <div className={likes.some(like=>like['likeUser']===user.displayName) ? 'post__option post__option--blue' : 'post__option'} onClick={(likes.some(like=>like['likeUser']==user.displayName)) ? handleUnlike : handleLike}>
                    <ThumbUpIcon  />
                    <p>Like</p>
                </div>
                <div className='post__option' onClick={showComments?()=>setShowComments(false): ()=>setShowComments(true) }>
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
                <form className='post__commentsInput'>   
                    <Avatar src={user.photoURL} className={classes.large}/>
                    <input type='text' onChange={handleChange} value={comment} placeholder='Write a comment...'></input>
                    <button onClick={postComment} type='submit' disabled={!comment}>Post</button>
                </form>
                {comments.map(commentItem=>(
                    <div key={commentItem.id} className='post__commentsDisplay'> 
                        <Avatar src={commentItem.data.profilePic} className={`post__commentsDisplayAvatar ${classes.large}`} />
                    <div className='post__commentsDisplayBody'>
                        <p>{commentItem.data.username}</p>
                        <p>{commentItem.data.text}</p>
                    </div>
            </div>
                ))}
                
            </div>
        </div>
    )
}

export default Post
