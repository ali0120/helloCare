import DoctorsSwiper from "./components/DoctorsSwiper";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <DoctorsSwiper />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
