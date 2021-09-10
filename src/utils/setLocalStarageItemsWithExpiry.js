const setItemWithExpiry = (key, code, ttl) => {
    const now = new Date()

    const item = {
        code: code,
        expiry: now.getTime() + (ttl * 1000),
    }

    localStorage.setItem(key, JSON.stringify(item))
}
export default setItemWithExpiry