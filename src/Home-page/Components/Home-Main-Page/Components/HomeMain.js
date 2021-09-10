import HomeCategories from "../../Home-page/Categories/Components/HomeCategories"
import HomeProducts from "../../Home-page/Products/Components/HomeProducts"

const HomeMain = () => {
    return (
        <div className="">
            {/* ad banner */}
            {/* <div className=" w-full h-24 shadow-lg">
                ad banner
            </div> */}

            {/* categories */}
            <div className="w-full h-auto mt-6 text-gray-700">
                <HomeCategories />
            </div>
            
            {/* products */}
            <div className="w-full h-auto mt-6 text-gray-700">
                <HomeProducts />
            </div>

        </div>
    )
}

export default HomeMain
