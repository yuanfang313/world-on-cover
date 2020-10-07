import React from "react";

function Summary({ onClick }) {
  const categoryArr = [
    "culture",
    "economy",
    "politics",
    "science and technology",
    "social issue",
    "figure",
  ];

  return (
    <div className="summary">
      <hr />
      <ul className="nav justify-content-center">
        {categoryArr.map((category, i) => (
          <li
            key={i}
            className="nav-item"
            style={{ cursor: "pointer" }}
            onClick={() => {
              onClick(category);
            }}
          >
            <a className="nav-link active">{category}</a>
          </li>
        ))}
      </ul>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}

export default Summary;
