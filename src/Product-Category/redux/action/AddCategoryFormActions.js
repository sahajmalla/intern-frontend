import { ADD_CATEGORY, HIDE_ADD_CATEGORY_FORM_MODAL, SHOW_ADD_CATEGORY_FORM_MODAL } from "../../../root-redux/actions/type";

export const showAddForm = () => {
    return {
        type: SHOW_ADD_CATEGORY_FORM_MODAL
    }
}

export const hideAddForm = () => {
    return {
        type: HIDE_ADD_CATEGORY_FORM_MODAL
    }
}

export const tryAddCategory = (data) => {
    return {
        type: ADD_CATEGORY,
        data
    }
}