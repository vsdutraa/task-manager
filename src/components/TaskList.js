import { useState } from "react";

const TaskList = (props) => {
  const tasks = props.tasks;
  const isPending = props.isPending;
  const error = props.error;

  const [selectedId, setSeletectedId] = useState(null);

  const handleSelect = (id) => {
    setSeletectedId(id);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    });
  };

  return (
    <div className="task-list">
      <h3>Tasks ({tasks ? tasks.length : 0})</h3>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {tasks
        ? tasks.map((task) => {
            return (
              <div
                style={{
                  background: selectedId === task.id ? "lightblue" : "none",
                }}
                onClick={() => {
                  handleSelect(task.id);
                }}
                className="task"
                key={task.id}
              >
                <p>{task.body}</p>
              </div>
            );
          })
        : null}
      <button
        onClick={() => {
          handleDelete(selectedId);
        }}
      >
        End task
      </button>
    </div>
  );
};

export default TaskList;
