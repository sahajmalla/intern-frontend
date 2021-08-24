
import { useDispatch } from 'react-redux'
import { showSearchBar } from '../Redux/Actions/ShowHideSearchBar'

const MobileSearch = () => {
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(showSearchBar())} className="block md:hidden p-2">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>

        </button>
    )
}

export default MobileSearch
