class UsersStorage {

    getUsresItem = (key) => {
        const dataFromStorage = localStorage.getItem(key)
        return dataFromStorage;
    }

    setUsersItem = (key, value) => {
        localStorage.setItem(key, value)
    }

}

export default new UsersStorage()
