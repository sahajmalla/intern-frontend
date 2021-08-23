import { ADD_CATEGORY, HIDE_ADD_CATEGORY_FORM_MODAL, SHOW_ADD_CATEGORY_FORM_MODAL } from "../../../root-redux/actions/type"

const initialState = {
    showForm: false,

}

const AddCategoryFormReducers = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ADD_CATEGORY_FORM_MODAL: return { ...state, showForm: true };
        case HIDE_ADD_CATEGORY_FORM_MODAL: return { ...state, showForm: false };
        default: return state
    }
}

export default AddCategoryFormReducers
