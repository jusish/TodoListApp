import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleCompleted, onDeleteTask, onEditTask, showCompleted, onToggleShowCompleted }) => {
  const handleToggleShowCompleted = () => {
    onToggleShowCompleted(!showCompleted);
  };

  const filteredTasks = showCompleted ? tasks.filter((task) => task.completed) : tasks;

  return (
    <div className="task-list">
      <div className="mb-3">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="showCompleted"
            checked={showCompleted}
            onChange={handleToggleShowCompleted}
          />
          <label className="form-check-label" htmlFor="showCompleted">
            Show completed tasks
          </label>
        </div>
      </div>
      <ul className="list-group">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggleCompleted={onToggleCompleted} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />
        ))}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  showCompleted: PropTypes.bool.isRequired,
  onToggleShowCompleted: PropTypes.func.isRequired,
};

export default TaskList;
