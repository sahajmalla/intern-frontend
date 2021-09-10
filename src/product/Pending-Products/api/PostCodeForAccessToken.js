import axios from "axios"

const PostCodeForAccessToken = (code) => {
    const formData = new FormData();
    formData.append("client_id", "1266169713861264")
    formData.append("client_secret", "0c9e725bf8ca622f3bf9d39021ff3bed")
    formData.append("grant_type", "authorization_code")
    formData.append("redirect_uri", "https://google.com/")
    formData.append("code", code)
    
    return axios.post('https://api.instagram.com/oauth/access_token', formData)
}

export default PostCodeForAccessToken
