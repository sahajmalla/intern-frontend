import { useSelector, useDispatch } from "react-redux"
import { getVerifiedProductsAction } from "../../../../../product/Pending-Products/redux/actions/GetVerifiedProductActions"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const HomeProducts = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.GetVerifiedProductReducers.VerifiedProds)

    useEffect(() => {
        dispatch(getVerifiedProductsAction())
    }, [])

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="px-5 mx-auto">

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (

                            <Link
                                key={product.id}
                                className="group relative shadow rounded-lg"
                                to={`/product/${product.product?.insta_id}/${product.product?.product_name}`}
                            >
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={product.product?.media_url}
                                        alt="Product image"
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div className='px-2 pb-2' >

                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">

                                            {product.category_name}

                                        </h3>

                                        <h3 className="text-sm text-gray-700" >
                                            <div >

                                                <span
                                                    aria-hidden="true"
                                                    className="absolute inset-0"
                                                />

                                                {product.product?.product_name}
                                            </div>
                                        </h3>
                                    </div>

                                </div>
                            </Link>

                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeProducts
