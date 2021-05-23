import React, { useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import {fetchUsers} from '../../store/fetchTest'

export default function FetchUserTests(){
    const dispatch = useDispatch()

    useEffect(()=>{
         dispatch(fetchUsers())
    }, [dispatch])

    const users = useSelector(state => state.fetch.list);
    if(!users){return null;}


    return(

        <div>
          {users.map((e) =>
        <div className='fetchContainer' key={e.id}>
            <div className='fetchTest'>{e.username}</div>
            <div className='fetchTest'>{e.email}</div>
            <div className='fetchTest' style={{backgroundColor: `${e.profilePicColor}`, width: '35px', height: '35px'}}> {e.name}</div>
            <img src={`${e.profilePic}`} alt='user pics'></img>
        </div>




          )}
        </div>

    )



}
