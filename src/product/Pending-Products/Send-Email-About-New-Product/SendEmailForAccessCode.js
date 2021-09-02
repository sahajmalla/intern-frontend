import emailjs from 'emailjs-com';

const getCodeFromUserLink = 'https://www.instagram.com/accounts/login/?force_authentication=1&enable_fb_login=1&next=/oauth/authorize%3Fclient_id%3D1266169713861264%26redirect_uri%3Dhttps%3A//google.com/%26scope%3Duser_profile%2Cuser_media%26response_type%3Dcode'
const sendEmailDetails ={
    from_name: 'Instagram Project',
    message: ``
}