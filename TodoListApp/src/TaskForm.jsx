import { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      onAddTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form className="mb-4" onSubmit={handleAddTask}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task name"
          value={taskName}
          onChange={handleTaskNameChange}
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </div>
    </form>
  );
};

TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default TaskForm;
