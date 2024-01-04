import {Recipes} from "../components/home/recipes/Recipes";
import {Shops} from "../components/home/shops/Shops";
import {Production} from "../components/home/production/Production";
import {Posts} from "../components/home/posts/Posts";
import {Hero} from "../components/home/hero/Hero";
import {ProductsSwiper} from "../components/home/products/ProductsSwiper";

export const Home = () => {
    return (
      <>
        <Hero />
        <ProductsSwiper />
        <Production />
        <Recipes />
        <Shops />
        <Posts />
      </>
    );
}