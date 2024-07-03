import React, { useState } from "react";
import { useCreateRecipeMutation } from "../../store/api/recipe.api";

export default function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
  });

  const {} = useCreateRecipeMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipe);
  };

  return (
    <div>
      <from onSubmit={handleSubmit}>
        <p>Создать новый рецепт:</p>
        <label>
          <input
            type="text"
            placeholder="Name"
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Image"
            value={recipe.image}
            onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Создать
        </button>
      </from>
    </div>
  );
}