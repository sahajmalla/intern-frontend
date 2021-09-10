import getItemWithExpiry from "./getLocalStorageItemsWithExpiry"

export const isLogin = () => {
    return (getItemWithExpiry('token'))? true : false
}