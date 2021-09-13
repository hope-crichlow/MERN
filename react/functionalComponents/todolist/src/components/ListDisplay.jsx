import React from "react";

const ListDisplay = (props) => {

    const {tasks} = props;
    console.log(tasks);

    const toDoList = tasks.map((task, i) => {
        return (
            <li key={i} id={i} className="inline-items"></li>
        );
    });

	return (
		<div>
			<fieldset>
				<legend>ListDisplay.jsx</legend>
                <ul>{toDoList}</ul>
			</fieldset>
		</div>
	);
};

export default ListDisplay;
