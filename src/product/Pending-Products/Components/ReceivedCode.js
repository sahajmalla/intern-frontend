import { useLocation } from "react-router"
import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { GetCodeForInstaAccesToken } from "../redux/actions/PendingProductActions";
import setItemWithExpiry from "../../../utils/setLocalStarageItemsWithExpiry";

const ReceivedCode = () => {

    const dispatch = useDispatch()

    let query = new URLSearchParams(useLocation().search);
    let code = query.get("code");
   
    useEffect(() => {
        if (code) {
            dispatch(GetCodeForInstaAccesToken(code))
        }
    }, [])

    return (
        <>

            <div className="bg-indigo-900 relative overflow-hidden h-screen">
                <div className="inset-0 bg-black opacity-25 absolute">
                    {/* image */}
                </div>
                <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                    <div className="w-full font-mono flex flex-col items-center relative z-10">
                        <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                            Thank you for using our App.
                        </h1>
                        <p className="font-extrabold text-2xl my-44 text-white">
                            Your trust is everything to us!
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ReceivedCode

