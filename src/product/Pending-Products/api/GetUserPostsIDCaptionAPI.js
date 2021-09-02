import axios from "axios"

export const GetUserPostsIDCaptionAPI = (access_token) => {
    return axios.get(`https://graph.instagram.com/me/media?fields=id,caption&access_token=${access_token}`)
}

