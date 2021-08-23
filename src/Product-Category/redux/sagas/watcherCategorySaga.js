import { takeLatest } from "redux-saga/effects";
import { ADD_CATEGORY, DELETE_CATEGORY, GET_CATEGORY, TRY_EDIT_CATEGORY } from "../../../root-redux/actions/type";
import { addCategorySaga } from "./addCategorySaga";
import { deleteCategorySaga } from "./deleteCategorySaga";
import { editCategorySaga } from "./editCategorySaga";
import { getCategorySaga } from "./getCategorySaga";

export function* watcherCategorySaga() {
    yield takeLatest(GET_CATEGORY, getCategorySaga);
    yield takeLatest(ADD_CATEGORY, addCategorySaga);
    yield takeLatest(DELETE_CATEGORY, deleteCategorySaga);
    yield takeLatest(TRY_EDIT_CATEGORY, editCategorySaga);
}