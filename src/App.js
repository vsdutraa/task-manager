import TaskList from "./components/TaskList";
import useFetch from "./useFetch";

function App() {
  const {
    data: tasks,
    isPending,
    error,
  } = useFetch("http://localhost:8000/tasks");

  return (
    <div className="App">
      <div className="content">
        <TaskList tasks={tasks} isPending={isPending} error={error} />
      </div>
    </div>
  );
}

export default App;
