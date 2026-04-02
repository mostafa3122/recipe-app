import { useNavigate, useParams } from "react-router-dom";
import useMealById from "../hooks/useMealById";
import SkeletonCard from "../components/ui/SkeletonCard";
import { IoArrowBack } from "react-icons/io5";
export default function RecipeDetails() {
  const { id } = useParams();
  const { data: meal, isLoading, isError, error } = useMealById(id);
  const navigate = useNavigate();
  // for make no empty ingredient 
  const ingredients = meal
    ? Array.from({ length: 20 }, (_, i) => ({
      ingredient: meal[`strIngredient${i + 1}`],
      measure: meal[`strMeasure${i + 1}`],
    })).filter((item) => item.ingredient && item.ingredient.trim() !== "")
    : [];

    // in loading
  if (isLoading) return (
    <SkeletonCard />
  )
  // in error
  if (isError) return <p className="text-red-500">{error.message}</p>;

  return (
    
    <div className="my-6 max-w-6xl mx-auto">
      {/* Back Button to prev page */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6  cursor-pointer flex items-center  gap-2 text-gray-500 hover:text-[#e47139] transition"
      >
        <IoArrowBack /> Back
      </button>

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="overflow-hidden rounded-2xl shadow-md ">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full  md:w-80 h-80 object-cover   hover:scale-110 transition-all duration-300 "
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            {meal.strMeal}
          </h2>
          {/* Badges */}
          <div className="flex gap-3 flex-wrap mb-6">
            {meal.strCategory && (
              <span className="px-4 py-1 bg-orange-100 text-[#e47139] rounded-full text-sm font-medium">
                {meal.strCategory}
              </span>
            )}
            {meal.strArea && (
              <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                {meal.strArea}
              </span>
            )}
          </div>

          {/* Ingredients */}
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            Ingredients
          </h3>
          <ul className="grid grid-cols-2 gap-2">
            {ingredients.map((item, index) => (
              <li
                key={index}
                className="flex justify-between bg-gray-50 rounded-lg px-3 py-2 text-sm"
              >
                <span className="text-gray-700">{item.ingredient}</span>
                <span className="text-[#e47139] font-medium">{item.measure}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Instructions
        </h3>
        <p className="text-gray-600 leading-8 whitespace-break-spaces">
          {meal.strInstructions}

        </p>
      </div>

      {/* YouTube */}
      {meal.strYoutube && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Video Recipe
          </h3>
          <iframe
            className="w-full rounded-2xl shadow-md aspect-video"
            src={meal.strYoutube.replace("watch?v=", "embed/")}
            title={meal.strMeal}
            allowFullScreen
          />
        </div>
      )}

    </div>
  );

}