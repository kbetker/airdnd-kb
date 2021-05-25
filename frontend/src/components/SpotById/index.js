import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {fetchSpotById} from '../../store/spot'
import {Link} from 'react-router-dom'

export default function SpotById(){
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchSpotById(id))
    }, [dispatch, id])

    const singleSpot = useSelector(state => state.spot.spot)
    if(!singleSpot){return null;}


    function niceDate(str){
       let yearMonth = str.split("-")
       let day = yearMonth[2].split('T')
       return  `${yearMonth[0]}/${yearMonth[1]}/${day[0]}`
    }


    return(
        <>
        <div><h1>Title: {singleSpot.title}</h1></div>
        <div><h2>Location: {singleSpot.location}</h2></div>
        <div>Price: {singleSpot.price}(gp)</div>
        <div>Allows Familiars?: {singleSpot.allowsFamiliar ? <span>Yes</span> : <span>No</span>}</div>
        <div style={{display: 'inline-block'}}><img src={singleSpot.mainPic} style={{height: '250px'}} alt="main view"></img>


                {singleSpot.Pics.map((e) =>

                <img src={e.picUrl} style={{height: '125px'}} key={e.id} alt="images"></img>
                )}

        </div>

        <div>
            Tags:
            <ul>
                {singleSpot.Tags.map((e) =>
                <Link to={`/spots/${e.tag}`} key={e.id}>
                <li>{e.tag}</li>
                </Link>
                )}
            </ul>
        </div>
        <div>Coordinates: X:{singleSpot.coordinateX}, Y:{singleSpot.coordinateY}</div>

        <div>
            Reviews:

                {singleSpot.Reviews.map((e) =>
                <ul key={e.id}>
                    <h2>By: {e.User.name} on {niceDate(e.createdAt)}</h2>
                    <p>{e.body}</p>
                    <p>Location: {e.valueReview} / 5. Cleanliness: {e.cleanReview} / 5. Value: {e.valueReview} / 5. Overall: {((e.valueReview + e.cleanReview + e.valueReview) / 3).toFixed(1)}</p>
                </ul>
                )}
        </div>



        </>
    )

}
