import { useState } from "react";

const TaskComposer = () => {
  const [inputValue, setInputValue] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleCreate = (id) => {
    const task = { body: inputValue };

    setIsPending(true);

    fetch(`http://localhost:8000/tasks/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(() => {
      setIsPending(false);
      window.location.reload();
    });
  };

  return (
    <div className="task-composer">
      <p>Create new task</p>
      <div>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          value={inputValue}
        />
        <div className="button-container">
          <button disabled={isPending} onClick={handleCreate}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskComposer;
