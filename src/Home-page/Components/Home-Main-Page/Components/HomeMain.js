import HomeCategories from "../../Home-page/Categories/Components/HomeCategories"

const HomeMain = () => {
    return (
        <div>
            {/* ad banner */}
            <div className=" w-full h-24 shadow-lg">
                ad banner
            </div>

            {/* categories */}
            <div className="w-full h-auto mt-6 shadow-lg text-gray-700">
                <span className="font-semibold text-xl p-6">Our Categories</span>
                <HomeCategories />
            </div>
        </div>
    )
}

export default HomeMain
