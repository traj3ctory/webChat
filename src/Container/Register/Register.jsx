import React, { useState } from 'react';
import Layout from '../../Component/Layout/Layout';
import { Container, InputGroup, Form, FormControl, Card, Row, Col } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

import { register } from './../../Action/Action';
import { useDispatch } from 'react-redux';

/**
* @author
* @function Register
**/

const Register = (props) => {

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });



  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };


  const registerUser = (e) =>{

    e.preventDefault();
    
    const user = {
      firstName, lastName, email, password
    }
    
    dispatch(register(user))
  }

  return (
    <Layout>
      <>
        <div className="bg">
          <Container>
            <Row>
              <Col md={6} className="mx-auto mt-5">
                <Card>
                  <Card.Body className="shadow px-3">

                    <Form onSubmit={registerUser}>

                      <InputGroup className="my-5 ">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="username" className="bg-white bb1">
                            <i className="fas fa-user-friends"></i>
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          className="bb"
                          name='firstName'
                          type="text"
                          autoComplete="given-name"
                          placeholder="firstName"
                          aria-label="firstName"
                          aria-describedby="firstName"
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </InputGroup>

                      <InputGroup className="my-5 ">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="username" className="bg-white bb1">
                            <i className="fas fa-user-friends"></i>
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          className="bb"
                          name='lastName'
                          type="text"
                          autoComplete="family-name"
                          placeholder="lastName"
                          aria-label="lastName"
                          aria-describedby="lastName"
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </InputGroup>

                      <InputGroup className="my-5 ">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="username" className="bg-white bb1">
                            <i className="fas fa-envelope-open-text"></i>
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          className="bb"
                          name='email'
                          type="email"
                          autoComplete="email"
                          placeholder="Email"
                          aria-label="Email"
                          aria-describedby="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </InputGroup>

                      <InputGroup className="mb-5">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="password" className="bg-white bb1">
                            <i className="fas fa-lock"></i>
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          className="bb"
                          type={values.showPassword ? 'text' : 'password'}
                          autoComplete="password"
                          placeholder="password"
                          aria-label="password"
                          aria-describedby="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputGroup.Append
                          onClick={handleClickShowPassword} >
                          <InputGroup.Text id="password" className="bg-white bb1">
                            {values.showPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                          </InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>

                      <Button
                      onClick={registerUser}
                        variant="contained"
                        color="primary"
                        className="px-3 float-right"
                        endIcon={<SendIcon />}
                      >
                        Send
                    </Button>

                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

      </>
    </Layout>
  )

}

export default Register; 