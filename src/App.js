import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  function AddToList() {
    let tempA = list;
    tempA.push(value);
    setList(tempA);
    setValue(" ");
  }
  function RemoveItem(index) {
    let temp = list.filter((item, i) => i !== index);
    setList(temp);
  }
  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />{" "}
      <button onClick={AddToList}>ADD</button>
      <div>
        <ul>
          {list.length > 0 &&
            list.map((item, i) => (
              <li onClick={() => RemoveItem(i)}>{item}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}
