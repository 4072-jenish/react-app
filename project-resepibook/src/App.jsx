import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import HomeComp from './Components/HomeComp';
import AddRecipe from './Components/AddRecipe';
import ViewRecepies from './Components/viewRecipes';
import EditRecipe from './Components/EditRecipe';
import { useDispatch } from 'react-redux';
import { getResepie } from './Services/storage';
import { addRecipe } from './Services/Actions/recipieActions';

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const recipesFromStorage = getResepie() || [];
    dispatch(addRecipe(recipesFromStorage));
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/addRecipe" element={<AddRecipe />} />
        <Route path="/viewRecepis/:id" element={<ViewRecepies />} />
        <Route path="/editRecipe/:id" element={<EditRecipe />} />
      </Routes>
    </>
  );
}

export default App;
