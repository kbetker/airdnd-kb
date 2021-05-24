import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {fetchSpotById} from '../../store/spots'

export default function SpotById(){
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchSpotById(id))
    }, [dispatch])

    const singleSpot = useSelector(state => state.spot.spot)
    if(!singleSpot){return null;}

    console.log("WTFWTFWTFWTFW", singleSpot.ownerId)


    // const all = useSelector(state => state.spot.spot);
    // if(!all){return null;}


    return(
        <>
        HI from spot by one
        </>
    )

}
