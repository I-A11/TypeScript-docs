import { useState } from "react";

const ChangeValue = () => {
  const [value, setValue] = useState("Change me");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="inputContainer">
      <input type="text" value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </div>
  );
};
export default ChangeValue;
