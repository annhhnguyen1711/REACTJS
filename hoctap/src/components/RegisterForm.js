import React, { useState } from "react";

function RegistrationForm() {
  //kiểm soát hành vi cảu các thành phần trong form
  //Thông qua "useState components"
  const [input, setInput] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    console.log(value);
    setInput((value) => ({ value, [name]: value }));
  };
  const handleSubmit = (event) => {
    //kiểm soát bất đồng bộ sự kiênk
    //đảm bảo các sự kiện  Không diễ ra đông thời
    event.prevenDefaul();
    console.log(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your Name:
          <input
            type="text"
            name="username"
            value={input.userName || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={input.age || ""}
            onChange={handleChange}
          />
        </label>

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
export default RegistrationForm;
