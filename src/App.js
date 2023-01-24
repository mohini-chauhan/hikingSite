import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import ProductList from "./components/ProductList/ProductList";
import Gallery from "./components/Gallery/Gallery";
import ContactUs from "./components/ContactUs/ContactUs";
import LearnMore from "./components/LearnMore/LearnMore";

function App() {
  return (
    <div className="App">
      <LearnMore />
      <Navbar />
      <Banner />
      <About />
      <Features />
      <ProductList />
      <Gallery />
      <ContactUs />
    </div>
  );
}

export default App;
