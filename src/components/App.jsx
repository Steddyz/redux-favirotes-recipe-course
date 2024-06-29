import React from "react";
import RecipeItem from "./recipe-item/RecipeItem";
import Header from "./header/Header";
function App() {
  return (
    <section>
      <Header />
      <div>
        <RecipeItem
          recipe={{
            id: "1",
            name: "Peperonni",
          }}
        />
        <RecipeItem
          recipe={{
            id: "2",
            name: "Lasagna",
          }}
        />
        <RecipeItem
          recipe={{
            id: "3",
            name: "Sushi",
          }}
        />
      </div>
    </section>
  );
}

export default App;
