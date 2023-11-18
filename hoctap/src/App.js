import logo from "./logo.svg";
import "./style.css";
import Product from "./Product";
import React, { useState } from "react";

// function App() {
//   return (
//     <div>
//       <h1>PRODUCTS</h1>
//       <div className="App">
//         <Product
//           img="https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=300" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style=" width: 217px; height: 300px;"
//           name="New product"
//           desc="The new product of Nike"
//           price="$200" />
//         <Product
//           img="https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=300" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style=" width: 217px; height: 300px;"
//           name="New product"
//           desc="The new product of Nike"
//           price="$200" />
//         <Product
//           img="https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=300" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style=" width: 217px; height: 300px;"
//           name="New product"
//           desc="The new product of Nike"
//           price="$200" />
//       </div>
//     </div>
//   );
// }

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      {submitted && valid && (
        <div className="success-message">
          <h2>
            {" "}
            Welcome, {values.firstName} {values.lastName}{" "}
          </h2>
          <div>Your registration was successful!</div>
        </div>
      )}

      <form className="register-form" onSubmit={handleSubmit}>
        {!valid && (
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          />
        )}
        {submitted && !values.firstName && (
          <span> Please enter first name</span>
        )}

        {!valid && (
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          />
        )}
        {submitted && !values.lastName && <span> Please enter last name</span>}

        {!valid && (
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        )}
        {submitted && !values.email && <span> Please enter email</span>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
