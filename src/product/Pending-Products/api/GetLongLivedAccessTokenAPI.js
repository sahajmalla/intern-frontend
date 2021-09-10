import axios from "axios"

const GetLongLivedAccessTokenAPI = (accesToken) => {
    return axios.get('https://graph.instagram.com/access_token', {
        params: {
            grant_type: 'ig_exchange_token',
            client_secret:'0c9e725bf8ca622f3bf9d39021ff3bed',
            access_token: accesToken
        }
    })
}

export default GetLongLivedAccessTokenAPI
