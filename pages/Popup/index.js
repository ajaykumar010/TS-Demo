import { useState } from 'react'
// import styles from '../styles/Home.module.css'
import styles from '../../styles/Home.module.css'
import Modal from '../../Component/Model';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css"


export default function Home() {
  const [showmodel, setShowmodel] = useState(false);
  const [showmodel1, setShowmodel1] = useState(false);
  const [input, setInput] = useState("");
  const [input1, setInput1] = useState("");


  return (
    <div className={styles.container}>

      <h1 className={styles.title}>
        <Button variant="secondary" onClick={() => setShowmodel(true)}>Sign Up</Button>
        <Button onClick={() => setShowmodel1(true)}>Login</Button>
      </h1>
      <Modal show={showmodel} onClose={() => setShowmodel(false)}>
        The fur is generally soft and thick,
        notably softer on the belly than on the back.[16]
        Its skin colour varies between individuals from pale
        yellowish to dark golden with dark spots grouped in rosettes.
        Its belly is whitish and its ringed tail is shorter than its body.
      </Modal>
      <Modal show={showmodel1} onClose={() => setShowmodel1(false)} >
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e) => setInput(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              onChange={(e) => setInput1(e.target.value)}
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>

          <Row >
            <Col><Button variant="primary" onClick={() => console.log(input, input1)}>
              Save Changes
            </Button></Col>

          </Row>
        </Container>
      </Modal>


    </div>
  )
}
