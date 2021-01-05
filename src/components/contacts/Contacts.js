import React, {useState, useEffect} from 'react'
import './Contacts.css'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ContactsItem from '../contacts-item/ContactsItem';
import db from '../../firebase/firebase';
import { NewReleasesTwoTone } from '@material-ui/icons';

function Contacts() {

    const [contacts, setContacts]=useState([]);

    useEffect(()=>{
        db.collection('contacts').onSnapshot(snapshot=>(
            setContacts(snapshot.docs.map(doc=>({id: doc.id, data:doc.data()})))
        ))
    },[])
//     {filteredContacts.map(contact=>(
//         <ContactsItem 
//         key={contact.id}
//         username={contact.username}
//         profilePic={contact.profilePic}
//         />
 console.log(contacts)

    

    // removes duplicates by locating first instance of matching usernames
    const filteredContacts=contacts.filter((contact, index, obj)=>(
        index===obj.findIndex((item)=>(
            item.data.username===contact.data.username
        ))
    ))

    console.log(filteredContacts)

    

 
    return (
        <div className='contacts'>
            <div className='contacts__header'>
                <div className='contacts__title'>
                    <h3>Contacts</h3>
                </div>
                <div className='contacts__icons'>
                    <VideoCallIcon/>
                    <SearchIcon />
                    <MoreHorizIcon/>
                </div>
            </div>
            {filteredContacts.map(contact=>(
                <ContactsItem 
                key={contact.id}
                username={contact.data.username}
                profilePic={contact.data.profilePic}
                />
            ))}
        </div>
    )
}

export default Contacts
