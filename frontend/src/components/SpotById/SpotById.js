import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchSpotById } from '../../store/spot'
import { useHistory, Link } from 'react-router-dom'
import { postReview } from '../../store/review'
import { deleteReviewThunk } from '../../store/review'
import { bookSpot } from '../../store/booking';
import './spotById.css'
import MapController from '../MapController/MapController';
// import { dispatchCoordinates } from '../../store/locCoordinates';

export default function SpotById() {
    const { id } = useParams();
    const dispatch = useDispatch();

    //=========  review form data  ===================
    const [body, setBody] = useState('')
    const [cleanReview, setCleanReview] = useState(1);
    const [locationReview, setLocationReview] = useState(1);
    const [valueReview, setValueReview] = useState(1);
    const [bookForm, setBookForm] = useState(false)
    // const loggedIn = useRef(false)

    //======== grap one by id =======================
    const history = useHistory()
    const singleSpot = useSelector(state => state.spot.spot)
    const user = useSelector(state => state.session.user)
    const review = useSelector(state => state.review)
    // const profPic = singleSpot?.User.profilePic
    // const bgColor = singleSpot?.User.profileBackgroundColor

    const [deleted, setDeleted] = useState([]);

    //========== booking ============
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState("")
    const [numGuests, setNumGuests] = useState(0)
    const [totalCost, setTotalCost] = useState(0)

    const [addReview, setAddReview] = useState(false)
    const [sortedReview, setSortedReview] = useState([])

    useEffect(()=>{
        let date1 = new Date(startDate)
        let date2 = new Date(endDate)

        let milliseconds = Math.abs(date1 - date2)
        let seconds = milliseconds / 1000
        let minutes = seconds / 60
        let hours = minutes / 60
        let days = hours / 24
        let cost = singleSpot?.price * days || 0

        setTotalCost(cost.toFixed(2))

         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[startDate, endDate])

    //fetches the spot by id
    useEffect(() => {
        dispatch(fetchSpotById(id))
    }, [dispatch, review, id, deleted])


    // scrolls to top of page
    useEffect(() => {
        const topDiv = document.getElementById('spacer')
        topDiv?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })

    }, [])

        useEffect(()=>{
            let sorted = singleSpot?.Reviews.sort((a, b) => {
                if(a.createdAt < b.createdAt){
                    return 1
                }
                if(a.createdAt > b.createdAt){
                   return -1
                }
                return 0
            })
            setSortedReview(sorted)
            // console.log(sortedReview.current)
        }, [singleSpot])


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
        setAddReview(false)
        // history.push(`/spot/${parseInt(id)}`)
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

    function toggleBookSpot() {
        if (user?.id === undefined) { alert("You must have an account and be logged in to book this Spot"); return }

        bookForm ? setBookForm(false) : setBookForm(true)
    }

    function handleBooking(e) {
        e.preventDefault()
        const bookingPayload = {
            hostId: singleSpot?.User.id,
            bookerId: user.id,
            startDate,
            endDate,
            spotId: singleSpot.id,
            numGuests: parseInt(numGuests)
        };
        let data = dispatch(bookSpot(bookingPayload))
        if(data.errors){
            alert(data.errors)
        }
        history.push(`/userPage`)
    }

    // getXY.addEventListener("mousedown", (e)=>{
    //     // GetCoordinates(e);


    return (
        <>
            <div id='spacer'></div>
            <div className="spotWrapper">

                <div className="spotById">
                    <div style={{height: "30px"}}></div>
                    <div className="spotTitle">
                        <h1 className="spotById--title">{singleSpot.title}</h1>
                        <div>
                            <img src='/images/redStar.png' style={{ width: '15px' }} alt="rating star"></img> &nbsp;
                            {average(singleSpot.Reviews)}
                        </div>
                    </div>


                    <div className="spotById--pics">
                        <div className="mainPicContainterSingleSpot">
                                <div className="mainPicBackgroundSingleSpot" style={{backgroundImage: `url(${singleSpot.mainPic})`}}></div>
                                <div className="mainPicForegroundSingleSpot" style={{backgroundImage: `url(${singleSpot.mainPic})`}}></div>
                        </div>

                    </div>


                    {bookForm &&
                        <>
                            {/* id	hostId	bookerId	startDate	endDate	spotId	numGuests	createdAt	updatedAt */}

                            <div className="divHR"></div>
                                <div className="bookingFormContainer">
                            <form onSubmit={(e) => handleBooking(e)} className="bookingForm">
                                <h2>Book Spot</h2>
                                <div className="bookingFormElement">
                                    <div>Star Date:</div>
                                    <input type="date" onChange={(e) => setStartDate(e.target.value)} value={startDate} className="bookingInput"></input>
                                </div>

                                <div className="bookingFormElement">
                                    <div>End Date:</div>
                                    <input type="date" onChange={(e) => setEndDate(e.target.value)} value={endDate} className="bookingInput"></input>
                                </div>

                                <div className="bookingFormElement">
                                    <div>Number of Guests:</div>
                                <input type="number" onChange={(e) => setNumGuests(e.target.value)} value={numGuests} className="bookingInput"></input>
                                </div>
                                <div className="bookingFormElement">
                                <div>Total Cost:</div>
                                <div>{totalCost}&#40;sp&#41;</div>
                                </div>
                                <button type="submit" className="bookingButton">Submit</button>
                                <button className="bookingButton" onClick={(e) => toggleBookSpot()}>Cancel</button>
                            </form>
                            </div>
                            <div className="divHR"></div>

                        </>
                    }

                    <div className="spotById--description">
                            {singleSpot.description}
                    </div>

                    <div className="location-price-book">
                        <div className="spotById--location">
                            <h2 className="loc"> Location: {singleSpot.location} </h2>
                        </div>



                        <div className="spotById--price--book">
                            <h2 className="loc">{singleSpot.price} (gp) / night</h2>
                            {user?.id !== singleSpot?.User.id && !bookForm && <button className="bookSpot" onClick={(e) => toggleBookSpot()}>Book Spot</button>}
                        </div>

                    </div>


                    <div className="tags">Tags: {singleSpot.Tags.map((e) => <Link to={`/spots/${e.tag}`} key={e.id}> {e.tag} </Link>)}</div>



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
                                    style={{ width: singleSpot.Reviews ? Math.floor(averageCleanliness(singleSpot.Reviews) * 50) : '1px' }}>
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
                                    style={{ width: singleSpot.Reviews ? Math.floor(averageLocation(singleSpot.Reviews) * 50) : '1px' }}>

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
                                    style={{ width: singleSpot.Reviews ? Math.floor(averageValue(singleSpot.Reviews) * 50) : '1px' }}></div>
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
                                    style={{ width: singleSpot.Reviews ? Math.floor(averageOverall(singleSpot.Reviews) * 50) : '1px' }}></div>
                                <div className="total"></div>
                                <div className="average">
                                    {singleSpot.Reviews ? `${averageOverall(singleSpot.Reviews)} / 5` : '0'}
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="divHR"></div>


                    <div className="reviews">

                    {user &&
                            <div className="reviewDiv">
                                {addReview
                                    ? <div className="reviewToggle" onClick={() => setAddReview(false)}><h2>Add Review: -</h2></div>
                                    : <div className="reviewToggle" onClick={() => setAddReview(true)}><h2>Add Review: +</h2></div>
                                    }

                                    {addReview &&
                                <form onSubmit={(e) => reviewSubmit(e)} className="formFields">

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
}
                            </div>
                        }




                        {sortedReview?.map((e) =>
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





                    </div>



                </div>


                <MapController  />

            </div>
        </>
    )

}
