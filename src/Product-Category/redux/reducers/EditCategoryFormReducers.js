import { HIDE_EDIT_CATEGORY_FORM_MODAL, SHOW_EDIT_CATEGORY_FORM_MODAL } from "../../../root-redux/actions/type"

const initialState = {
    showForm: false,
    id: null,
    index: null,
}

export const EditCategoryFormReducers = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_EDIT_CATEGORY_FORM_MODAL: return { ...state, showForm: true, id: action.id, index: action.ClickedIndex};
        case HIDE_EDIT_CATEGORY_FORM_MODAL: return { ...state, showForm: false, id: null };
        default: return state;
    }
}