export const isLogin = () => {
    console.log(localStorage.getItem('token'));
    return (localStorage.getItem('token')) ? true : false
}