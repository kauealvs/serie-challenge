import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import BannerCategories from "./components/BannerCategories";
import Newsletter from "./components/Newsletter";
import ProductList from "./components/ProductList";
import Banners from "./components/Banners";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <BannerCategories />
      <ProductList sectionTitle={"novidades"} />
      <Banners />
      <ProductList sectionTitle={"destaques"} maxProducts={8} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
