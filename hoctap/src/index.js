import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MyAppWithProps from "./components/MyAppWithProps";
import RegistrationForm from "./components/RegisterForm";

import reportWebVitals from "./ReactHooks/reportWebVitals";

//Nhớ lỗi chính tả
//viết đuôi folder import đầy đủ

// class Test extends React.Component {
//   // Hàm khởi tạo object => step1 Initialization
//   constructor(props) {
//     //supper: gọi các phương thức khởi tạo (contructor) của lớp (class) cha.
//     //hàm khởi tạo của lớp cha
//     super(props);
//     //this: gọi đối tượng(object) hiện tại của class,
//     this.state = { hello: "world!" };
//   }

//   //Mounting Step 2
//   componentDidMount() {
//     console.log("componentDidMount()");
//   }
//   //Step 3
//   changeState() {
//     this.setState({ hello: "FPT-Apptech" });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello{this.state.hello}</h1>
//         <h2>
//           <a onClick={this.changeState.bind(this)}>Click here!</a>
//         </h2>
//       </div>
//     );
//   }
//   //Step4
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate()");
//     return true;
//   }
//   //Step5
//   componentDidUpdate() {
//     console.log("componentDidUpdate()");
//   }
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />*/}
    {/* {<Test />} */}
    {/* <MyAppWithProps></MyAppWithProps> */}
    <RegistrationForm></RegistrationForm>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
