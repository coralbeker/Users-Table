import React ,{useContext} from "react";
import {usersContext} from './Main'

export default function PageError() {

    let userContext = useContext(usersContext)

    return (
        <div className="error">
            {
                `${userContext}`
            }
        </div>
    )
}


