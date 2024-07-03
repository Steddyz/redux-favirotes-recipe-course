import React from "react";
import RecipeItem from "./recipe-item/RecipeItem";
import Header from "./header/Header";
import User from "./user/User";
import { useGetRecipesQuery } from "../store/api/api";
import CreateRecipe from "./create-recipe/CreateRecipe";

function App() {
  const { isLoading, data } = useGetRecipesQuery();

  return (
    <section>
      <Header />
      {/* <User /> */}
      <CreateRecipe />
      <div>
        {isLoading ? (
          <div>Загрузка...</div>
        ) : data ? (
          data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <div>Не найдено</div>
        )}
      </div>
    </section>
  );
}

export default App;
