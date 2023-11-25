import React, { useState } from "react";

function XmlHttpExample() {
  const [data, setData] = useState(null);

  function handeClick() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.onload = function () {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }
  return (
    <div>
      <button onClick={handeClick}> GET API Data</button>
      {data ? <div>{JSON.stringify(data)}:</div> : <div>Data loading...</div>}
    </div>
  );
}

export default XmlHttpExample;
