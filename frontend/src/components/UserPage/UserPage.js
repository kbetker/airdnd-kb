import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookedSpots } from '../../store/booking';
import { fetchMySpots } from '../../store/spots';
import { useHistory } from 'react-router-dom'
import { deleteBooking } from '../../store/booking';


function UserPage() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const bookedSpots = useSelector(state => state.booking.spot)
    const mySpots = useSelector(state => state.spots.spots)
    const history = useHistory()
    useEffect(() => {
        dispatch(getBookedSpots(user.id))
        dispatch(fetchMySpots(user.id))

    }, [])

    useEffect(()=>{
        if(!user){
            history.push("/")
        }
    })

    function handleDelete(id){
        let data = dispatch(deleteBooking(id))
    }

    return (
    <div style={{marginTop: "250px"}}>
            <h2>My Booked Spots</h2>
        <div style={{display:'flex'}}>
            {bookedSpots?.map((el) =>
                <div style={{ margin: "10px", padding: "10px" }} key={`${el.id}-bookedSpot`}>
                    Name: {el.Spot.title}, Start Date: {el.startDate}, End Date:{el.endDate}, Price: {el.Spot.price}
                    <img src={el.Spot.mainPic} style={{ width: "250px" }}></img>
                    <button onClick={()=>handleDelete(el.id)}>Delete</button>
                </div>
            )}
        </div>


        <h2>My Spots</h2>
        <div style={{display:'flex'}}>
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
