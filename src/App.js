import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";

function App() {
  return (
    <div className="container">
      <Header />
      <CreateNote />
      <Footer />
    </div>
  );
}

export default App;
