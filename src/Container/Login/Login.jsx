import React from 'react';
import Layout from '../../Component/Layout/Layout';
import { Container, InputGroup, FormControl, Card, Row, Col } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
/**
* @author
* @function Login
**/


const Login = (props) => {

  const [values, setValues] = React.useState({
    username: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Layout>
      <>
        <div className="bg">
          <Container>
            <Row>
              <Col md={6} className="mx-auto mt-5">
                <Card>
                  <Card.Body className="shadow px-3">
                    <InputGroup className="my-5 ">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="username" className="bg-white bb1">
                          <i className="fas fa-user-friends"></i>
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        className="bb"
                        type="text"
                        autoComplete="username"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="username"
                        id="username"
                        value={values.username}
                        onChange={handleChange('username')}
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
                        value={values.password}
                        onChange={handleChange('password')}
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
                      variant="contained"
                      color="primary"
                      className="px-3 float-right"
                      endIcon={<SendIcon />}
                    >
                      Send
      </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        {/* <Box component="div" m={1}>
          <div className={classes.margin}>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                  <InputLabel htmlFor="username">UserName</InputLabel>
                  <OutlinedInput
                    id="username"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    labelWidth={60}
                  />
                </FormControl>

                <FormControl fullWidth className={classes.margin} variant="outlined">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    type="password"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    labelWidth={60}
                  />
                </FormControl>

                <TextField
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                />
              </Grid>
            </Grid>
          </div>
        </Box>
      */}
      </>
    </Layout>
  )

}

export default Login;