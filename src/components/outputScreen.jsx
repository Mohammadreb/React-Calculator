// outputScreen.js File
import React from "react"; // Import React (Mandatory Step).
import Row from "./row"; // Import Output Screen Row.
  
// Functional Component.
// Use to hold two Screen Rows.
const OutputScreen = (props) => {
    return (
        <div className="screen">
            <Row value={props.question} />
            <Row  value={props.answer} />
        </div>
    );
};
export default OutputScreen; // Export Output Screen.