
import React, { useState } from 'react';
import RecipeCard from "../components/RecipeCard";
import { useNavigate } from 'react-router-dom';

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();
  
  const handleSearch = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        setRecipe(data.meals[0]);
      } else {
        setRecipe(null);
    
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const recipes = [
    {
        title: "Chicken Pan Pizza",
        image: "/ch pizza.jpeg",
        authorImg: "/ch1.jpeg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/mal.jpeg",
        authorImg: "/ch3.jpeg",
    },
  
    {
        title: "Mutton Biriyani",
        image: "/download.jpeg",
        authorImg: "/ch5.jpeg",
    },
   

    {
        title: "American Cheese Burger",
        image: "/burgur.jpeg",
        authorImg: "/ch4.jpeg",
    }, {
      title: "White-Pasta",
      image: "/psta.jpeg",
      authorImg: "/ch6.jpeg",
  },
  {
    title: "Paratha",
    image: "/paratha.jpeg",
    authorImg: "/ch4.jpeg",
},

  
  ].sort(() => Math.random() - 0.5);

  function rev(){
    navigate('/review');
  }
  return (
    <div className='cardslist'>
       <div className="container mt-4">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter recipe name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn" type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {recipe && (
        <div className='list'>
        <div className="card">
          <div className='row'>
            <div className='col-12 col-md-6'>
              <img
                src={recipe.strMealThumb}
                className="card-img-top"
                alt={recipe.strMeal}
                style={{ height: "300px", width: "300px" }}
              />
            </div>
            <div className='col-12 col-md-6'>
              <div className="card-body">
                <h5 className="card-title my-2">{recipe.strMeal}</h5>
                <p className="card-text p-3">{recipe.strInstructions}</p>
                <p className="card-text t1">Category: {recipe.strCategory}</p>
                <p className="card-text t2">Area: {recipe.strArea}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}

      {!recipe && searchTerm && (
        <p>No recipe found for "{searchTerm}". Please try a different search term.</p>
      )}
      
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>

      
    </div>
    <button onClick={rev} className='btn'>Write your review</button>

    </div>
  );
};

export default Recipes;
