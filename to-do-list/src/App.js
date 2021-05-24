import Header from "./Components/Header";
import { Container, Col, Row } from "react-bootstrap";
import Taskform from "./Components/Taskform";
import Task from "./Components/Task";

function App() {
  return (
    <Container>
      <Header />
      <Row mt={3}>
        <Col size={6}>
          <Taskform />
        </Col>
        <Col size={6}>
          <Task />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
