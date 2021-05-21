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
     
      <div className="subNavContainer">
      <hr />
        <ul className="nav justify-content-center">
          {categoryArr.map((category, i) => (
            <div key={i} className="nav-div">
              <li
                className="nav-item"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  onClick(category);
                  
                }}
              >
                <p className="navLabel">
                  {category[0].toUpperCase() + category.slice(1)}
                </p>
                {console.log(i)}
              </li>
            </div>
          ))}
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default SubNav;
