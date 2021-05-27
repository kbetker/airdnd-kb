import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchSpotById } from '../../store/spot'
import { Link, useHistory, Redirect } from 'react-router-dom'
import { postReview } from '../../store/review'
import { deleteReviewThunk } from '../../store/review'
import './spotById.css'

export default function SpotById() {
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
    const profPic = singleSpot?.User.profilePic
    const bgColor = singleSpot?.User.profileBackgroundColor

    //fetches the spot by id
    const [deleted, setDeleted] = useState([]);

    useEffect(() => {
        dispatch(fetchSpotById(id))
    }, [dispatch, review, id, deleted])


    // for later when adding location on map... actually should it be on this page?
    useEffect(() => {
        let getXY = document.querySelector(".map")
        if (getXY) {
            getXY.addEventListener("mouseup", (e) => {
                console.log('woot')
            })
        }
    })

    if (!singleSpot) { return null }

    let payload;
    if (user) {
        payload = {
            userId: user.id,
            spotId: parseInt(id),
            body,
            cleanReview: parseInt(cleanReview),
            locationReview: parseInt(locationReview),
            valueReview: parseInt(valueReview)
        }
    }


    async function reviewSubmit(e) {
        e.preventDefault()
        await dispatch(postReview(payload));
        history.push(`/spot/${parseInt(id)}`)
    }

    // deletes review
    async function deleteMyReview(id) {
        await dispatch(deleteReviewThunk(id))
        history.push(`/spot/${singleSpot.id}`)
        setDeleted(id)
    }

    //makes the createdAt date look nicer
    function niceDate(str) {
        let yearMonth = str.split("-")
        let day = yearMonth[2].split('T')
        return `${yearMonth[0]}/${yearMonth[1]}/${day[0]}`
    }

    // averages total review
    function average(arr) {
        if (arr.length === 0) return `No reviews`
        let totalReview = 0;
        let numOfReviews = arr.length
        for (let i = 0; i < arr.length; i++) {
            totalReview += (arr[i].cleanReview + arr[i].valueReview + arr[i].locationReview) / 3
        }
        return `${(totalReview / numOfReviews).toFixed(1)} / 5`
    }

      // averages total review
      function averageCleanliness(arr) {
        if (arr.length === 0) return 0;
        let totalCleanReview = 0;
        let numOfReviews = arr.length;
        for (let i = 0; i < arr.length; i++) {
            totalCleanReview += (arr[i].cleanReview)
        }
        return (totalCleanReview / numOfReviews).toFixed(1)
    }

        // averages total review
        function averageLocation(arr) {
            if (arr.length === 0) return 0;
            let totalLocationReview = 0;
            let numOfReviews = arr.length;
            for (let i = 0; i < arr.length; i++) {
                totalLocationReview += (arr[i].locationReview)
            }
            return (totalLocationReview / numOfReviews).toFixed(1)
        }

        function averageValue(arr) {
            if (arr.length === 0) return 0;
            let totalLocationReview = 0;
            let numOfReviews = arr.length;
            for (let i = 0; i < arr.length; i++) {
                totalLocationReview += (arr[i].valueReview)
            }
            return (totalLocationReview / numOfReviews).toFixed(1)
        }

        function averageOverall(arr) {
            if (arr.length === 0) return 0;
            let totalReview = 0;
            let numOfReviews = arr.length
            for (let i = 0; i < arr.length; i++) {
                totalReview += (arr[i].cleanReview + arr[i].valueReview + arr[i].locationReview) / 3
            }
            return (totalReview / numOfReviews).toFixed(1)
        }


    // getXY.addEventListener("mousedown", (e)=>{
    //     // GetCoordinates(e);
    //     console.log('woot')

    return (
        <>
            <div id='spacer'></div>
            <div className="spotWrapper">

                <div className="spotById">

                        <div className="spotTitle">
                            <h1 className="spotById--title">{singleSpot.title}</h1>
                            <div>
                                <img src='/images/redStar.png' style={{ width: '15px' }} alt="rating star"></img> &nbsp;
                                {average(singleSpot.Reviews)}
                            </div>
                        </div>


                        <div className="spotById--pics">
                            <div className="leftPicDiv">
                                <img src={singleSpot.mainPic} className="leftPic" alt="main view"></img>
                            </div>
                            <div className="rightPics">
                                    <div className="upperLeft">
                                        <img src={singleSpot.Pics[0]?.picUrl ? singleSpot.Pics[0].picUrl : '/images/morePhotosComingT.jpg'} className="upLeftPic" alt="up left pic"></img>
                                    </div>

                                    <div className="upperRight">
                                        <img src={singleSpot.Pics[1] ? singleSpot.Pics[1].picUrl : '/images/morePhotosComingT.jpg'} className="upRightPic" alt="up right pic"></img>
                                    </div>

                                    <div className="lowerLeft">
                                        <img src={singleSpot.Pics[2]  ? singleSpot.Pics[2].picUrl : '/images/morePhotosComingB.jpg'} className="lowLeftPic" alt="low left pic"></img>
                                    </div>

                                    <div className="lowerRight">
                                        <img src={singleSpot.Pics[3]  ? singleSpot.Pics[3].picUrl : '/images/morePhotosComingB.jpg'} className="lowRightPic" alt="low right pic"></img>
                                    </div>
                           </div>

                         </div>



                         <div className="location-price-book">
                                <div className="spotById--location">
                                     <h2 className="loc"> Location: {singleSpot.location} </h2>
                                </div>

                                <div className="spotById--price--book">
                                      <h2 className="loc">{singleSpot.price} (gp) / night</h2>
                                      <button className="bookSpot">Book Spot</button>
                                </div>

                         </div>

                        <div className="divHR"></div>


                        <div className="reviewsStats">
                            <div className="starAndRating">
                                <img src='/images/redStar.png' style={{ width: '30px' }} alt="rating star"></img> &nbsp;
                                <span className="ratingBold">{average(singleSpot.Reviews)}</span> &nbsp;
                                {singleSpot.Reviews.length === 0 && '(0)'}
                                {singleSpot.Reviews.length === 1 && `(${singleSpot.Reviews.length} Review)`}
                                {singleSpot.Reviews.length > 1 && `(${singleSpot.Reviews.length} Reviews)`}
                            </div><div></div>

                            <div className="cleanlinessReview">
                                    <div>
                                <div>Cleanliness</div>
                                        <div className="percentage"
                                        style={{width: singleSpot.Reviews ?  Math.floor(averageCleanliness(singleSpot.Reviews) * 50) : '1px'}}>
                                        </div>
                                        <div className="total"></div>
                                        <div className="average">
                                            {singleSpot.Reviews ? `${averageCleanliness(singleSpot.Reviews)} / 5` : '0'}
                                        </div>
                                    </div>
                            </div>


                            <div className="locationReview">
                                    <div>
                            <div>Location</div>
                                        <div className="percentage"
                                        style={{width: singleSpot.Reviews ? Math.floor(averageLocation(singleSpot.Reviews) * 50) : '1px'}}>

                                        </div>
                                        <div className="total"></div>
                                        <div className="average">
                                            {singleSpot.Reviews ? `${averageLocation(singleSpot.Reviews)} / 5` : '0'}
                                         </div>
                                    </div>
                            </div>

                            <div className="valueReview">
                                    <div>
                            <div>Value</div>
                                        <div className="percentage"
                                        style={{width: singleSpot.Reviews ? Math.floor(averageValue(singleSpot.Reviews) * 50) : '1px'}}></div>
                                        <div className="total"></div>
                                        <div className="average">
                                            {singleSpot.Reviews ? `${averageValue(singleSpot.Reviews)} / 5` : '0'}
                                        </div>
                                    </div>


                            </div>
                            <div className="overallReview">
                                    <div>
                            <div>Overall</div>
                                        <div className="percentage"
                                        style={{width: singleSpot.Reviews ? Math.floor(averageOverall(singleSpot.Reviews) * 50) : '1px'}}></div>
                                        <div className="total"></div>
                                        <div className="average">
                                            {singleSpot.Reviews ? `${averageOverall(singleSpot.Reviews)} / 5` : '0'}
                                        </div>
                                    </div>


                            </div>

                        </div>

                        <div className="divHR"></div>


                    <div className="reviews">

                {singleSpot.Reviews.map((e) =>
                        <div key={e.id} className="reviewDiv">

                            <div className="nameAndIcon">
                            {/* profile picture     */}
                                    <div className="reviewerProfilePic" >
                                        <div className='profileImg'>
                                            <div className="profileCircle" style={{ backgroundColor: e.User.profileBackgroundColor }}>
                                                <img src={`/images/profile/${e.User.profilePic}`} className="theImage" alt="profilePic"></img>
                                                <img src="/images/profile/aProfileRing.png" className="theRing" alt="profileRing"></img>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="reviewName">
                                        By: {e.User.name} on {niceDate(e.createdAt)}
                                    </div>

                            </div>

                            <div className="reviewBody">
                                {e.body}
                            </div>

                            <div className="reviewAndDeleteBtn">
                                    <div className="userReviews">Location: {e.valueReview} / 5. Cleanliness: {e.cleanReview} / 5. Value: {e.valueReview} / 5. Overall: {((e.valueReview + e.cleanReview + e.valueReview) / 3).toFixed(1)}</div>
                                    {user && user.id === e.userId && <button onClick={() => deleteMyReview(e.id)} className="deleteReviewBtn">Delete Review</button>}
                            </div>

                        </div>
                    )}


                    {user &&
                         <div className="reviewDiv">
                            <form onSubmit={(e) => reviewSubmit(e)} className="formFields">
                                <h2>Add Review:</h2>
                                <div className="form--element">
                                    <label htmlFor="body">Review</label>
                                    <textarea id="body" onChange={(e) => setBody(e.target.value)} value={body}></textarea>
                                </div>

                                <div className="form--element">
                                    <label htmlFor="cleanReview">Cleanliness</label>
                                    <input type="number" id="cleanReview" onChange={(e) => setCleanReview(e.target.value)} value={cleanReview}></input>
                                </div>

                                <div className="form--element">
                                    <label htmlFor="locationReview">Location</label>
                                    <input type="number" id="locationReview" onChange={(e) => setLocationReview(e.target.value)} value={locationReview}></input>
                                </div>

                                <div className="form--element">
                                    <label htmlFor="valueReview">Value</label>
                                    <input type="number" id="valueReview" onChange={(e) => setValueReview(e.target.value)} value={valueReview}></input>
                                </div>

                                <button type="submit">Submit</button>

                            </form>
                        </div>
                    }










                    </div>












                </div>



                <div className="map">
                    <div id="locOnMap" style={{ top: singleSpot.coordinateX, left: singleSpot.coordinateY }}>{singleSpot.title}</div>
                    <img src="/images/swordCoastMap.jpg" className="swordCoastMap" alt="sword coast map"></img>
                </div>

            </div>
        </>
    )

}




   {/* <div><h1>Title: {singleSpot.title}</h1></div>
                        <div><h2>Location: {singleSpot.location}</h2></div>
                        <div>Price: {singleSpot.price}(gp)</div>
                        <div>Allows Familiars?: {singleSpot.allowsFamiliar ? <span>Yes</span> : <span>No</span>}</div>
                        <div style={{ display: 'inline-block' }}>
                            <img src={singleSpot.mainPic} style={{ height: '250px' }} alt="main view"></img>
                            {singleSpot.Pics.map((e) => <img src={e.picUrl} style={{ height: '125px' }} key={e.id} alt="images"></img>)}
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
                        <div>Coordinates: X:{singleSpot.coordinateX}, Y:{singleSpot.coordinateY}</div> */}
