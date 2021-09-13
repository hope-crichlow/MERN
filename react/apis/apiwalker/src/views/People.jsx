import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const People = () => {
        const history = useHistory();

        const [person, setPerson] = useState({});
        const { person_id } = useParams();
	return <div></div>;
};

export default People;
