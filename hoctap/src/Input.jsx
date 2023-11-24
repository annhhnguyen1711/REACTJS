import ErrorIcon from "./react-icon/Valid";
import Valid from "./react-icon/Valid";
export default function Input(props){
    return(

        <div
         className={'input-group ${!props.isValid && props,isTouched? "invalid":  }'}

        >
        <label htmlFor={props.name}>{props.label}</label>
        <input className="input" name={props.name} type={props.type} placeholder={props.placeholder} value={props.value} onChange={(e)=> props.onChange(e)}>
        </input>
        </div>
    );
}