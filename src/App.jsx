import React, { useState } from "react";
import SingleColor from "./components/SingleColor";
import Values from "values.js";

const App = () => {
  const [color, setColor] = useState("red");
  const [items, setItems] = useState(new Values("red").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    let colors = new Values(color).all(10);
    setItems(colors);
  };

  return (
    <>
      <div className="color-box">
        <h1 style={{ color: `#${items[8].hex}` }}>Color Generator</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="color" style={{ color: `#${items[8].hex}` }}>
            Color:{" "}
          </label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ borderColor: `#${items[8].hex}` }}
          />
          <button type="submit" style={{ backgroundColor: `#${items[8].hex}` }}>
            Submit
          </button>
        </form>
      </div>
      <div className="colors-box">
        {items.map((item, index) => (
          <SingleColor key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default App;
