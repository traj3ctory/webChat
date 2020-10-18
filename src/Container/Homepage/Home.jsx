// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { getRealtimeUsers } from './../../Action/Action';
// import Layout from '../../Component/Layout/Layout';
// import { Form, InputGroup, Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
// import Button from '@material-ui/core/Button';
// import SendIcon from '@material-ui/icons/Send';
// import "./Home.css";

// /**
// * @author
// * @function Home
// **/

// const Home = (props) => {

//   const {user, onClick} = props;

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getRealtimeUsers)
//   }, []);

//   return (
//     <Layout>
//       <Container className="mt-5">
//         <Card className="shadow-sm">
//           <Row>
//             <Col md="3">
//               <Card.Body className="list">
//                 <ListGroup variant="flush">
//                   <ListGroup.Item><span><img src="https://avatars2.githubusercontent.com/u/55158999?s=400&u=d99b33fad6c194e331ed174e0fa418e6781f3419&v=4" className="img-fluid rounded-circle" alt="profile img" /></span>&nbsp;Hello World</ListGroup.Item>
//                   <ListGroup.Item>Hello World</ListGroup.Item>
//                   <ListGroup.Item>Hello World</ListGroup.Item>
//                   <ListGroup.Item>Hello World</ListGroup.Item>
//                   <ListGroup.Item>Hello World</ListGroup.Item>
//                   <ListGroup.Item>Hello World</ListGroup.Item>
//                   <ListGroup.Item>Hello World</ListGroup.Item>
//                   <ListGroup.Item>Hello World</ListGroup.Item>
//                 </ListGroup>
//               </Card.Body>
//             </Col>
//             <Col md="9">
//               <Card.Body className="mssgs">
//                 <InputGroup className="mb-3" style={{ position: 'fixed', bottom: '25vh', width: '100vw' }}>
//                   <Form.Group controlId="exampleForm.ControlTextarea1">
//                     <Form.Label className="sr-only">Example textarea</Form.Label>
//                     <Form.Control as="textarea" rows={1} />
//                   </Form.Group>
//                   <InputGroup.Append>
//                     <InputGroup.Text id="basic-addon2" className="bg-transparent border-0">
//                       <Button
//                         // onClick={}
//                         variant="contained"
//                         color="primary"
//                         className="px-4"
//                         endIcon={<SendIcon />}
//                       >
//                         Send
//                     </Button></InputGroup.Text>
//                   </InputGroup.Append>
//                 </InputGroup>


//               </Card.Body>
//             </Col>
//           </Row>
//         </Card>
//       </Container>
//     </Layout>
//   )

// }

// export default Home;

import React, { useEffect, useState } from 'react';
import './style.css';
import Layout from '../../Component/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getRealtimeUsers, updateMessage, getRealtimeConversations } from '../../Action/Action';


const User = (props) => {


  const {user, onClick} = props;

  return (
    <div onClick={() => onClick(user)} className="displayName">
                  <div className="displayPic">
                      <img src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" alt="" />
                  </div>
                  <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', margin: '0 10px'}}>
                      <span style={{fontWeight: 500}}>{user.firstName} {user.lastName}</span>
                      <span className={user.isOnline ? `onlineStatus` : `onlineStatus off`}></span>
                  </div>
              </div>
  );
}

const HomePage = (props) => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  const [chatStarted, setChatStarted] = useState(false);
  const [chatUser, setChatUser] = useState('');
  const [message, setMessage] = useState('');
  const [userUid, setUserUid] = useState(null);
  let unsubscribe;


  useEffect(() => {

    unsubscribe = dispatch(getRealtimeUsers(auth.uid))
    .then(unsubscribe => {
      return unsubscribe;
    })
    .catch(error => {
      console.log(error);
    })

    


  }, []);

  //console.log(user);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      //cleanup
      unsubscribe.then(f => f()).catch(error => console.log(error));

    }
  }, []);


  const initChat = (user) => {

    setChatStarted(true)
    setChatUser(`${user.firstName} ${user.lastName}`)
    setUserUid(user.uid);

    console.log(user);

    dispatch(getRealtimeConversations({ uid_1: auth.uid, uid_2: user.uid }));

  }

  const submitMessage = (e) => {

    const msgObj = {
      user_uid_1: auth.uid,
      user_uid_2: userUid,
      message
    }


    if(message !== ""){
      dispatch(updateMessage(msgObj))
      .then(() => {
        setMessage('')
      });
    }

    //console.log(msgObj);

  }


  return (
    <Layout>
      <section className="container1">

        <div className="listOfUsers">


          {
            user.users.length > 0 ?
            user.users.map(user => {
              return (
                <User 
                  onClick={initChat}
                  key={user.uid} 
                  user={user} 
                  />
              );
            }) : null
          }

            
                    
        </div>

        <div className="chatArea">
            
            <div className="chatHeader"> 
            {
              chatStarted ? chatUser : ''
            }
            </div>
            <div className="messageSections">
                {
                  chatStarted ? 
                  user.conversations.map((con, i) =>
                    <div style={{ textAlign: con.user_uid_1 == auth.uid ? 'right' : 'left' }} key={i}>
                    <p className="messageStyle">{con.message}</p>
                  </div> )
                  : null
                }
                

            </div>
            {
              chatStarted ? 
              <div className="chatControls">
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write Message"
                />
                <button onClick={submitMessage}>Send</button>
            </div> : null
            }
            
        </div>
    </section>
  </Layout>
  );
}

export default HomePage;