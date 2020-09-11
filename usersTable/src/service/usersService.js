import axios from "axios";
import usersApi from '../config/usersApiEndPoint.js.js'


class usersSerivce {

    getUsersData = async () => {
        try {
            const response = await axios.get(usersApi.usersApi)
            return response.data

        } catch (err) {
            
            return err 
        }
    };

}

export default new usersSerivce()