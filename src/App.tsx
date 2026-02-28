import { useEffect, useState } from 'react'
import './App.css'

type Recipe = {
  id: number
  name: string
  image: string
  cuisine: string
  rating: number
  caloriesPerServing: number
  prepTimeMinutes: number
  cookTimeMinutes: number
  servings: number
}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  useEffect(() => { 
    async function fetchRecipe() {
      const response = await fetch('https://dummyjson.com/recipes')
      const data = await response.json()
      setRecipes(data.recipes)
    }
    fetchRecipe()
  }, [])

  return (
    <>
     <div className="container">
      <h1>Recipe List</h1>
      <div className="recipe-list">
        {recipes.map(recipe => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <h2>{recipe.name}</h2>
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>Rating:</strong> {recipe.rating} ⭐</p>
            <p><strong>Calories:</strong> {recipe.caloriesPerServing} kcal</p>
            <p>
              <strong>Prep:</strong> {recipe.prepTimeMinutes} min | 
              <strong> Cook:</strong> {recipe.cookTimeMinutes} min
            </p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
