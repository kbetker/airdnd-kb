import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookedSpots } from '../../store/booking';
import { fetchMySpots } from '../../store/spots';
import { useHistory } from 'react-router-dom'
import { deleteBooking } from '../../store/booking';
import { editTheBooking } from '../../store/booking';


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
    useEffect(() => {
        dispatch(getBookedSpots(user.id))
        dispatch(fetchMySpots(user.id))

    }, [])

    useEffect(() => {
        if (!user) {
            history.push("/")
        }
    })

    function handleDelete(id) {
        let data = dispatch(deleteBooking(id))
    }
    async function handleSubmit(e, id){
        e.preventDefault()

        const payload = {
            startDate,
            endDate,
            numGuests
        };

        const data = await dispatch(editTheBooking(id, payload))
        console.log(data)
        setEditBooking('')
    }
    function handleEdit(targetBooking, start, end, numGuests){
        setStartDate(start)
        setEndDate(end)
        setNumGuests(numGuests)
        setEditBooking(targetBooking)
    }

    return (
        <div style={{ marginTop: "250px" }}>
            <h2>My Booked Spots</h2>
            <div style={{ display: 'flex' }}>
                {bookedSpots?.map((el) => <>
                    <form onSubmit={(e)=>handleSubmit(e, el.id)} style={{ margin: "10px", padding: "10px" }} key={`${el.id}-bookedSpot`}>
                        Name: {el.Spot.title},
                        Start Date: {editBooking === `${el.id}` ?
                                <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)}></input> : el.startDate},

                        End Date: {editBooking === `${el.id}` ?
                                <input type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)}></input> : el.endDate},

                        # of Guests: {editBooking === `${el.id}` ?
                                <input type="number" value={numGuests} onChange={(e)=>setNumGuests(e.target.value)}></input> : el.numGuests},

                        Price: {el.Spot.price}

                        {editBooking === `${el.id}` && <button onClick={() => handleDelete(el.id)}>Delete Booking</button>}

                        <img src={el.Spot.mainPic} style={{ width: "250px" }}></img>

                        <div onClick={() => handleEdit(`${el.id}`, el.startDate, el.endDate, el.numGuests)}>Edit</div>

                        {editBooking === `${el.id}` && <button onClick={() => setEditBooking(``)}>Cancel Editing</button>}

                        {editBooking === `${el.id}` && <button type="submit">Submit Changes</button>}
                    </form>
                </>
                )}
            </div>


            <h2>My Spots</h2>
            <div style={{ display: 'flex' }}>
                {mySpots?.map((el) =>
                    <div style={{ margin: "10px", padding: "10px" }} key={`${el.id}-bookedSpot`}>
                        Name: {el.title} Price: {el.price}
                        <img src={el.mainPic} style={{ width: "250px" }}></img>
                    </div>
                )}
            </div>



        </div>)
}

export default UserPage
