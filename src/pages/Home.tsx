import React from "react";
import {Recipes} from "../components/home/recipes/Recipes";
import {Shops} from "../components/home/shops/Shops";
import {Production} from "../components/home/production/Production";

export const Home = () => {
    return (
      <>
        <Production />
        <Recipes />
        <Shops />
      </>
    );
}