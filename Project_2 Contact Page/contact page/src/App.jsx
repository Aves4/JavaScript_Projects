import "./App.css";
import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import SupportForm from "./components/SupportForm";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <HeroContent />
      <SupportForm />
    </div>
  );
}

export default App;
