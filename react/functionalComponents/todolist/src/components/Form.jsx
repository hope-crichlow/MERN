import React, { useState } from "react";

const Form = () => {
	// const { addTaskToArray } = props;

	const [newTask, setNewTask] = useState("");
	const [toDoState, setToDoState] = useState([]);

	// A FUNCTION THAT ADDS INPUT STRING TO CURRENT ARRAY OF TASKS
	// const addTaskToArray = (newTask) => {
	// 	setToDoState([...toDoState, { task: newTask, completed: false }]);
	// };

	const submitHandler = (e) => {
		e.preventDefault();

		if (newTask.length === 0) {
			return;
		}

		setToDoState([...toDoState, { task: newTask, completed: false }]);
		console.log("111111", toDoState);

		setNewTask("");
	};

	const handleToggleComplete = (selectedTaskIndex) => {
		const updatedTodo = toDoState.map((task, i) => {
			if (selectedTaskIndex === i) {
				task.completed = !task.completed;
				// Avoids mutating the task directly
				// const updatedTodo = { ...task, completed: !task.completed };
				// return updatedTodo;
			}
			return task;
		});
		setToDoState(updatedTodo);
	};

	const handleTaskDelete = (selectedTaskIndex) => {
		const filteredToDo = toDoState.filter((_task, i) => {
			return i !== selectedTaskIndex;
		});

		setToDoState(filteredToDo);
	};

	return (
		<div className="container px-4">
			<fieldset>
				<legend>Form.jsx</legend>
				<form
					className="form-control d-flex gap-5 justify-content-center "
					onSubmit={submitHandler}
				>
					<input
						className="form-control"
						type="text"
						onChange={(e) => setNewTask(e.target.value)}
						name="task"
						value={newTask}
					/>
					<button className="btn btn-primary" type="submit">
						Add
					</button>
				</form>

				<div className="container">
					<ul className="list-group list-group-flush">
						{/* {toDoList} */}
						{toDoState.map((task, i) => {
							return (
								<li
									key={i}
									id={i}
									className="list-group-item d-flex justify-content-between align-items-center "
								>
									{/* <p
										className={
											task.completed ? "line-through form-check" : "form-check"
										}
									> */}
									<input
										className="form-check-input"
										type="checkbox"
										checked={task.completed}
										onChange={(e) => {
											handleToggleComplete(i);
										}}
										value={task.id}
									/>

									<label className="form-check-label">{task.task}</label>

									<button
										className="btn"
										onClick={(e) => {
											handleTaskDelete(i);
										}}
									>
										Delete
									</button>

									{/* </p> */}
								</li>
							);
						})}
					</ul>
				</div>
			</fieldset>
		</div>
	);
};

export default Form;
