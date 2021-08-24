import { useSelector } from "react-redux"
import { baseURL } from "../../../../utils/baseUrl"

const Search = () => {
    const categories = useSelector(state => state.categoryState.category)

    return (
        <div>
            <form>

                <div className="shadow flex items-center text-sm md:text-base ">
                    <select  defaultValue="" className="border-r border-gray-300">

                        <option value="" >All Categories</option>

                        {categories && categories.map(category => (

                            <option key={category.id} value={categories.category_name}>
                                {category.category_name}      
                            </option>

                        ))}


                    </select>
                    <input className="w-full rounded p-2" type="text" placeholder="Search..." />
                    <button className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Search
