import { Form, Button } from "react-bootstrap";

const Taskform = ({ addTask }) => {
  const handleAddTask = (e) => {
    console.log("handle task");
    e.preventDefault();

    const [taskName, taskDescription] = e.target.elements;
    addTask({
      nameTask: taskName.value,
      descriptionTask: taskDescription.value,
    });
  };

  return (
    <Form onSubmit={handleAddTask}>
      <h3>Set tasks</h3>
      <Form.Group>
        <Form.Control
          type="text"
          name="taskName"
          placeholder="Whats you have to do"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description of task</Form.Label>
        <Form.Control as="textarea" name="taskDescription" rows={2} />
      </Form.Group>
      <Button type="submit">Add task</Button>
    </Form>
  );
};

export default Taskform;
