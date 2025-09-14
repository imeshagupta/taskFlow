import { useState, useEffect, useContext } from "react";
import styles from "../styles/Tasks.module.css";
import { IoMdAdd, IoMdCheckmarkCircle } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { ThemeContext } from "./ThemeContext";

function Tasks() {
  const { theme } = useContext(ThemeContext);
  const initialTasks = [
    {
      name: "Finish Homework",
      date: "2025-09-15",
      priority: "High",
      completed: false,
    },
    {
      name: "Grocery Shopping",
      date: "2025-09-14",
      priority: "Medium",
      completed: false,
    },
    {
      name: "Call Friend",
      date: "2025-09-13",
      priority: "Low",
      completed: false,
    },
  ];

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : initialTasks;
  });

  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [priority, setPriority] = useState("Low");
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editPriority, setEditPriority] = useState("Low");
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSaveTask = () => {
    if (!taskName || !taskDate) return;
    setTasks([
      ...tasks,
      { name: taskName, date: taskDate, priority, completed: false },
    ]);
    setTaskName("");
    setTaskDate("");
    setPriority("Low");
  };

  const confirmDeleteTask = () => {
    if (deleteIndex === null) return;
    setTasks(tasks.filter((_, i) => i !== deleteIndex));
    setDeleteIndex(null);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditName(tasks[index].name);
    setEditDate(tasks[index].date);
    setEditPriority(tasks[index].priority);
  };

  const handleUpdateTask = () => {
    const updated = [...tasks];
    updated[editIndex] = {
      ...updated[editIndex],
      name: editName,
      date: editDate,
      priority: editPriority,
    };
    setTasks(updated);
    setEditIndex(null);
    setEditName("");
    setEditDate("");
    setEditPriority("Low");
  };

  const handleCompleteTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = true;
    setTasks(updated);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (["Low", "Medium", "High"].includes(filter))
      return task.priority === filter;
    return true;
  });

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <button
        type="button"
        className={`btn ${styles.addTaskBtn}`}
        data-bs-toggle="modal"
        data-bs-target="#taskModal"
      >
        <IoMdAdd className={styles.addIcon} /> Add new task
      </button>

      <div
        className="modal fade"
        id="taskModal"
        tabIndex="-1"
        aria-labelledby="taskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="taskModalLabel">
                Add New Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label className="form-label">Task Name</label>
              <input
                type="text"
                className="form-control mb-3"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control mb-3"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
              />
              <label className="form-label">Priority</label>
              <div>
                {["Low", "Medium", "High"].map((p) => (
                  <div className={styles.priorityOption} key={p}>
                    <input
                      type="radio"
                      id={`add-${p}`}
                      name="priority"
                      value={p}
                      checked={priority === p}
                      onChange={(e) => setPriority(e.target.value)}
                      className={styles.priorityRadio}
                    />
                    <label
                      htmlFor={`add-${p}`}
                      className={styles.priorityLabel}
                    >
                      {p}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className={`btn ${styles.saveBtn}`}
                data-bs-dismiss="modal"
                onClick={handleSaveTask}
              >
                Save Task
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="editTaskModal"
        tabIndex="-1"
        aria-labelledby="editTaskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editTaskModalLabel">
                Edit Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <label className="form-label">Task Name</label>
              <input
                type="text"
                className="form-control mb-3"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />

              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control mb-3"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
              />

              <label className="form-label">Priority</label>
              <div>
                {["Low", "Medium", "High"].map((p) => (
                  <div className="form-check form-check-inline" key={p}>
                    <input
                      className={styles.priorityRadio}
                      type="radio"
                      name="editPriority"
                      id={`edit-${p}`}
                      value={p}
                      checked={editPriority === p}
                      onChange={(e) => setEditPriority(e.target.value)}
                    />
                    <label className={styles.priorityLabel}>{p}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className={`btn ${styles.updateBtn}`}
                data-bs-dismiss="modal"
                onClick={handleUpdateTask}
              >
                Update Task
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="deleteTaskModal"
        tabIndex="-1"
        aria-labelledby="deleteTaskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteTaskModalLabel">
                Confirm Delete
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this task?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className={`btn ${styles.confirmBtn}`}
                data-bs-dismiss="modal"
                onClick={confirmDeleteTask}
              >
                Yes, Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.headingWrapper}>
        <div className={styles.heading}>
          All Tasks
          <div className="dropdown d-inline ms-3">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Show
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setFilter("All")}
                >
                  All Tasks
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setFilter("Completed")}
                >
                  Completed Tasks
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="dropdown-submenu px-3">
                <span className="fw-bold">Priority</span>
                <ul className="list-unstyled ms-3">
                  {["Low", "Medium", "High"].map((p) => (
                    <li key={p}>
                      <button
                        className="dropdown-item"
                        onClick={() => setFilter(p)}
                      >
                        {p}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <ul className={styles.TasksList}>
          {filteredTasks.map((task, index) => (
            <li key={index}>
              <div className={styles.taskInfo}>
                <strong>{task.name}</strong> ({task.date})
              </div>
              <div className={styles.taskButtons}>
                {!task.completed ? (
                  <button onClick={() => handleCompleteTask(index)}>
                    Mark Complete <IoMdCheckmarkCircle />
                  </button>
                ) : (
                  <span className="badge bg-success">Done</span>
                )}

                <button
                  data-bs-toggle="modal"
                  data-bs-target="#editTaskModal"
                  onClick={() => handleEditClick(index)}
                >
                  <MdEdit />
                </button>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#deleteTaskModal"
                  onClick={() => setDeleteIndex(index)}
                >
                  <MdDelete />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
