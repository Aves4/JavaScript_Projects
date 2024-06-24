import { useState } from "react";
import "./App.css";
import GamePage from "./components/GamePage";
import HomePage from "./components/HomePage";

function App() {
  const [selectedTab, setSelectedTab] = useState("HomePage");

  return selectedTab === "HomePage" ? (
    <HomePage setSelectedTab={setSelectedTab} />
  ) : (
    <GamePage />
  );
}

export default App;
