import React, {useState} from "react";

function App(){
    const[headingText, setHeadingText] = useState("Hello");

    function handleClick(){
        setHeadingText("submitted");
    }

    return(
        <div>
            <h1>{headingText}</h1>
            <button
            onClick={handleClick}>Submit</button>
        </div>
    );

}
export default App;