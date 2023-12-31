import React, { useEffect, useState } from "react";
import axios from "axios";
//Dùng Axios cho các thao tác: GET,PUT,POST,DELETE
function AxiosExample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        setData(Response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
}
export default AxiosExample;
