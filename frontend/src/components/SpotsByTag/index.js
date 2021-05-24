import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {fetchspotsByTag} from '../../store/spots'

export default function SpotsByTag(){
    const { tag } = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchspotsByTag(tag))
    }, [dispatch])

    const spotsByTag = useSelector(state => state.spots.spots)
    if(!spotsByTag){return null;}

    console.log("XXXXXXXXXXXXXXXXXXXXXXX:  ", spotsByTag.spotsByTag)



    return(
        <>
      <div>Hi from spotsByTag</div>
        {spotsByTag.spotsByTag.map((e) =>
        <div>
            <div>
            <h1>Title: {e.Spot.title}</h1>
            </div>
        </div>


        )}


        </>
    )

}
