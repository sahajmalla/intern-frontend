import { HIDE_VERIFIED_PROD_EDIT_FORM, SHOW_VERIFIED_PROD_EDIT_FORM } from "../../../../root-redux/actions/type"

export const showVerifiedProdEditForm = (ClickedIndex) => {
    return {
        type: SHOW_VERIFIED_PROD_EDIT_FORM,
        ClickedIndex
    }
}

export const hideVerifiedProdEditForm = () => {
    return {
        type: HIDE_VERIFIED_PROD_EDIT_FORM
    }
}