import React from "react";

const ListDisplay = (props) => {

    const {tasks} = props;
    console.log(tasks);

    const toDoList = tasks.map((task, i) => {
        return <li key={i} id={i} className="list-group-item">{task.task}</li>;
    });

	return (
		<div>
			<fieldset>
				<legend>ListDisplay.jsx</legend>
                <ul className="list-group list-group-flush">{toDoList}</ul>
			</fieldset>
		</div>
	);
};

export default ListDisplay;
