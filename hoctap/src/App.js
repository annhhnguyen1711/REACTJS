// import "./style.css";
// import React from "react"
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";

const App = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setAuthor("");
    setFavorite(false);
    setSearch("");
  };

  return (
    <div className="App">
      <label className="search">
        <FaSearch />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />
      </label>
      <div className="form-container">
        <h1>A list of Books </h1>
        <label>
          <p>Life of Pi</p>
        </label>
        <label>
          <FaStar /> <p>Học code today</p>
        </label>
        <br />
        <label>
          <FaStar /> <p>Learn Angular by example</p>
        </label>
        <br />
        <label>
          <p>Họ nhà trai</p>
        </label>
        <br />
        <label>
          <FaStar /> <p>Đôi mắt có lửa</p>
        </label>
        <br />
        <select>
          <option selected="">Author Ascending</option>
          <option value="">Author Descending</option>
        </select>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Add a new Book</h1>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Favorite:
          <input
            type="checkbox"
            checked={favorite}
            onChange={(e) => setFavorite(e.target.checked)}
          />
        </label>
        <br />
        <button type="submit">
          <CiCirclePlus />
          Add
        </button>
      </form>
    </div>
  );
};

export default App;
