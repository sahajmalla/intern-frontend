import { ADD_CATEGORY, ADD_CATEGORY_FAILED, ADD_CATEGORY_SUCCESS, DELETE_CATEGORY, DELETE_CATEGORY_FAILED, DELETE_CATEGORY_SUCCESS, EDIT_CATEGORY_FAILED, EDIT_CATEGORY_SUCCESS, GET_CATEGORY, GET_CATEGORY_FAILED, GET_CATEGORY_SUCCESS, TRY_EDIT_CATEGORY } from "../../../root-redux/actions/type";

const initialState = {
    category: [],
    getLoading:false,
    addLoading: false,
    editLoading:false,
    deleteLoading: false,
    addCategoryError: null,
    getCategoryError: null,
    editCategoryError: null,
    deleteCategoryError: null,
    addCategorySuccess: null,
    editCategorySuccess: null,
    deleteCategorySuccess: null,
    reload: false,
};

export const categoryState = (state = initialState, action) => {
    switch (action.type) {

        case GET_CATEGORY:
            return {
                ...state,
                getLoading: true,
                reload: false,

            }

        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                getLoading: false,
                category: action.response.data,
                reload: false,
            }

        case GET_CATEGORY_FAILED:
            return {
                ...state,
                getLoading: false,
                getCategoryError: action.error,
                reload: false,
            }

        case ADD_CATEGORY:
            return {
                ...state,
                addCategoryError: null,
                addCategorySuccess: null,
                addLoading: true,
                reload: false,
                
            }

        case ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                addLoading: false,
                addCategoryError: null,
                addCategorySuccess: action.response,
                reload: true,
            }

        case ADD_CATEGORY_FAILED:
            return {
                ...state,
                addLoading: false,
                addCategoryError: action.error.data.message,
                addCategorySuccess: null,
                reload: false,
            }

        case DELETE_CATEGORY:
            return {
                ...state,
                deleteLoading: true,
                reload: false,
            }
        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                deleteLoading: false,
                deleteCategoryError: null,
                deleteCategorySuccess: action.response,
                reload: true,
            }

        case DELETE_CATEGORY_FAILED:
            return {
                ...state,
                deleteLoading: false,
                deleteCategoryError: action.error.data.message,
                deleteCategorySuccess: null,
                reload: false,
            }
        
        case TRY_EDIT_CATEGORY:
            return{
                ...state,
                editLoading: true,
                reload: false,
            }
        
        case EDIT_CATEGORY_SUCCESS:
            return{
                ...state,
                editLoading: false,
                editCategorySuccess: action.respose,
                editCategoryError: null,
                reload: true
            }

        case EDIT_CATEGORY_FAILED:
            return{
                ...state,
                editLoading: false, 
                editCategorySuccess: null,
                editCategoryError : action.error.data.message,
                reload: false
            }
        

        default: return state
    }
}
