import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {fetchSpotById} from '../../store/spot'
import {Link, useHistory, Redirect} from 'react-router-dom'
import { postReview } from '../../store/review'
import { deleteReviewThunk } from '../../store/review'
import './spotById.css'

export default function SpotById(){
    const { id } = useParams();
    const dispatch = useDispatch();

    //=========  review form data  ===================
    const [body, setBody] = useState('')
    const [cleanReview, setCleanReview] = useState(1);
    const [locationReview, setLocationReview] = useState(1);
    const [valueReview, setValueReview] = useState(1);

    //======== grap one by id =======================
    const history = useHistory()
    const singleSpot = useSelector(state => state.spot.spot)
    const user = useSelector(state => state.session.user)
    const review = useSelector(state => state.review)

    //fetches the spot by id
    useEffect(()=>{
        dispatch(fetchSpotById(id))
    }, [dispatch, review, id, deleteMyReview])


    // for later when adding location on map... actually should it be on this page?
    useEffect(()=>{
    let getXY = document.querySelector(".map")
    if(getXY){
        getXY.addEventListener("mouseup", (e)=>{
        console.log('woot')
    })}
    })



    if(!singleSpot){return  null}

let payload;
if(user){
    payload = {
        userId: user.id,
        spotId: parseInt(id),
        body,
        cleanReview:  parseInt(cleanReview),
        locationReview:  parseInt(locationReview),
        valueReview:  parseInt(valueReview)
    }}


    async function reviewSubmit(e){
        e.preventDefault()
        await dispatch(postReview(payload));
        history.push(`/spot/${parseInt(id)}`)
    }

    // deletes review
    async function deleteMyReview(id){
            await dispatch(deleteReviewThunk(id))
            history.push(`/spot/${singleSpot.id}`)
    }


    function niceDate(str){
       let yearMonth = str.split("-")
       let day = yearMonth[2].split('T')
       return  `${yearMonth[0]}/${yearMonth[1]}/${day[0]}`
    }


    // getXY.addEventListener("mousedown", (e)=>{
    //     // GetCoordinates(e);
    //     console.log('woot')
    // style={{backgroundImage: 'url(/images/bkgrndPaper.jpg)'}}

    return(
        <>
        <div id='spacer'></div>
        <div className="spotWrapper" >

     <div className="spot">
        <div><h1>Title: {singleSpot.title}</h1></div>
        <div><h2>Location: {singleSpot.location}</h2></div>
        <div>Price: {singleSpot.price}(gp)</div>
        <div>Allows Familiars?: {singleSpot.allowsFamiliar ? <span>Yes</span> : <span>No</span>}</div>
        <div style={{display: 'inline-block'}}>
                <img src={singleSpot.mainPic} style={{height: '250px'}} alt="main view"></img>
                {singleSpot.Pics.map((e) => <img src={e.picUrl} style={{height: '125px'}} key={e.id} alt="images"></img> )}
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
                <div key={e.id}>
                    <h2>By: {e.User.name} on {niceDate(e.createdAt)}</h2>
                    <p>{e.body}</p>
                    <p>Location: {e.valueReview} / 5. Cleanliness: {e.cleanReview} / 5. Value: {e.valueReview} / 5. Overall: {((e.valueReview + e.cleanReview + e.valueReview) / 3).toFixed(1)}</p>
                    {user &&
                    user.id === e.userId && <button onClick={() => deleteMyReview(e.id)}>{e.id}</button>}
                </div>
                )}
        </div>


                    { user &&
                    <div>
                        <h2>Add Review:</h2>
                        <br/>
                        <form onSubmit={(e) => reviewSubmit(e)}>
                            <label htmlFor="body">Review</label>
                            <textarea id="body" onChange={(e)=>setBody(e.target.value)} value={body}></textarea>
                            <br/>

                            <label htmlFor="cleanReview">Cleanliness</label>
                            <input type="number" id="cleanReview" onChange={(e)=>setCleanReview(e.target.value)} value={cleanReview}></input>
                            <br/>

                            <label htmlFor="locationReview">Location</label>
                            <input type="number" id="locationReview" onChange={(e)=>setLocationReview(e.target.value)} value={locationReview}></input>
                            <br/>

                            <label htmlFor="valueReview">Value</label>
                            <input type="number" id="valueReview" onChange={(e)=>setValueReview(e.target.value)} value={valueReview}></input>
                            <br/>

                            <button type="submit">Submit</button>

                        </form>
                    </div>
                    }
            </div>



                    <div className="map">
                    <div id="locOnMap" style={{top: singleSpot.coordinateX, left: singleSpot.coordinateY}}>{singleSpot.title}</div>
                        <img src="/images/swordCoastMap.jpg" className="swordCoastMap" alt="sword coast map"></img>
                    </div>

        </div>
        </>
    )

}
