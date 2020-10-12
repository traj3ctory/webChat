import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../../Component/Layout/Layout';
import { Container, InputGroup, FormControl, Form, Card, Row, Col } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Action/Action';
/**
* @author
* @function Login
**/


const Login = (props) => {

  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  /*  =================================  */
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  const userLogin = (e) => {
    e.preventDefault();

    if (email === "") {
      alert("email is required");
      return;
    }
    if (password === "") {
      alert("password is required");
      return;
    }

    dispatch(login({ email, password }));
  }


  if (auth.authenticated) {
    return <Redirect to={`/`} />
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
                    <Form onSubmit={userLogin}>
                      <InputGroup className="my-5 ">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="username" className="bg-white bb1">
                            <i className="fas fa-user-friends"></i>
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
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}>
                          <InputGroup.Text id="password" className="bg-white bb1">
                            {values.showPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                          </InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>

                      <Button
                        onClick={userLogin}
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

export default Login;