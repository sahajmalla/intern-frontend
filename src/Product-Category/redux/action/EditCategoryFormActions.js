import { HIDE_EDIT_CATEGORY_FORM_MODAL, SHOW_EDIT_CATEGORY_FORM_MODAL, TRY_EDIT_CATEGORY } from "../../../root-redux/actions/type"

export const showEditForm = (id, ClickedIndex) => {
    return {
        type: SHOW_EDIT_CATEGORY_FORM_MODAL,
        id,
        ClickedIndex
    }
}

export const hideEditForm = () => {
    return {
        type: HIDE_EDIT_CATEGORY_FORM_MODAL
    }
}

export const tryEditCategory = (data, id)=> {
    return{
        type: TRY_EDIT_CATEGORY,
        data,
        id
    }
}