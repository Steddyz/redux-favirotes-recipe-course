import React, { useState } from "react";
import { useCreateRecipeMutation } from "../../store/api/recipe.api";

const defaultValueRecipe = {
  name: "",
  image: "",
};

export default function CreateRecipe() {
  const [recipe, setRecipe] = useState(defaultValueRecipe);

  const [createRecipe] = useCreateRecipeMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    createRecipe(recipe).then(() => setRecipe(defaultValueRecipe));
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
