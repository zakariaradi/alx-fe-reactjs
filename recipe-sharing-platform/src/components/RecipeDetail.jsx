import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipesData.find(
      (item) => item.id === parseInt(id)
    );
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="p-6 text-center">
        <p className="text-xl">Recipe not found ❌</p>
        <Link to="/" className="text-blue-600 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-80 object-cover rounded-xl shadow mb-6"
      />

      <h1 className="text-4xl font-bold mb-4">
        {recipe.title}
      </h1>

      <p className="text-gray-700 mb-6">
        {recipe.summary}
      </p>

      {/* Ingredients */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Ingredients
        </h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Cooking Instructions
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <Link
        to="/"
        className="text-blue-600 hover:underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default RecipeDetail;
