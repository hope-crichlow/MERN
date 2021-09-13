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

		setToDoState([...toDoState, { task: newTask, completed: false }]);
		console.log("111111", toDoState);

		setNewTask("");
	};

    const handleTaskDelete = (selectedTaskIndex) => {
        const filteredToDo = toDoState.filter((task, i) => {
            return i != selectedTaskIndex;
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
					{/* <label className="form-label"></label> */}
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
				<ul className="list-group list-group-flush">
					{/* {toDoList} */}
					{toDoState.map((task, i) => {
                        return(
                            <li key={i} id={i} className="list-group-item form-check">
                                <p className={task.completed ? "line-through" : "none"}>
                                    <label className="form-check-label">{task.task}</label>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultChecked={task.completed}
                                        // onChange={changeStatus}
                                        value={task.id}
                                    />
                                </p>
                                <button onClick={(e) => {handleTaskDelete(i)}}>Delete</button>
                            </li>
                        );
                    })
                    }
				</ul>
			</fieldset>
		</div>
	);
};

export default Form;
