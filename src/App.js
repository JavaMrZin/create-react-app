import { useState, useEffect } from "react"

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changed.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changed.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter changed.");
  }, [keyword, counter]);
  return (
    <div>
      <input type="text" value={keyword} onChange={onChange} placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
