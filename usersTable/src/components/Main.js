import React, { useEffect, useState, createContext } from "react";
import UserTable from './UsersTable'
import usersService from '../service/usersService'
import PageError from './PageError'

export const usersContext = createContext()

export default function Main() {
  const [usersData, setData] = useState([])

  useEffect(() => {
    usersService.getUsersData().then((data) => {
      setData(data)
    });
  }, []);

  return (
    <>
      <usersContext.Provider value={usersData}>
        {
          usersData[0] !== undefined ?
            <UserTable></UserTable> :
            <PageError></PageError>
        }
      </usersContext.Provider>
    </>
  )
}


