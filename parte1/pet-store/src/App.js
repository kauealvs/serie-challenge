import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import BannerCategories from "./components/BannerCategories";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <BannerCategories />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
