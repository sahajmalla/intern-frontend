import { HIDE_VERIFIED_PROD_EDIT_FORM, SHOW_VERIFIED_PROD_EDIT_FORM } from "../../../../root-redux/actions/type"

const initialState = {
    show: false,
    id: null
}

const ShowHideVerifiedProdEditFormReducers = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_VERIFIED_PROD_EDIT_FORM: return { ...state, show: true , id: action.ClickedIndex}
        case HIDE_VERIFIED_PROD_EDIT_FORM: return { ...state, show: false, id: null }
        default: return state
    }
}

export default ShowHideVerifiedProdEditFormReducers
