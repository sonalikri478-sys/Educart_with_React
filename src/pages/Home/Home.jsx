import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import ProductData from "../../components/FeaturedProducts/ProductData";



function Home() {

 
const homeFeaturedProducts= ProductData.filter(item=>item.featured===true);

  return (
    <>
      <Hero />
      <div id="shop-by-category">
      <Category />
      </div>
      <FeaturedProducts products={homeFeaturedProducts}/>
    </>
  );
}

export default Home;