import axios from "axios"

export const GetUserPostsIDCaptionAPI = (accessToken) => {
    return axios.get(`https://graph.instagram.com/me/media?fields=id,caption&access_token=${accessToken}`)
}

