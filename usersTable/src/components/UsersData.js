import React, { useState, useEffect, useReducer } from "react";
import usersSrorage from '../storage/usersStorage'


export default function Users(props) {

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    let item = usersSrorage.getUsresItem(`favorite ${props.mail}`)
    setFavorite(item === 'true')
  }, []);

  return (
    <>
      <tr key={props.id}>
        <th ><button onClick={() => {
          setFavorite(prevFavorite => {
            const currentFavorite = !prevFavorite;
            usersSrorage.setUsersItem(`favorite ${props.mail}`, currentFavorite)
            return currentFavorite;
          });
        }} >{props.name}</button></th>
        <th>{props.username}</th>
        <th>{props.mail}</th>
        <th className='favorite'>{favorite ? 'Favorite' : ''}</th>
      </tr>
    </>
  );
}
