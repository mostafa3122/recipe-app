import React from 'react'
import SkeletonCard from '../components/ui/SkeletonCard'
import useMeals from '../hooks/useMeals'
import MealCard from '../components/ui/MealCard';

export default function Home() {

  const { data: meals, isLoading, isError, error } = useMeals()

  if (isLoading) return (

    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  )
  if (isError) return <p className='text-2xl my-10 p-10 shadow-md  flex items-center justify-center w-fit mx-auto  text-red-500'>
    Something went wrong! : {error.message}
  </p>;
  return (
    <div className=' my-6   '>
      <h1 className='font-bold mb-6 text-4xl bg-linear-to-r from-[#f29625] to-[#e17965] via-[#e47139] bg-clip-text text-transparent'>
        Learn, Cook, Eat Your Food
      </h1>
      <div className="my-4 border-b border-gray-300"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-18 mt-18">
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>

    </div>

  )
}
