import { Table } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

const Tasks = ({ tasks, deleteTask }) => {
  const removeTask = (id) => {
    deleteTask(id);
  };

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Task</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.name}</td>
            <td>{task.description}</td>
            <td onClick={() => removeTask(task.id)}>
              <FaTimes style={{ cursor: "pointer", color: "#962d2d" }} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Tasks;
