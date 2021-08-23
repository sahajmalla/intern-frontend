import { DELETE_CATEGORY } from "../../../root-redux/actions/type"

export const tryDeleteCategory = (id) => {
    return {
        type: DELETE_CATEGORY,
        id
    }
}