import "./App.css";
import HomeComponent from "./Component/HomeComponent";
import QuizComponent from "./Component/QuizComponent";
import ResultComponent from "./Component/ResultComponent";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/quiz" element={<QuizComponent />} />
        <Route path="/result" element={<ResultComponent />} />
      </Routes>
    </div>
  );
}

export default App;