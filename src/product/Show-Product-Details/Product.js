import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router"
import Footer from "../../Home-page/Components/Footer/Footer";
import Header from "../../Home-page/Components/Header/Header";
import { useEffect } from "react";
import { getVerifiedProductsAction } from "../Pending-Products/redux/actions/GetVerifiedProductActions";

const Product = () => {

    const dispatch = useDispatch()
    const product = useSelector(state => state.GetVerifiedProductReducers.VerifiedProds)
    let { id } = useParams();
    const prodDetails = product.filter(prod => prod.product?.insta_id === id)

    useEffect(() => {
        dispatch(getVerifiedProductsAction())
    }, [])


    return (

        <div className="bg-white h-auto">
            <div className="max-w-7xl mx-auto h-full">
                <div className="pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32 h-full">
                    <Header />

                    <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-6 lg:mt-6 lg:px-8 xl:mt-8 h-full">
                        <section className="text-gray-600 body-font overflow-hidden">
                            <div className="container px-5 py-24 mx-auto">
                                {prodDetails && prodDetails.map(prod => (
                                    <div key={prod.id} className="lg:w-4/5 mx-auto flex flex-wrap">
                                        <img
                                            alt="ecommerce"
                                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                                            src={prod.product.media_url}
                                        />
                                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{prod.category_name}</h2>
                                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{prod.product.product_name}</h1>

                                            <p className="leading-relaxed">
                                                {prod.product.caption}
                                            </p>

                                            <div className="flex">
                                                <a
                                                    href={`https://www.instagram.com/${prod.product.username}/`}
                                                    target="_blank"
                                                    className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded-lg">
                                                    Contact to seller
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </section>
                    </main>

                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default Product
