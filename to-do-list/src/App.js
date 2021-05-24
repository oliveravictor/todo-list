import Header from "./Components/Header";
import { Container, Col, Row } from "react-bootstrap";
import Taskform from "./Components/Taskform";
import Tasks from "./Components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    console.log(task);
    setTasks([...tasks, task]);
  };

  return (
    <Container>
      <Header />
      <Row>
        <Col size={4}>
          <Taskform addTask={addTask} />
        </Col>
        <Col size={3}>
          <Tasks tasks={tasks} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
