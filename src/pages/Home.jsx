import React, { useState } from 'react';
import Categories from '../components/Categories/Categories';
import CategoriesBar from '../components/Categories/CategoriesBar';

export default function Home() {

  const [selectedCategory, setSelectedCategory] = useState(null); // ✅ هنا


  return (
    <div className=' my-6 '>
      <h1 className='font-bold mb-6 text-4xl bg-linear-to-r from-[#f29625] to-[#e17965] via-[#e47139] bg-clip-text text-transparent'>
        Learn, Cook, Eat Your Food
      </h1>
      <CategoriesBar selected={selectedCategory}
        onSelect={setSelectedCategory} // ✅ بنبعت الـ sette
      />
      
      <Categories selectedCategory={selectedCategory}
      />

    </div>

  )
}
