import { useForm } from "react-hook-form"
import { Redirect, useHistory } from "react-router";


const Search = () => {
    const { register, handleSubmit } = useForm();

    let history = useHistory()

    const onSubmit = item => {
        history.push({
            pathname: `/search-product?search=${new String(Object.values(item))}`
        })
        window.location.reload()
      
        console.log(new String(Object.values(item)));
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="shadow flex items-center text-sm md:text-base ">
                    <input {...register("search")} className="w-full rounded p-2" type="text" placeholder="Search..." />
                    <button
                        className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
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
