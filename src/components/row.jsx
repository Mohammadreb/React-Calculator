// outputScreenRow.js File
import React from "react"; // Import React (Mandatory Step)
  
// Functional Component.
// Used to show Question/Answer.
const row = (props) => {
    return (
        <div className="screen-row">
            <input type="text" readOnly value={props.value} />
        </div>
    );
};
export default row; // Export Output Screen Row