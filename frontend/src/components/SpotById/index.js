import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {fetchSpotById} from '../../store/spot'

export default function SpotById(){
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchSpotById(id))
    }, [dispatch])

    const singleSpot = useSelector(state => state.spot.spot)
    if(!singleSpot){return null;}


    return(
        <>
        <div><h1>Title: {singleSpot.title}</h1></div>
        <div><h2>Location: {singleSpot.location}</h2></div>
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
