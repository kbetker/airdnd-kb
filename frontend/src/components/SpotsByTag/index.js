import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {fetchspotsByTag} from '../../store/spots'
import { Link } from 'react-router-dom'

export default function SpotsByTag(){
    const { tag } = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchspotsByTag(tag))
    }, [dispatch, tag])

    const spotsByTag = useSelector(state => state.spots.spots)
    if(!spotsByTag){return null;}

    // console.log("XXXXXXXXXXXXXXXXXXXXXXX:  ", spotsByTag.spotsByTag)

    function average(arr){
        if(arr.length === 0) return `No reviews`
        console.log(arr)
        let totalReview = 0;
        let numOfReviews = arr.length
        for(let i = 0; i < arr.length; i++){
            totalReview += (arr[i].cleanReview + arr[i].valueReview + arr[i].locationReview) / 3
        }
          return `${(totalReview / numOfReviews).toFixed(1)} / 5`
    }

    return(
        <>
      <div>Hi from spotsByTag</div>
        {spotsByTag.spotsByTag.map((e) =>
       <Link to={`/spot/${e.Spot.id}`} key={e.id}>
       <div>
            <div><h2>Title: {e.Spot.title}</h2></div>
            <p>Location: {e.Spot.location}</p>
            <p>Main Picture: {e.Spot.mainPic}</p>
            <p>Price: {e.Spot.price}</p>
            <p>Rating: {average(e.Spot.Reviews)}</p>

        </div>
        </Link>

        )}


        </>
    )

}
