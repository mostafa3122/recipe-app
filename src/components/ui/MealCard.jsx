import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MealCard({ meal }) {
    const navigate = useNavigate()
    return (
        <div className="group py-6 relative rounded-2xl shadow-md flex flex-col items-center  bg-white hover:shadow-xl transition-shadow ">
            <div className=" absolute -translate-y-1/2  group-hover:rotate-360 transition-all duration-500">
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-36 h-36 border-4 border-white rounded-full   object-cover "
                />
            </div>
            <div className="px-6 text-center mt-25">
                <h3 className="font-semibold text-lg truncate">{meal.strMeal.length > 25 ? meal.strMeal.slice(0, 25) + "..." : meal.strMeal}</h3>
                <p>{meal.strArea}</p>
                <button onClick={() => navigate(`/recipeDetails/${meal.idMeal}`)} className=' cursor-pointer bg-green-500 rounded-full px-6 py-2 font-medium text-white hover:bg-green-600 hover:scale-110 transition-all duration-700 mt-4'>View Recipe</button>

            </div>

        </div>
    )
}
