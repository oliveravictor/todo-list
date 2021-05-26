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
      <h5>Set tasks</h5>
      <Form.Group>
        <Form.Control
          type="text"
          name="taskName"
          placeholder="¿Whats you have to do?"
          required="required"
        />
      </Form.Group>
      <Form.Group>
        <h5>Description of the task</h5>
        <Form.Control
          as="textarea"
          name="taskDescription"
          required="required"
          rows={1}
          placeholder="Write task"
        />
      </Form.Group>
      <Button type="submit" variant={"success"} className={"btn btn-block"}>
        Add Task
      </Button>
    </Form>
  );
};

export default Taskform;
