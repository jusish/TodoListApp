import { useState } from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task, onToggleCompleted, onDeleteTask, onEditTask }) => {
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);

  const handleToggleCompleted = () => {
    onToggleCompleted(task.id);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  const handleEditTask = () => {
    setEditing(true);
  };

  const handleSaveTask = () => {
    if (editedName.trim() !== '') {
      onEditTask(task.id, editedName);
      setEditing(false);
    }
  };

  const handleChange = (e) => {
    setEditedName(e.target.value);
  };

  return (
    <li className={`list-group-item ${task.completed ? 'completed' : ''}`}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleCompleted}
          />
          {editing ? (
            <input
              type="text"
              className="form-control mt-2"
              value={editedName}
              onChange={handleChange}
            />
          ) : (
            <span className="ml-2">{task.name}</span>
          )}
        </div>
        <div>
          {editing ? (
            <button
              className="btn btn-success btn-sm mr-2"
              onClick={handleSaveTask}
            >
              Save
            </button>
          ) : (
            <button
              className="btn btn-primary btn-sm mr-2"
              onClick={handleEditTask}
            >
              Edit
            </button>
          )}
          <button className="btn btn-danger btn-sm" onClick={handleDeleteTask}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
};

export default TaskItem;
