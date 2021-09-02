import { call, put } from "redux-saga/effects";
import { POST_ADD_PRODUCT_TO_CAT_SUCCESS } from "../../../../root-redux/actions/type";
import PostAddProductToCatAPI from "../../api/PostAddProductToCatAPI";

export default function* workerPostAddProdToCatSaga (action)  {
    try {
        console.log(action.data);
        const response =yield call(PostAddProductToCatAPI, action.data)
        console.log(response);
        yield put({type: POST_ADD_PRODUCT_TO_CAT_SUCCESS, response})
    } catch (error) {
        console.log(error.response);
    }
}


