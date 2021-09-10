import { call } from "@redux-saga/core/effects"
import GetLongLivedAccessTokenAPI from "../../api/GetLongLivedAccessTokenAPI"
import setItemWithExpiry from "../../../../utils/setLocalStarageItemsWithExpiry";

function* workerLongLivedAccessToken(action) {
    try {
       const response =  yield call(GetLongLivedAccessTokenAPI, action.access_token)
       console.log(response);
       const longLivedToken = response.data.access_token
       const TTL = response.data.expires_in
       yield setItemWithExpiry('Insta Access token', longLivedToken, TTL)
    } catch (error) {
        
    }
}

export default workerLongLivedAccessToken
