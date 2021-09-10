import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookedSpots } from '../../store/booking';
import { fetchMySpots } from '../../store/spots';
import { useHistory } from 'react-router-dom'
import { deleteBooking } from '../../store/booking';
import { editTheBooking } from '../../store/booking';
import { deleteMySpot } from '../../store/spots';
import noImage from "../SpotNew/NoImageSelected.png"
import paperTexture from "./paperTexture.jpg"
import castle from "./castle.jpg"
import "./UserPage.css"


function UserPage() {
    const [editBooking, setEditBooking] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [numGuests, setNumGuests] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const bookedSpots = useSelector(state => state.booking.spot)
    const mySpots = useSelector(state => state.spots.spots)
    const history = useHistory()
    const [totalCost, setTotalCost] = useState(0)

  useEffect(() => {
        if (!user) {
            history.push("/")
        }
    })


    function getTotal(start, end, price) {
        let date1 = new Date(start)
        let date2 = new Date(end)

        let milliseconds = Math.abs(date1 - date2)
        let seconds = milliseconds / 1000
        let minutes = seconds / 60
        let hours = minutes / 60
        let days = hours / 24
        let cost = price * days || 0

        return { "days": days, "cost": cost }

    }






    useEffect(() => {
        dispatch(getBookedSpots(user?.id))
        dispatch(fetchMySpots(user?.id))

    }, [dispatch])



    function handleDelete(id) {
        let data = dispatch(deleteBooking(id))
        if (data.errors) {
            alert(data.errors)
        }
    }
    async function handleSubmit(e, id) {
        e.preventDefault()

        const payload = {
            startDate,
            endDate,
            numGuests
        };

        const data = await dispatch(editTheBooking(id, payload))
        // console.log(data)
        setEditBooking('')
    }
    function handleEdit(targetBooking, start, end, numGuests) {
        setStartDate(start)
        setEndDate(end)
        setNumGuests(numGuests)
        setEditBooking(targetBooking)
    }

    function handleSpotDelete(id) {
        dispatch(deleteMySpot(id))
    }

    return (
        <div className="userPage" style={{backgroundImage: `url(${castle})`}}>





            <h2>My Booked Spots</h2>
            <div className="myBookedSpots">
            {bookedSpots?.length === 0 && <div className="noSpots">You do not have any Spots booked</div>}

                {bookedSpots?.map((el) =>
                    <form onSubmit={(e) => handleSubmit(e, el.id)} className="bookedSpot" key={`${el.id}-bookedSpot`}>

                        <div className="bookedSpotsTop">
                            <div className="bookedSpotTitle">{el.Spot.title} - id#: {user?.id}SKT0{el.id}</div>
                        </div>


                        <div className="bookedSpotsMiddle">

                            <div className="bookedSpotsLeft">
                                <div className="mainPicContainter-Booking">
                                    <div className="mainPicBackground-Booking" style={{ backgroundImage: `url(${el.Spot.mainPic})` }}></div>
                                    <div className="mainPicForeground-Booking" style={{ backgroundImage: `url(${el.Spot.mainPic})` }}></div>
                                </div>
                            </div>


                            <div className="bookedSpotsRight">
                                <div className="bookedSpotsRightElement">
                                    <div>Start Date:</div> {editBooking === `${el.id}`
                                        ? <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="bookedSpotInput"></input>
                                        : el.startDate}
                                </div>

                                <div className="bookedSpotsRightElement">
                                    <div>End Date:</div> {editBooking === `${el.id}`
                                        ? <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="bookedSpotInput"></input>
                                        : el.endDate}
                                </div>

                                <div className="bookedSpotsRightElement">
                                    <div># of Guests:</div> {editBooking === `${el.id}`
                                        ? <input type="number" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} className="bookedSpotInput"></input>
                                        : el.numGuests}
                                </div>

                                <div className="bookedSpotsRightElement">
                                    <div>Total Price:</div> {getTotal(el.startDate, el.endDate, el.Spot.price).cost}gp
                                </div>

                                {editBooking === `${el.id}` ?
                                    <div className="bookedSpotsRightElement">
                                        <button type="submit" className="editBookingButton">Submit Changes</button>
                                        <button onClick={() => setEditBooking(``)} className="editBookingButton">Discard Changes</button>
                                    </div>
                                    : <div style={{ height: "20px" }}></div>

                                }
                            </div>
                        </div>

                        <div className="bookedSpotsBottom">
                            <div className="editBookingButton" onClick={() => handleEdit(`${el.id}`, el.startDate, el.endDate, el.numGuests)}>Edit</div>
                            <div className="editBookingButton" onClick={() => history.push(`/spot/${el.Spot.id}`)}>Go to Spot</div>
                            {editBooking === `${el.id}` && <button className="editBookingButton deleteBooking" onClick={() => handleDelete(el.id)}>Cancel Booking</button>}
                        </div>
                    </form>

                )}
            </div>


            <h2>My Spots</h2>
            <div className="myBookedSpots">
                {mySpots?.length === 0 && <div className="noSpots">You do not have any Spots listed</div>}
                {mySpots?.map((el) =>

                    <div className="mySpots" key={`${el.id}-MySpot`}>
                        <div className="bookedSpotsTop">
                            <div className="bookedSpotTitle">{el.title}</div>
                        </div>

                        <div className="bookedSpotsMiddle">

                            <div className="bookedSpotsLeft">
                                <div className="mainPicContainter-Booking">
                                    <div className="mainPicBackground-Booking" style={{ backgroundImage: `url(${el.mainPic || noImage})` }}></div>
                                    <div className="mainPicForeground-Booking" style={{ backgroundImage: `url(${el.mainPic || noImage})`, backgroundColor: !el.mainPic && '#333333' }}></div>
                                </div>
                            </div>

                            <div className="mySpotsRight">
                                {user?.id === el.ownerId && <button className="editBookingButton" onClick={() => history.push(`/spot/${el.id}/edit`)}>Edit</button>}
                                <button className="editBookingButton" onClick={() => history.push(`/spot/${el.id}`)}>Go to Spot</button>
                                {user?.id === el.ownerId && <button className="editBookingButton deleteBooking" onClick={() => handleSpotDelete(el.id)}>Delete</button>}
                            </div>

                        </div>



                    </div>







                    // <div style={{ margin: "10px", padding: "10px" }} key={`${el.id}-MySpot`}>
                    //     Name: {el.title} Price: {el.price}
                    //     <img src={el.mainPic} style={{ width: "250px" }} alt=''></img>
                    //     {user?.id === el.ownerId && <button onClick={() => history.push(`/spot/${el.id}/edit`)}>Edit</button>}
                    //     {user?.id === el.ownerId && <button onClick={() => handleSpotDelete(el.id)}>Delete</button>}
                    // </div>

                )}
            </div>



        </div>)
}

export default UserPage
