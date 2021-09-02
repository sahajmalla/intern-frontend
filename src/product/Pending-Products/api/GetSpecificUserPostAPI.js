import axios from "axios"

const GetSpecificUserPostAPI = (postID, access_token) => {
    return axios.get(`https://graph.instagram.com/${postID}?fields=id,caption,media_type,media_url,username,timestamp&access_token=${access_token}`)
}

export default GetSpecificUserPostAPI
