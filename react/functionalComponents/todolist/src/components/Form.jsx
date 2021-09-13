import React, { useState } from "react";

const Form = () => {


	const [newTask, setNewTask] = useState("");
	const [toDoState, setToDoState] = useState([]);


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
				<legend>ToDo List</legend>
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
						
									<input
										className="form-check-input"
										type="checkbox"
										checked={task.completed}
										onChange={(e) => {
											handleToggleComplete(i);
										}}
										value={task.id}
									/>

									<label className="form-check-label">
										<span
											className={
												task.completed
													? "completed"
													: "none"
											}
										>
											{task.task}
										</span>
									</label>

									<button
										className="btn"
										onClick={(e) => {
											handleTaskDelete(i);
										}}
									>
										Delete
									</button>

						
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
