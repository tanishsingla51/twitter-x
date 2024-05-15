import "./App.css";
import { Toaster } from "react-hot-toast";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Body />
      <Toaster />
    </div>
  );
}

export default App;
