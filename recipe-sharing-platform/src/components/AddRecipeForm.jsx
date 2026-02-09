import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required");
      return;
    }

    const ingredientsList = ingredients.split(",");

    if (ingredientsList.length < 2) {
      setError("Please include at least two ingredients");
      return;
    }

    setError("");

    // Mock submit (no backend)
    console.log({
      title,
      ingredients: ingredientsList,
      steps,
    });

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        ➕ Add New Recipe
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-4"
      >
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2 focus:ring focus:ring-blue-300"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-1">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded p-2 focus:ring focus:ring-blue-300"
            rows="4"
            placeholder="Eggs, Flour, Milk"
          />
        </div>

        {/* Steps */}
        <div>
          <label className="block font-semibold mb-1">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded p-2 focus:ring focus:ring-blue-300"
            rows="4"
            placeholder="Describe the cooking steps"
          />
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
