import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Category />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default Home;