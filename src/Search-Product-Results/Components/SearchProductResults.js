import { useSelector, useDispatch } from "react-redux"
import Footer from "../../Home-page/Components/Footer/Footer"
import Header from "../../Home-page/Components/Header/Header"
import { Link } from "react-router-dom"
import { useLocation } from "react-router"
import { useEffect } from "react"
import SearchItemAction from "../../Home-page/Components/Search/Redux/Actions/SearchItemAction"

const SearchProductResults = () => {
    const dispatch = useDispatch()
    const searchResult = useSelector(state => state.searchProductReducers.success)

    let query = new URLSearchParams(useLocation().search)
    let search = query.get("search")

    useEffect(() => {
        if (search) {
            dispatch(SearchItemAction(search))
        }else{
            window.history.back()
        }
    }, [])

    return (
        <>
            <div className={`bg-white ${Array.isArray(searchResult)? `h-auto` : 'h-screen'} `}>
                <div className="max-w-7xl mx-auto h-full">
                    <div className="pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32 h-full">
                        <Header />

                        <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-6 lg:mt-6 lg:px-8 xl:mt-8 h-full">
                            {searchResult &&
                                <section className="text-gray-600 body-font">
                                    <div className="px-5 mx-auto">

                                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                                            {Array.isArray(searchResult)? searchResult.map((product) => (

                                                <Link
                                                    key={product.id}
                                                    className="group relative shadow rounded-lg"
                                                    to={`/product/${product.product?.insta_id}/${product.product?.product_name}`}
                                                >
                                                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                                        <img
                                                            src={product.media_url}
                                                            alt="Product image"
                                                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                                        />
                                                    </div>
                                                    <div className="mt-4 flex justify-between">
                                                        <div className='px-2 pb-2' >

                                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">


                                                            </h3>

                                                            <h3 className="text-sm text-gray-700" >
                                                                <div >

                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="absolute inset-0"
                                                                    />

                                                                    {product.product_name}
                                                                </div>
                                                            </h3>
                                                        </div>

                                                    </div>
                                                </Link>

                                            ))
                                            :
                                            <div>
                                                no results found
                                            </div>
                                            }

                                        </div>
                                    </div>
                                </section>
                            }
                        </main>

                        <Footer />
                    </div>

                </div>
            </div>


        </>
    )
}

export default SearchProductResults
