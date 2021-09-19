import { SEARCH_PRODUCT } from "../../../../../root-redux/actions/type"

const SearchItemAction = (item) => {
    return{
        type: SEARCH_PRODUCT,
        item
    }
}

export default SearchItemAction
