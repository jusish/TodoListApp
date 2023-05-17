import { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: true },
    { id: 3, name: 'Task 3', completed: false },
  ]);

  const [showCompleted, setShowCompleted] = useState(false);

  const handleAddTask = (name) => {
    const newTask = { id: Date.now(), name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleToggleCompleted = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    const filteredTasks = showCompleted
      ? updatedTasks.filter((task) => task.completed)
      : updatedTasks;
    setTasks(filteredTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleEditTask = (id, newName) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">ToDo List App</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggleCompleted={handleToggleCompleted}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
        showCompleted={showCompleted}
        onToggleShowCompleted={setShowCompleted}
      />
    </div>
  );
};

export default App;
