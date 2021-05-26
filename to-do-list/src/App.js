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

  const deleteTask = (id) => {
    const selectedTask = tasks.filter((task) => task.id !== id);
    setTasks(selectedTask);
  };

  return (
    <Container>
      <Header />
      <Row className={"d-flex justify-content-center"}>
        <Col size={4} md={7}>
          <Taskform addTask={addTask} />
        </Col>
      </Row>
      <br />
      <Row className={"d-flex justify-content-center"}>
        <Col size={3} md={7}>
          <Tasks tasks={tasks} deleteTask={deleteTask} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
