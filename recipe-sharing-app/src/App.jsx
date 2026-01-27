import { BrowserRouter, Routes, Route,  useParams } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
      <h1>Recipe Sharing Application</h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />

        <Route
          path="/recipe/:id"
          element={<RecipeDetailsWrapper />}
        />
      </Routes>
    </BrowserRouter>
  );
}

// Wrapper لتحويل id من string إلى number
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

export default App;


