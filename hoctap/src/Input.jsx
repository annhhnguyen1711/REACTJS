import ErrorIcon from "./react-icon/Valid";
import Valid from "./react-icon/Valid";
export default function Input(props){
    return(

        <div
         className={'input-group ${!props.isValid}'}
         >
        </div>
    );
}