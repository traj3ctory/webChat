import React from 'react';
import Layout from '../../Component/Layout/Layout';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import "./Home.css";

/**
* @author
* @function Home
**/

const Home = (props) => {

  return (
    <Layout>
      <Container className="mt-5">
        <Card className="shadow-sm">
        <Row>
          <Col md="3">
            <Card.Body className="list">
              <ListGroup variant="flush">
                <ListGroup.Item>Hello World</ListGroup.Item>
                <ListGroup.Item>Hello World</ListGroup.Item>
                <ListGroup.Item>Hello World</ListGroup.Item>
                <ListGroup.Item>Hello World</ListGroup.Item>
                <ListGroup.Item>Hello World</ListGroup.Item>
                <ListGroup.Item>Hello World</ListGroup.Item>
                <ListGroup.Item>Hello World</ListGroup.Item>
                <ListGroup.Item>Hello World</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Col>
          <Col md="9">
            <Card.Body className="mssgs">

            </Card.Body>
          </Col>
        </Row>
        </Card>
      </Container>
    </Layout>
  )

}

export default Home;