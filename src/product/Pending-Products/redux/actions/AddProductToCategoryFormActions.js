import { HIDE_ADD_PRODUCT_TO_CATEGORY_FORM, POST_ADD_PRODUCT_TO_CAT, SHOW_ADD_PRODUCT_TO_CATEGORY_FORM } from "../../../../root-redux/actions/type"

export const showAddProductToCategoryForm = (ClickedIndex) => {
    return {
        type: SHOW_ADD_PRODUCT_TO_CATEGORY_FORM,
        ClickedIndex
    }
}

export const hideAddProductToCategoryForm = () => {
    return {
        type: HIDE_ADD_PRODUCT_TO_CATEGORY_FORM
    }
}

export const postAddProductToCat = (data)=>{
    return{
        type: POST_ADD_PRODUCT_TO_CAT,
        data
    }
}