import React, { useEffect, useState } from 'react';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


const App=()=> {

  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([
    // {username: 'prakhar',message:'hey'},{username: 'agarwal',message:'guys'}
  ]);
  const [username,setUsername]=useState('');

  useEffect(()=>{
    //  runs once when the app component loads
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=> ({id:doc.id,message:doc.data()})))
    })
  },[])

  useEffect(()=>{
    // If it is blank inside [], means that this component runs once when the app component loads
    setUsername(prompt('Enter UserName :-'))
  },[]) // condition

  const sendMessage=(e)=>{
    e.preventDefault();

    db.collection('messages').add({
    message: input,
    username: username,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // logic to send a message
    // setMessages([...messages,{username:username,text:input}])
    setInput('')
  }

  return (

    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" alt=""/>
      <h1>Welcome to Facebook Messenger Clone 📱</h1>
      <h2>Hello {username}</h2>
      <form className="app_form">
      <FormControl className="app_formControl">
        {/* <InputLabel>Enter  a  Message ...</InputLabel> */}
        <Input className="app_input" placeholder='Enter a Message ...' value={input} onChange={e => setInput(e.target.value)}/>
        <IconButton className="app_iconButton" disabled={!input} type='submit' variant='contained' color='primary' onClick={sendMessage}>
          <SendIcon/>
        </IconButton>
        
      </FormControl>
      </form>
      <FlipMove>
      {
        messages.map(({id,message})=>(
          <Message key={id} username={username} message={message}/>
          // <p>{message}</p>
        ))
      }
      </FlipMove>
    </div>

  );
}

export default App;
