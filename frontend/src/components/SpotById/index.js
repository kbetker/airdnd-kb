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
        <div>Title: {singleSpot.title}</div>
        <div>Location: {singleSpot.location}</div>
        <div>Price: {singleSpot.price}(gp)</div>
        <div>Allows Familiars?: {singleSpot.allowsFamiliar ? <span>Yes</span> : <span>No</span>}</div>
        <div>Main picture: {singleSpot.mainPic}</div>
        <div>
            Smaller Pics:
            <ul>
                {singleSpot.Pics.map((e) =>
                <li key={e.id}>{e.picUrl}</li>

                )}
            </ul>
        </div>

        <div>
            Tags:
            <ul>
                {singleSpot.Tags.map((e) =>
                <li key={e.id}>{e.tag}</li>

                )}
            </ul>
        </div>
        <div>Coordinates: X:{singleSpot.coordinateX}, Y:{singleSpot.coordinateY}</div>



        </>
    )

}
