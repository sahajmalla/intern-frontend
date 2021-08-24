import { useSelector } from "react-redux"
import { baseURL } from "../../../../../utils/baseUrl"

const HomeCategories = () => {
    const categories = useSelector(state => state.categoryState.category)

    return (

        <>

            <div className="grid grid-cols-3 md:flex flex-wrap px-2 py-4 gap-x-5">
                {categories && categories.map(category => (
                    <div key={category.id} className="flex flex-col items-center ">
                        <img class="inline object-cover w-20 h-20 md:w-24 md:h-24 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                            alt="Profile image" />
                        <span className="py-2 text-gray-700 text-base">{category.category_name}</span>
                    </div>
                ))}
            </div>



        </>

    )
}

export default HomeCategories
