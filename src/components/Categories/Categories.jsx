import React from 'react'
import MealCard from '../ui/MealCard'
import SkeletonCard from '../ui/SkeletonCard';
import useMeals from '../../hooks/useMeals';
import useMealsByCategory from '../../hooks/useMealsByCategory';

export default function Categories({ selectedCategory }) {

  // if filtered meals use category api else use all meals api
  const allMeals = useMeals();
  const filteredMeals = useMealsByCategory(selectedCategory);
  const { data: meals, isLoading, isError, error } =
    selectedCategory ? filteredMeals : allMeals;
// in loading 
  if (isLoading) return (

    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  )
  // in error
  if (isError) return <p className='text-2xl my-10 p-10 shadow-md  flex items-center justify-center w-fit mx-auto  text-red-500'>
    Something went wrong! : {error.message}
  </p>;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-18 mt-18">
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </>
  )
}
