import React, { useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import {fetchAll} from '../../store/fetchTest'

export default function FetchTests(){
    const dispatch = useDispatch()

    useEffect( async ()=>{
        await dispatch(fetchAll())
    }, [])

    const wat = useSelector(state => state.fetch.list);
    if(!wat){return null;}


    return(

        <div>
          {wat.map((e) =>
          <div key={e.id}> {e.name} </div>

          )}
        </div>

    )



}
