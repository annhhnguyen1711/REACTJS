import React,{components} from "react";
import './style.css';
//extend: kế thừa
//vd: A extend B;thì B là lớp(class) cha của A; 
//login là kế thừa lại những Method,property trong lớp Component
class Login extends components
{
    render(){
        return(
            <div>
                <h2>Login form</h2>
                Username: <input type="text"/>
                <br>
                Password <input type="button"/>
                </br>
                <input type="submit"/>
            </div>
        );
    }
}