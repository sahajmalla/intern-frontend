import { HIDE_ADD_PRODUCT_TO_CATEGORY_FORM, SHOW_ADD_PRODUCT_TO_CATEGORY_FORM } from "../../../../root-redux/actions/type"

const initialState = {
    show: false,
    index: null
}

const AddProductToCategoryReducers = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ADD_PRODUCT_TO_CATEGORY_FORM: return { ...state, show: true, index: action.ClickedIndex };
        case HIDE_ADD_PRODUCT_TO_CATEGORY_FORM: return { ...state, show: false };
        default: return state;
    }
}

export default AddProductToCategoryReducers
