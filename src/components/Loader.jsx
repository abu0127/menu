// Loader.js
import React from "react";
import "../styles/loader.css";

const Loader = ({loading}) => {
    return (
        <div className={ "loader_wrapper"} >
            <span className="loader">
                Martian
            </span>
        </div>
    );
};

export default Loader;
