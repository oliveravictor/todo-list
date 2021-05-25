import { Table } from "react-bootstrap";

const Tasks = ({ tasks }) => {
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
            <td>🗑</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Tasks;
