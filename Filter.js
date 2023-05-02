import React, { useState } from "react";
import "./Filter.css";
import { Users } from "../data/users";

const Filter = () => {
  const [query, Setquery] = useState();
  console.log(query);

  console.log(Users.filter((user) => user.first_name.includes("em")));
  return (
    <div className="Search-container">
      <input
        type="text"
        placeholder="searching.."
        className="search"
        onChange={(e) => Setquery(e.target.value)}
      ></input>
      <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className="list-item">
            {user.first_name}
          </li>
        ))}
      </ul>{" "}
    </div>
  );
};

export default Filter;
