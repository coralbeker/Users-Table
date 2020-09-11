import React, { useContext } from "react";
import User from './UsersData'
import {usersContext} from './Main'

export default function Table() {

  let userContext = useContext(usersContext)

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>NAME</td>
            <td>USER_NAME</td>
            <td>EMAIL</td>
            <td>FAVORITE</td>
          </tr>
        </thead>
        <tbody>
          {
            userContext.map((result, index) => (
              <User id={result.id} mail={result.email} name={result.name} username={result.username} key={index} />
            ))}
        </tbody>
      </table>
    </>
  )
}