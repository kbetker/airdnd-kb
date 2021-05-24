import React, { useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import {fetchAll} from '../../store/fetchTest'

export default function FetchAllTest(){
    const dispatch = useDispatch()

    useEffect(()=>{
         dispatch(fetchAll())
    }, [dispatch])

    const all = useSelector(state => state.fetch.list);
    if(!all){return null;}

    console.log("Fetching all data and then some: ", all[0].Pics[0].picUrl)
    return(
      <div>
          {all.map((element) =>
        <div className='fetchContainer' key={element.id}>
            <div className='fetchTest'>Location: {element.location}</div>
            {/* <img src={`${element.Pics[0].picUrl}`} alt='user pics'></img> */}
            <div className='fetchTest'>{element.User.name}</div>
            {element.User.isHost && <p>IM A HOST!!!</p>}
            <div className='fetchTest' style={{backgroundColor: `${element.User.profilePicColor}`, width: '35px', height: '35px'}}> {element.price}</div>
            <img src={`${element.User.profilePic}`} alt='user pics'></img>
               <p>{element.User.username}'s ratings</p>
            <ul>
               {element.Reviews.map((review)=>
            <li key={review.id}>
                Cleanliness: {review.cleanReview}
            </li>
           )}</ul>
        </div>
          )}
        </div>

    )



}
