import React from 'react';
import {useLocation} from "react-router-dom";

const Result = () => {
    const location = useLocation()
    const score = location.state.score;
    return (
        <div>
            {score}
        </div>
    );
};

export default Result;