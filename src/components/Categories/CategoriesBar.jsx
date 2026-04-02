import { BsChevronDown } from 'react-icons/bs';
import useCategories from '../../hooks/useCategories';

export default function CategoriesBar({ selected, onSelect }) {

    const { data: categories, isLoading } = useCategories();

    if (isLoading) return (
        <div className="h-10 bg-gray-200 animate-pulse rounded-xl" />
    );

    return (
        <>
        {/* for larg screens */}
            <div className="hidden md:flex flex-wrap gap-y-4 gap-x-9 border-gray-200 border-b p-5">
                <button
                    onClick={() => onSelect(null)}
                    className={`px-4 py-2 rounded-2xl  whitespace-nowrap hover:shadow-lg transition-all duration-300
                          ${!selected
                            ? "bg-[#e47139] text-white"
                            : "shadow-md text-gray-600  hover:bg-white"
                        }`}
                >
                    All
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat.idCategory}
                        onClick={() => onSelect(cat.strCategory)}
                        className={`px-4 py-2 rounded-2xl  whitespace-nowrap hover:shadow-lg transition-all duration-300
                              ${selected === cat.strCategory
                                ? "bg-[#f29625] text-white"
                                : "shadow-md text-gray-600 hover:bg-white  "
                            }`}
                    >
                        {cat.strCategory}
                    </button>
                ))}
            </div>
            {/* for mobile screen */}
            <div className=" relative md:hidden w-full ">
                <select
                    value={selected || ""}
                    onChange={(e) => onSelect(e.target.value)}
                    className="px-4 py-2 w-full appearance-none rounded-2xl  shadow-md text-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all"
                >
                    <option value="all">All Categories</option>
                    {categories.map((cat) => (
                        <option key={cat.idCategory} value={cat.strCategory}>
                            {cat.strCategory}
                        </option>
                    ))}
                </select>
                <BsChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" />

            </div>
        </>
    );
}