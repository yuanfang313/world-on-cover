import React from "react";

function SubNav({ onClick }) {
  const categoryArr = [
    "culture",
    "economy",
    "politics",
    "science and technology",
    "social issue",
    "figure",
  ];

  return (
    <div>
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
    </div>
  );
}

export default SubNav;
