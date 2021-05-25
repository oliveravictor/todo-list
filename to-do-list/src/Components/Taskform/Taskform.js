import shortid from "short-id";
import { Form, Button } from "react-bootstrap";

const Taskform = ({ addTask }) => {
  const handleAddTask = (e) => {
    e.preventDefault();

    const [taskName, taskDescription] = e.target.elements;
    addTask({
      id: shortid.generate(),
      name: taskName.value.trim(),
      description: taskDescription.value.trim(),
    });

    e.target.reset();
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
        <Form.Control
          as="textarea"
          name="taskDescription"
          rows={2}
          placeholder="Write task"
        />
      </Form.Group>
      <Button type="submit">Add task</Button>
    </Form>
  );
};

export default Taskform;
