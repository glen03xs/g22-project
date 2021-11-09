import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./components/pages/Home";

function App() {
  return (
    <div className="page-wrapper">
      <Navbar /> 
      <Home />
      <Footer />
    </div>
  );
}

export default App;
