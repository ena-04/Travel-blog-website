import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}
