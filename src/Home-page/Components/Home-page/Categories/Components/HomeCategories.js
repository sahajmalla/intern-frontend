import { useSelector } from "react-redux"

const HomeCategories = () => {

    const categories = useSelector(state => state.categoryState.category)

    return (

        <div className="px-5 grid grid-cols-3 md:grid-cols-5 md:flex flex-wrap px-2 py-4 gap-x-6 shadow rounded-xl">
            {categories && categories.map(category => (
                <div key={category.id} className="group relative" >
                    <div className="flex flex-col group-hover:opacity-75 rounded-lg">
                        <img
                            className="inline object-cover w-20 h-20 md:w-24 md:h-24 mr-2"
                            src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                            alt="Profile image"
                        />
                        <span className="py-2 text-sm text-gray-500">{category.category_name}</span>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default HomeCategories
