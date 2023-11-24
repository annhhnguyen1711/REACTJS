import {IconContext} from "react-icons";
import {FacheckVircle} from "react-icons/fa"

export default function ErrorIcon(){
    return(
        <IconContext.Provider value={{color:"forestgreen", size:"1.7rem"}}>
            <FacheckVircle/>
        </IconContext.Provider>
    );
}