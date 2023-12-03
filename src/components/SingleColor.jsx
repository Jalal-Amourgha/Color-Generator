import React, { useState } from "react";

const SingleColor = ({ item }) => {
  const [alert, setAlert] = useState(false);
  const handleCopy = (a) => {
    navigator.clipboard.writeText(a);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 1500);
  };

  return (
    <div
      style={{ background: `#${item.hex}` }}
      onClick={() => handleCopy(item.hex)}
    >
      <p>{item.weight}%</p>
      <p>#{item.hex}</p>
      {alert && <p>Copied</p>}
    </div>
  );
};

export default SingleColor;
